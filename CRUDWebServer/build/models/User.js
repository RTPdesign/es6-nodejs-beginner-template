'use strict';

import mongoose from 'mongoose';

let userSchema = mongoose.Schema({
    name: String
});

export default mongoose.model('User', userSchema);