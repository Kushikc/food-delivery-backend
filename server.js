const express = require('express'); // Import Express framework
const app = express(); // Initialize Express app

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory array to store menu items
let menuItems = [];

// Route to get the menu items (GET /api/menu)
app.get('/api/menu', (req, res) => {
  // Respond with the list of menu items
  res.json(menuItems);
});

// Route to add a new menu item (POST /api/menu)
app.post('/api/menu', (req, res) => {
  const { name, price, category } = req.body;

  // Validate request body
  if (!name || !price || !category) {
    return res
      .status(400)
      .json({ message: 'All fields (name, price, category) are required' });
  }

  // Add the new menu item to the array
  const newMenuItem = { name, price, category };
  menuItems.push(newMenuItem);

  // Respond with success message
  res
    .status(201)
    .json({ message: 'Menu item added successfully', item: newMenuItem });
});

// Test route to ensure the server is running (GET /)
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
const port = 3000; // Port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
