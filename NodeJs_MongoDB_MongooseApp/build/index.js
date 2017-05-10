'use strict';

import express from 'express';
import handlebars from 'express-handlebars';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
process.env.PORT ? null : process.env.PORT = 3000;

//Connect to MongoDB
mongoose.connect('mongodb://localhost:3000/tttodoApp');

const app = express();
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.use(express.static('public'));
app.set('views', './build/views/');
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.render('index', {list: ['a','b'], title: 'Hello from engine'});
});

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});