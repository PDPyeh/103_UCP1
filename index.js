const express = require('express');
const app = express();
const port = 3001;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

db.sequelize.sync().then(() => {
  console.log('Database synchronized');
}).catch((err) => {
  console.error('Error synchronizing database:', err);
});

app.post('/tentram', async (req, res) => {
  try {
    const tentram = await db.Tentram.create(req.body);
    res.status(201).json(tentram);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/tentram', async (req, res) => {
    try {
        const tentrams = await db.Tentram.findAll();
        res.send(tentrams);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve kamar' });
    }
});

app.put('/tentram/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const tentram = await db.Tentram.findByPk(id);
        if (!tentram) {
            return res.status(404).json({ error: 'kamar not found' });
        }
        await komik.update(data);
        res.send({message: 'kamar updated successfully'});
    } catch (error) {
        res.status(500).json({ error: 'Failed to update kamar' });
    }
});

app.delete('/tentram/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).json({ error: 'kamar not found' });
        }
        await komik.destroy();
        res.send({ message: 'kamar deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete kamar' });
    }
});