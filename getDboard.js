const Dboard = require('./models/dboard');

const getDboard = (res,alert) => {
    var queryId = {_id: '64f4ec4a3581c26a9032a37b'};
    Dboard.findOne(queryId)
    .then(r => {
        var x = (+r.mutual);
        var rem = 0;
        if(x > 1000){
            rem = x % 1000;
            x = x - rem;
        }
        
        res.render('index',{alert: alert, mutual: x, neg: rem ,actual: r.mutual, travel: r.travel});
    })
    .catch(e => console.log(e)); 
}
module.exports = getDboard;
