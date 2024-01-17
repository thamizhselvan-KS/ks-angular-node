import express from 'express';
const router = express.Router();

// Define routes specific to the '/users' path
router.get('/login', (req, res) => {
  res.send('Login successful!');
});

// Add more user-related routes as needed
module.exports = router;
