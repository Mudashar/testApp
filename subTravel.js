const Tlog = require('./models/tlog');
const getDboard = require('./getDboard');

const subTravel = (data,dashboard,res) => {
    var newtlog = {
        amount: data.amount,
        desc: data.desc,
        travel: dashboard.travel
    }
    const tlog = new Tlog(newtlog);
    tlog.save()
        .then( result => {
            console.log('Travel amount added');
            getDboard(res,'success');
        })
        .catch( e => {
            console.log('Failed to add.');
            getDboard(res,'failed');
            console.log(e);
        })
}
module.exports = subTravel;