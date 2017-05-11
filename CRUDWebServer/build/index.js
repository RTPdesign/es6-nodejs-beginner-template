'use strict'

import env from './env';
import express from 'express';
import handlebars from 'express-handlebars';
import http from 'http';
import Routes from './routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
process.env.PORT ? null : process.env.PORT = 27017;

mongoose.connect('mongodb://localhost/TodoApp');

const app = express();
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.use(express.static('public'));
app.set('views', './build/views/');
app.set('view engine', '.hbs');
app.use(bodyParser.json());

Routes(app);

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});