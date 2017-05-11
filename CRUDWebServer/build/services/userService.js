'use strict'

import User from '../models/User';

export let createUser = (user, next) => {
    User.create(user, next);
};