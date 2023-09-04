const Income = require('./models/income');
const getDboard = require('./getDboard');

const addIncome = (dashboard,data,res) => {

    var newblog = {
        amount: data.amount,
        desc: data.desc,
        addin: data.addin,
        mutual: dashboard.mutual,
        travel: dashboard.travel
    }
    const income = new Income(newblog);
    income.save()
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
module.exports = addIncome;