'use strict'

import Task from '../models/Task';

export let createTask = (task, next) => {
    Task.create(task, next);
};

//? export let findTask = (err, task) => {
//     Task.find(err, task);
// };

Task.find({}, (err, task) => {
  if (err) throw err;
  console.log(task);
});

// Find and Update 
// find the description Learn, update it to Teach
Task.findOneAndUpdate({ description: 'Learn' }, { description: 'Teach' }, (err, task) => {
  if (err) throw err;
  // the updated description is returned
  console.log(task);
});

// Find and Remove
// find the task with Learn delete it
Task.findOneAndRemove({ taskId: '5913aed5afeecd260dbf3876' }, (err) => {
  if (err) throw err;
  console.log('User deleted!');
});