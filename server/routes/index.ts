import express from 'express';
const router = express.Router();

// Import individual route modules
const loginRouter = require('./api/login');

// Use individual route modules
router.use('/login', loginRouter);  

// Add more routes as needed
module.exports = router;