const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // add this line
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const PORT = 4000;

mongoose.connect('mongodb://127.0.0.1:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

const ExpenseSchema = new mongoose.Schema({
    name: String,
    description: String,
    dateTime: Date,
    amount: Number
});

const Expense = mongoose.model('Expense', ExpenseSchema);

app.post('/expenses', (req, res) => {
    const expense = new Expense({
        name: req.body.name,
        description: req.body.description,
        dateTime: req.body.dateTime,
        amount: req.body.amount
    });
    expense.save()
        .then(result => {
            res.json({ body: result });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: error });
        });
});

app.get('/expenses', (req, res) => {
    Expense.find()
        .then(expenses => {
            res.json(expenses);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});


app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})