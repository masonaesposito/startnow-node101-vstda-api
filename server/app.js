const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
// add your code here
var arrayList = [
    {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
    },
    {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
    },
    {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
    }
];

app.get('/', function (req, res) {

    res.json({
        status: 'ok'
    })

})

app.get('/api/ToDoItems', function (req, res) {

    res.json(arrayList)

})

app.get('/api/ToDoItems/:todoItemId', function (req, res) {
    for (var i = 0; i < arrayList.length; i++) {


        if (arrayList[i].todoItemId == req.params.todoItemId) {
            res.json(arrayList[i]);
        }

    }


})

app.post('/api/ToDoItems/', function (req, res) {
    var newBody = req.body
    for (var i = 0; i < arrayList.length; i++) {
        if (arrayList[i].todoItemId == newBody.todoItemId) {
            arrayList[i] = newBody
            res.status(201).send(newBody);
            
            
        }

    }
    arrayList.push(newBody)

})

app.delete('/api/ToDoItems/:todoItemId', function (req, res) {
    for (var i = 0; i < arrayList.length; i++) {


        if (arrayList[i].todoItemId == req.params.todoItemId) {

            var deleted = arrayList.splice(i, 1)
            res.json(deleted[0]);
        }
    }
    res.send('');
})
module.exports = app;
