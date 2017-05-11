'use strict';

import {createTask} from '../services/taskService';
import {createUser} from '../services/userService';

export default (app) => {

    // Creates an API
    app.get('/', (req, res) => {
        res.render('index', {todoList: [{task: 'Win', userId: 'Todd'}]});
    });

    app.get('/todo', (req, res) => {
        let myTodo = [todoZero, todoOne];
        res.json(myTodo);
    });

    app.get('/todo/:id', (req, res) => {
        console.log(`Request Todo list by id of: ${req.params.id}`);
        res.json(todoDatabaseCollecion[req.params.id]);
    });

    app.post('/task', (req, res) => {
        console.log(req.body);

        createTask(req.body, (err, data) => {
            if(!err){
                console.log(data);
            }
            res.json(data);
        });
    });

    app.post('/user', (req, res) => { 
        createUser(req.body, (err, data) => {
            if(!err){
                console.log(data);
            }
            res.json(data);
        });
    });
}