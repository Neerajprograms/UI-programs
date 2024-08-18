// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const jsonFilePath = path.join(__dirname, 'forms.json');

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, value } = req.body;

  const newData = {
    id: Date.now(), // Unique ID based on timestamp
    name: name,
    value: value
  };

  // Read the existing JSON data
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Error reading file');
      return;
    }

    // Parse the existing data and add new data
    let jsonData = JSON.parse(data);
    jsonData.push(newData);

    // Write the updated data back to the file
    fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf8', err => {
      if (err) {
        console.error('Error writing file:', err);
        res.status(500).send('Error writing file');
      } else {
        res.send('Data successfully inserted!');
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
