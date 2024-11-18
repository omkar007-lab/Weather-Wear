// backend/utils/apiHandler.js

/**
 * Asynchronous handler to manage try-catch for route controllers
 * @param {Function} fn - Async route function
 * @returns {Function} - Express middleware function
 */
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next); // Pass errors to the global error handler
  };
};

module.exports = asyncHandler;
