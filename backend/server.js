// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const sqlite3 = require('sqlite3').verbose();
// const path = require('path');

// const app = express();
// const port = 3000;

// // Connect to SQLite DB
// const dbPath = path.resolve(__dirname, 'react_project_data.db');
// const db = new sqlite3.Database(dbPath, (err) => {
//   if (err) {
//     console.error('❌ Failed to connect to database:', err.message);
//   } else {
//     console.log('✅ Connected to SQLite database');
//   }
// });

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // POST: Add item
// app.post('/add-item', (req, res) => {
//   const { imageurl, itemname, price } = req.body;

//   if (!imageurl || !itemname || !price) {
//     return res.status(400).send('Missing fields');
//   }

//   const query = `INSERT INTO itemandprice (imageurl, itemname, price) VALUES (?, ?, ?)`;
//   db.run(query, [imageurl, itemname, price], function (err) {
//     if (err) {
//       console.error('❌ DB error:', err.message);
//       res.status(500).send('Database insert error');
//     } else {
//       console.log(`✅ Item inserted with ID: ${this.lastID}`);
//       res.status(200).send('Item added successfully');
//     }
//   });
// });

// // Optional: GET items
// app.get('/items', (req, res) => {
//   db.all('SELECT * FROM items', [], (err, rows) => {
//     if (err) {
//       console.error('❌ DB read error:', err.message);
//       res.status(500).send('Error fetching items');
//     } else {
//       res.json(rows);
//     }
//   });
// });

// // Start server
// app.listen(port, () => {
//   console.log(`🚀 Server running at http://localhost:${port}`);
// });
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, 'react_project_data.db');
const db = new sqlite3.Database(dbPath);

// Route to get all items
app.get('/items', (req, res) => {
  const query = 'SELECT * FROM itemandprice';
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('DB Error:', err.message);
      res.status(500).json({ error: 'Failed to fetch items' });
    } else {
      res.json(rows);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
