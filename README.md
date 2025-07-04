# FOAAS

*May 2025 - v2.4.0*

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/doomcrewinc/foaas/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/doomcrewinc/foaas/tree/master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=doomcrewinc_foaas&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=doomcrewinc_foaas)
[![Known Vulnerabilities](https://snyk.io/test/github/doomcrewinc/foaas/badge.svg)](https://snyk.io/test/github/doomcrewinc/foaas)
[![Coverage Status](https://coveralls.io/repos/github/doomcrewinc/foaas/badge.svg?branch=master)](https://coveralls.io/github/doomcrewinc/foaas?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/doomcrewinc/foaas/badge.svg?branch=master)](https://coveralls.io/github/doomcrewinc/foaas?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

FOAAS (Fuck Off As A Service) provides a modern, RESTful, scalable solution to the common problem of telling people to fuck off.

Please see https://foaas.io for API documentation and examples.

# Installation

	npm install

# Run

	npm start

# Test

	npm test

# Docker

	docker build -t foaas:1 .
    docker run -v $(pwd):/usr/src/app -p 5000:5000 foaas:1

# Clients

API clients are available in a number of languages:

| Language | Name           | Info                                           |
|:---------|:---------------|:-----------------------------------------------|
| JS/Node  | `foaas-client` | https://www.npmjs.org/package/foaas-client     |
| Ruby     | `foaas-client` | https://github.com/petedmarsh/foaas-client     |
| PHP      | `foaas-php`    | https://github.com/klaude/foaas-php            |
| Python   | `foaas-python` | https://github.com/dmpayton/foaas-python       |
| Python   | `foaap`        | https://github.com/ilhomidin/foaap             |
| R        | `rfoaas`       | https://github.com/eddelbuettel/rfoaas         |
| CLI/bash | `foaas.sh`     | https://github.com/RaymiiOrg/foaas.sh          |
| CLI      | `foass-cli`    | https://github.com/palash25/foaas-cli          |
| .NET     | `FOAASClient`  | https://github.com/igorkulman/FOAASClient      |
| .NET Core| `foaas-dotnet` | https://github.com/Zuev-Alexander/foaas-dotnet |
| Java     | `JFOAAS`       | https://github.com/SSederberg/FOAAS-Java       |
| Go       | `go-fuck-off`  | https://godoc.org/github.com/ds0nt/go-fuck-off |
| Erlang   | `foaas-erlang` | https://github.com/rikribbers/foaas-erlang     |
| Crystal  | `foaas_client` | https://github.com/mamantoha/foaas_client      |
| Rust     | `foaas-rs`     | https://github.com/jilsahm/foaas-rs            |

# GUI Clients

| Platform          | Info                                                    |
|:------------------|:--------------------------------------------------------|
| Web               | https://github.com/hamza1311/fuck-off                   |


# Framework Support

| Framework     | Info                                                                         |
|:--------------------------------------------|:-----------------------------------------------------------------------------|
| [Polymer](https://www.polymer-project.org/) | https://github.com/benfonty/fooas-element                                    |
| [React](https://reactjs.org/) | https://github.com/circa10a/react-foaas-card                                   	     |

# Integrate FOAAS

| Platform/Software     | Name                                                                         |
|:--------------------------------------------|:-----------------------------------------------------------------------------|
| Thunderbird/Seamonkey                       | https://addons.mozilla.org/en-US/seamonkey/addon/qfo-quick-fuck-off          |
| TelegramBot                                 | https://github.com/rajanand02/TelegramFoaasBot                               |
| Slack                                       | https://github.com/revmischa/foaas-slack                                     |
| Amazon Echo                                 | https://www.amazon.com/dp/B01LZLFTMQ/ (source available [here](https://github.com/martinschaef/foaas-alex))|
| Terraform Provider                          | https://github.com/m13t/terraform-provider-foac                              |
| Discord                                     | https://discord.com/oauth2/authorize?client_id=997665947122937909&scope=bot%20applications.commands&permissions=277025466368 (source available [here](https://github.com/dwisiswant0/foaas-discord))|

# Contributing

## Adding new operations

To add a new FOAAS operation:

1. Fork into your account
2. Branch into a feature branch `feature/your_operation`
3. See the operation files in `/lib/operations`.
4. Add specs, using `/spec/operations` as examples. We won't be merging operations without working specs.
5. Push to your fork and submit a PR.

All contributions are very welcome.
