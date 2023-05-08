const express = require('express');
const router = express.Router();
const {Expense} = require('../models/expenseSchema');

router.post('/', (req, res) => {
    const expense = new Expense({       //cerating new document in the collection expense
        name: req.body.name,
        description: req.body.description,
        dateTime: req.body.dateTime,
        amount: req.body.amount
    });

    expense.save()
        .then(result => {
            res.json({ body: result });
            // console.log(result);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: error });
        });
});

router.get('/', (req, res) => {
    Expense.find()
    .then(expenses => {
        res.json(expenses);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
});

module.exports = router;