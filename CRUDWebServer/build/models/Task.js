'use strict';

import mongoose from 'mongoose';

let taskSchema = mongoose.Schema({
    taskId: String,
    description: String,
    completed: Boolean,
    createDate: Date
});

export default mongoose.model('Task', taskSchema);