const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
    amount: {
        type: String,
        required: true
    },
    addin: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    mutual: {
        type: String,
        required: true
    },
    travel: {
        type: String,
        required: true
    }
},{timestamps: true});

const Income = mongoose.model('Income',IncomeSchema);
module.exports = Income;