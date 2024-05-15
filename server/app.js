const express = require('express');
const collection = require('./mongo');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', cors(), (req, res) => {});

app.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json('exist');
    } else {
      res.json('notexist');
    }
  } catch (e) {
    res.json('fail');
  }
});

app.post('/getName', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await collection.findOne({ email: email });
    res.json({ name: user.name });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving user data');
  }
});

app.post('/signup', async (req, res) => {
  const { name, number, email, password } = req.body;

  const data = {
    name: name,
    number: number,
    email: email,
    password: password,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json('exist');
    } else {
      await collection.insertMany([data]);
      res.json('notexist');
    }
  } catch (e) {
    res.json('fail');
  }
});

app.listen(8000, () => {
  console.log('port connected');
});