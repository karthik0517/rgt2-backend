const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Sample data for the API
const data = {
  message: 'Hello from the backend API! kkkk',
  timestamp: new Date()
  
};

// Define the API endpoint
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});