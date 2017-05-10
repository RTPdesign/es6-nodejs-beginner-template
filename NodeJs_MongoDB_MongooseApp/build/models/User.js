'use strict';

import mongoose from 'mongoose'; // var mongoose = require('mongoose');

// Create a Schema, Schema is what is used to define attributes for our documents
let userSchema = mongoose.Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// custom method to add string to end of name
// you can create more important methods like name validations or formatting
// you can also do queries and find similar users 
userSchema.methods.dudify() => {
  // add some stuff to the users name
  this.name = this.name + '-dude'; 
  return this.name;
};

// on every save, add the date
userSchema.pre('save', (next) => {
  // get the current date
  let currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;
  next();
});


export default mongoose.model('User', userSchema);
// the schema is useless so far
// we need to create a model using it
let User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;