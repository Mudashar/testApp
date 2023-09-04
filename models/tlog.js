const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TlogSchema = new Schema({
    amount: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    travel: {
        type: String,
        required: true
    }
},{timestamps: true});

const Tlog = mongoose.model('Tlog',TlogSchema);
module.exports = Tlog;