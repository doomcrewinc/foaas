const { cleanEnv, str, port, bool } = require('envalid')

// Validate and sanitize environment variables
const env = cleanEnv(process.env, {
  // Server configuration
  PORT: port({ default: 3000, desc: 'Port to run the server on' }),

  // Environment type
  ENV: str({
    choices: ['dev', 'prod', 'test'],
    default: 'dev',
    desc: 'Environment type (dev, prod, or test)'
  }),

  // Node environment
  NODE_ENV: str({
    choices: ['development', 'production', 'test'],
    default: 'development',
    desc: 'Node environment'
  }),

  // Logging configuration
  LOG_LEVEL: str({
    choices: ['error', 'warn', 'info', 'debug'],
    default: 'info',
    desc: 'Logging level'
  }),

  // Debug mode
  DEBUG: bool({ default: false, desc: 'Enable debug logging' })
}, {
  // Options
  strict: false, // Allow other environment variables
  dotEnvPath: null // Don't automatically load .env file (user must do it if needed)
})

module.exports = env
