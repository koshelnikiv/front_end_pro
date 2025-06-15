require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tasksRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*
app.use((req, res, next) => {
  console.log(`🔥 ${req.method} ${req.url}`);
  next();
});
*/
app.use('/api/tasks', tasksRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.log(err));
