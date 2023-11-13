const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt'); // Import the bcrypt library
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
app.use(cookieParser())
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
const { Schema } = mongoose; // Import the Schema object
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
  role: String,
}, {
  collection: 'account'
});
const Users = mongoose.model('Users', userSchema);
var checkUser = async (req, res, next) => {
  try {
    const role = req.data.role;
    if (role === 'user' || role === 'admin') {
      next();
    } else {
      return res.json("NOT PERMISSION");
    }
  } catch (err) {
    return res.status(500).json("Loi user");
  }
};
var checkAdmin = async (req, res, next) => {
  try {
    const role = req.data.role;
    if (role == 'admin') {
      next();
    } else {
      return res.json("NOT PERMISSION");
    }
  } catch (err) {
    return res.status(500).json("Loi user");
  }
};
app.post('/login', (req,res,next)=>{
  Users.find({
    email: req.body.email,
    password1: req.body.password,
  })
    .then(data => {
      if (data.length > 0) {
        console.log('User data:', data[0].role)
        var token = jwt.sign({ _id: data[0]._id, role: data[0].role }, 'mk');
        console.log('hello')
        res.json({ "message": 'Dang nhap success', "token": token });
        next()
      } else {
        return res.status(401).json({ message: 'Dang nhap that bai' });
      }
    })
    .catch(err => {
      console.log('Thất bại', err);
      return res.status(500).json({ message: 'Internal server error' });
    });
})
// var checkLogin = async (req,res,next) =>{
//   try{
//     var token = req.cookies.token;
//     console.log("da o login")
//     if (!token) {
//       return res.status(401).json("Token is missing");
//     }
//     var idUser = jwt.verify(token,'mk');
//     Users.findOne({
//       _id : idUser
//     }).then(data=>{
//       if(data)
//       { 
//         req.data = data;
//         next()
//       }
//       else{
//         res.json("Khong tim thay user")
//       }
//     }).catch(err=>{
//       console.log(err);
//     })
//   }catch(err)
//   {
//     return res.status(500).json("Loi user");
//   }
// }
// app.get('/dashboardUser', checkLogin, checkUser, (req, res,next) => {
//   console.log("Thanh Cong User");
// });
// app.get('/dashboardAdmin', checkLogin, checkAdmin, (req, res,next) => {
//   console.log("Thanh Cong Admin");
// });
//register
app.post('/register', async (req, res) => {
  Users.create({
    username: req.body.username,
    email: req.body.email,
    password1: req.body.password,
    role: 'user'
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
  Users.deleteOne({ _id: userId })
    .then(() => {
      res.json({ message: 'User deleted successfully' });
    })
    .catch((err) => {
      console.error('Failed to delete user', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});
app.put('/userEdit/:id', async (req, res) => {
  const userId = req.params.id;
  const newPassword = req.body.password;
  try {
    const updatedUser = await Users.findOneAndUpdate(
      { _id: userId },
      { password1: newPassword }, // Use the new password directly
      { new: true }
    );

    if (updatedUser) {
      res.json({ message: 'Update successful', user: updatedUser });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});