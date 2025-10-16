# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FOAAS (Fuck Off As A Service) is a RESTful API service that provides creative profanity-laden responses. Built with Express.js, it serves responses in multiple formats (JSON, XML, HTML, text) and supports optional internationalization.

## Commands

### Development
- `npm install` - Install dependencies
- `npm start` - Start the server (default port 3000, configurable via PORT env var)
- `npm test` - Run tests with coverage (uses Jasmine and nyc)

### Docker
- `docker build -t foaas:1 .` - Build Docker image
- `docker run -v $(pwd):/usr/src/app -p 5000:5000 foaas:1` - Run in container

### Testing
Tests are written with Jasmine and located in `/spec`. To run a single test file:
- `node node_modules/jasmine/bin/jasmine.js spec/operations/awesome_spec.js`

## Architecture

### Core Structure

The application uses a plugin-based architecture where operations, renderers, and filters are dynamically loaded at startup:

- **lib/server.js** - Entry point that instantiates FOAAS class and starts the server
- **lib/foaas.js** - Main application class that coordinates Express app, loads plugins, and handles routing
- **lib/operations/** - Individual operation endpoints (e.g., `/awesome/:from`, `/version`)
- **lib/renderers/** - Output format handlers (JSON, XML, HTML, text)
- **lib/filters/** - Request processors (currently i18n translation filter)

### Operations Plugin System

Each operation file exports a module with:
- `name` - Human-readable operation name
- `url` - Express route pattern
- `fields` - Array describing URL parameters (`[{name, field}]`)
- `register(app, output, version)` - Function that registers the route with Express

Operations call `output(req, res, message, subtitle)` to render responses. The output function handles content negotiation and applies filters.

### Renderers

Renderers are loaded from `/lib/renderers/` and export:
- `name` - Human-readable name
- `mime` - MIME type (e.g., `application/json`)
- `render(req, res)` - Function that renders `req.message` and `req.subtitle`

Content negotiation uses Express's `req.accepts()` based on client headers.

### Filters

Filters process requests before rendering. Each filter exports:
- `name` - Filter identifier
- `priority` - Execution order (lower runs first)
- `register(app)` - Optional setup function for Express middleware
- `applies(req)` - Returns true if filter should process this request
- `process(req, res, next)` - Transform request and call `next(req, res)` when done

Filters are chained in priority order using a continuation pattern (lib/foaas.js:214-218).

### Request Flow

1. Request hits Express app
2. Standard middleware (compression, CORS, body parsing)
3. Operation route handler calls `output(req, res, message, subtitle)`
4. `output()` identifies applicable filters based on `applies(req)`
5. Filters execute in chain (highest priority first)
6. Final `process()` handles content negotiation and rendering
7. Appropriate renderer generates response

### Default Operation

If no specific operation matches, the default route `/:thing/:from` (lib/foaas.js:171-175) generates a response of the form "Fuck {thing}. - {from}".

### Special Endpoints

- `/operations` - Returns JSON array of all available operations
- `/fucks` - Returns HTML documentation table (generated at startup)
- `/version` - Returns current version from package.json
- All unmatched routes return HTTP 622 "All The Fucks"

### Environment Variables

- `PORT` - Server port (default: 3000)
- `ENV=prod` - Enables HTTPS redirect middleware
- `DEBUG` - Enables request path logging

## Adding New Operations

1. Create file in `/lib/operations/` following the plugin pattern (see lib/operations/awesome.js)
2. Create corresponding spec file in `/spec/operations/` with `_spec.js` suffix
3. Test structure should verify: name, url, fields, and register function behavior
4. Run tests to ensure proper integration

## Code Style

The codebase uses JavaScript Standard Style. Note that many files have TODO comments from CoffeeScript to JavaScript conversion (bulk-decaffeinate) - these can be cleaned up during refactoring.
