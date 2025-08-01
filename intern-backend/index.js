const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Intern = require('./models/Intern');

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://supsri2005:gYqK5ckCP3CHRTEz@cluster0.grdbjel.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

app.get('/api/intern', async (req, res) => {
  try {
    const intern = await Intern.findOne();
    res.json(intern);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching intern data' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
