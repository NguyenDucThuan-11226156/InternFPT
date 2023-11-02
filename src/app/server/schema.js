// const mongoose = require('mongoose');
// const { Schema } = mongoose; // Import the Schema object


// mongoose.connect('mongodb://localhost:27017/Test1', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log("Successfully connected");
// })
// .catch(err => {
//   console.error(err);
// });


// const userSchema = new Schema({
//   username: String,
//   email: String,
//   password1: String,
//   password2: String,
// }, {
//   collection: 'account'
// });

// const User = mongoose.model('User', userSchema);

// User.create({
//   username: 'thuan',
//   email: 'thuan452004@gmail.com',
//   password1: '123456',
//   password2: '123456',
// })
//   .then(data => {
//     console.log("Thành công");
//   })
//   .catch(err => {
//     console.log('Thất bại', err);
//   });
