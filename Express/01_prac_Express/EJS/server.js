const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('home', { title: 'Home', user: { name: 'Shadab Ansari' } });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About', skills: ['HTML', 'CSS', 'JavaScript', 'Node.js'] });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

// Server start
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
