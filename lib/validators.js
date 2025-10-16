const { param, validationResult } = require('express-validator')
const sanitizer = require('sanitizer')

// Validation middleware for route parameters
// Sanitizes and validates string inputs to prevent XSS and injection attacks
const validateRouteParams = (paramNames) => {
  const validators = paramNames.map(paramName =>
    param(paramName)
      .trim()
      .notEmpty().withMessage(`${paramName} cannot be empty`)
      .isLength({ max: 500 }).withMessage(`${paramName} cannot exceed 500 characters`)
      .customSanitizer(value => sanitizer.sanitize(value))
  )

  return [
    ...validators,
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: true,
          message: 'Invalid input',
          details: errors.array()
        })
      }
      next()
    }
  ]
}

module.exports = { validateRouteParams }
