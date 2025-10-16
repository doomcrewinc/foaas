const logger = require('./logger')
const env = require('./env')

// Centralized error handling middleware
// Must be added after all routes but before the 622 fallback
function errorHandler (err, req, res, next) {
  // Log the error with full details
  logger.error('Unhandled error', {
    error: err.message,
    stack: err.stack,
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    userAgent: req.get('user-agent')
  })

  // Don't expose internal error details to client in production
  const isDevelopment = env.NODE_ENV !== 'production'

  // Determine status code
  const statusCode = err.statusCode || err.status || 500

  // Send appropriate response
  res.status(statusCode)

  const errorResponse = {
    error: true,
    message: isDevelopment ? err.message : 'Internal Server Error',
    statusCode
  }

  // Add stack trace in development only
  if (isDevelopment && err.stack) {
    errorResponse.stack = err.stack
  }

  res.json(errorResponse)
}

module.exports = errorHandler
