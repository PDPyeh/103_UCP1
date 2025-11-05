const express = require('express');
const db = require('./models');
const app = express();
const port = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.post('/hotel', async (req, res) => {
  try {
    const hotel = await db.Tentrem.create(req.body);
    res.status(201).json(hotel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

app.get('/hotel', async (_req, res) => {
  try {
    const hotels = await db.Tentrem.findAll();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve Kamar' });
  }
});

app.put('/hotel/:id', async (req, res) => {
  try {
    const hotel = await db.Tentrem.findByPk(req.params.id);
    if (!hotel) return res.status(404).json({ error: 'Kamar not found' });
    await hotel.update(req.body);
    res.json({ message: 'Kamar updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update Kamar' });
  }
});

app.delete('/hotel/:id', async (req, res) => {
  try {
    const hotel = await db.Tentrem.findByPk(req.params.id);
    if (!hotel) return res.status(404).json({ error: 'Kamar not found' });
    await hotel.destroy();
    res.json({ message: 'Kamar deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete Kamar' });
  }
});

// Start AFTER sync
db.sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });
