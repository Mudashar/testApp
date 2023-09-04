const Mlog = require('./models/mlog');
const getDboard = require('./getDboard');

const subMutual = (data,dashboard,res) => {

    var newmlog = {
        amount: data.amount,
        desc: data.desc,
        mutual: dashboard.mutual
    }
    const mlog = new Mlog(newmlog);
    mlog.save()
        .then( result => {
            console.log('Mutual amount added');
            getDboard(res,'success');
        })
        .catch( e => {
            console.log('Failed to add.');
            getDboard(res,'failed');
            console.log(e);
        })
}
module.exports = subMutual;