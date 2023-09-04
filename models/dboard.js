const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DboardSchema = new Schema({
    mutual: {
        type: String
    },
    travel: {
        type: String,
    }
},{timestamps: true});

const Dboard = mongoose.model('Dboard',DboardSchema);
module.exports = Dboard;