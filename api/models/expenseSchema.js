const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    dateTime: {
        type: Date,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    }
});


const Expense = mongoose.model('Expense', expenseSchema);

module.exports = { Expense }
