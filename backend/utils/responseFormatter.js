// backend/utils/responseFormatter.js

// Standardized response structure for success
const successResponse = (res, data, statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    data,
  });
};

// Standardized response structure for errors
const errorResponse = (res, message, statusCode = 400, error = null) => {
  res.status(statusCode).json({
    success: false,
    message,
    ...(error && { error }), // Include error details if provided
  });
};

module.exports = { successResponse, errorResponse };
