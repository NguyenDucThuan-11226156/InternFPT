const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt'); // Import the bcrypt library
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { Schema } = mongoose; // Import the Schema object
app.use(cors());
// Set up CORS middleware
const corsOptions = {
  origin: 'http://localhost:4200', // Replace with the actual origin of your frontend application
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
// Middleware to parse JSON request bodies
app.use(bodyParser.json());
// Define the route
mongoose.connect('mongodb://127.0.0.1:27017/Test1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Successfully connected to the database");
})
.catch(err => {
  console.error("Failed to connect to the database:", err);
});

const userSchema = new Schema({
  username: String,
  email: String,
  password1: String,
  password2: String,
}, {
  collection: 'account'
});
const Users = mongoose.model('Users', userSchema);

//register
app.post('/register', async (req, res) => {
  // const { username, password } = req.body;
  // console.log(req.body);
  // Process the username and password data as needed
  // console.log(`Received username: ${username}, password: ${password}`);
  // You can add authentication logic here and send appropriate responses
  Users.create({
    username: req.body.username,
    email: req.body.email,
    password1: req.body.password,
  })
    .then(data => {
      console.log("Thành công");
      console.log(data);
    })
    .catch(err => {
      console.log('Thất bại', err);
    });
  res.json({ message: 'Received data on the server' });
});

//login
//login
app.post('/success', async (req, res) => {
  Users.find({
    email: req.body.email,
    password1: req.body.password,
  })
    .then(data => {
      if (data.length > 0) {
        res.json({ message: 'Dang nhap thanh cong' });
      } else {
        res.status(401).json({ message: 'Dang nhap that bai' });
      }
    })
    .catch(err => {
      console.log('Thất bại', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});
app.get('/getApi', async (req, res) => {
  Users.find({})
    .then(data => {
      res.json(data); // Send the data to the frontend as a JSON response
    })
    .catch(err => {
      console.log('Error:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});
app.delete('/deleteUser/:id', async (req, res) => {
  const userId = req.params.id;
  console.log(user)
  Users.deleteOne({ _id: userId })
    .then(() => {
      res.json({ message: 'User deleted successfully' });
    })
    .catch((err) => {
      console.error('Failed to delete user', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});
app.put('/user/:id',async(req,res)=>{
  
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});