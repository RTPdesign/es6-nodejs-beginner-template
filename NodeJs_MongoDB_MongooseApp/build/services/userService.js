import User from '../models/user';

export let createUser = (user, next) => {
    User.create(user, next);
}

// // Create a new user called chris
// let chris = User({
//   name: 'Chris',
//   username: 'chris20',
//   password: 'password' 
// });

// // call the custom method. this will just add -dude to his name
// // user will now be Chris-dude
// chris.dudify((err, name) => {
//   if (err) throw err;
//   console.log('Your new name is ' + name);
// });

// // call the built-in save method to save Chris to the database
// chris.save((err) => {
//   if (err) throw err;
//   console.log('User saved successfully!');
// });

// Create a new user
let newUser = User({
  name: 'Peter Quill',
  username: 'starlord55',
  password: 'password',
  admin: true
});
// save the user
newUser.save((err) => {
  if (err) throw err;
  console.log('User created!');
});


// Read/Find
// Find All
// get all the users
User.find({}, (err, users) => {
  if (err) throw err;
  // object of all the users
  console.log(users);
});

// Find One
// get the user starlord55
User.find({ username: 'starlord55' }, (err, user) => {
  if (err) throw err;
  // object of the user
  console.log(user);
});

// Find By ID
// get a user with ID of 1
User.findById(1, (err, user) => {
  if (err) throw err;
  // show the one user
  console.log(user);
});

// Querying
// get any admin that was created in the past month
// get the date 1 month ago
let monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);

User.find({ admin: true }).where('created_at').gt(monthAgo).exec((err, users) => {
  if (err) throw err;
  // show the admins in the past month
  console.log(users);
});

//Update
// Get a User, Then Update
// get a user with ID of 1
User.findById(1, (err, user) => {
  if (err) throw err;
  // change the users location
  user.location = 'uk';

  // save the user
  user.save((err) => {
    if (err) throw err;
    console.log('User successfully updated!');
  });
});

// Find and Update 
// find the user starlord55
// update him to starlord 88
User.findOneAndUpdate({ username: 'starlord55' }, { username: 'starlord88' }, (err, user) => {
  if (err) throw err;
  // we have the updated user returned to us
  console.log(user);
});

// Find By ID and Update
// find the user with id 4
// update username to starlord 88
User.findByIdAndUpdate(4, { username: 'starlord88' }, (err, user) => {
  if (err) throw err;
  // we have the updated user returned to us
  console.log(user);
});

// Delete
// Get a User, Then Remove
// get the user starlord55
User.find({ username: 'starlord55' }, (err, user) => {
  if (err) throw err;
  // delete him
  user.remove((err) => {
    if (err) throw err;
    console.log('User successfully deleted!');
  });
});

// Find and Remove
// find the user with id 4
User.findOneAndRemove({ username: 'starlord55' }, (err) => {
  if (err) throw err;
  // we have deleted the user
  console.log('User deleted!');
});

// Find By ID and Remove
// find the user with id 4
User.findByIdAndRemove(4, (err) => {
  if (err) throw err;
  // we have deleted the user
  console.log('User deleted!');
});