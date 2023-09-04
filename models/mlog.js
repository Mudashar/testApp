const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MlogSchema = new Schema({
    amount: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    mutual: {
        type: String,
        required: true
    }
},{timestamps: true});

const Mlog = mongoose.model('Mlog',MlogSchema);
module.exports = Mlog;