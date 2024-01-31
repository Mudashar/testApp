const Dboard = require('./models/dboard');
const Mlog = require('./models/mlog');
const Tlog = require('./models/tlog');
const Income = require('./models/income');

const getDboard = async(res,alert) => {
    const logs = await Mlog.aggregate([
        { $unionWith: { coll: "incomes"} },
        { $unionWith: { coll: "tlogs"} },
        { $sort: { updatedAt: -1}},
        { $limit: 10 }
     ]);
     //res.status(200).send({data: logs});
     //console.log(logs);
    var queryId = {_id: '64f4ec4a3581c26a9032a37b'};
    Dboard.findOne(queryId)
    .then(r => {
        var x = (+r.mutual);
        var rem = 0;
        if(x > 1000){
            rem = x % 1000;
            if(rem > 0){
                x = x - rem + 1000;
                rem = 1000 - rem;
            }
        } 
        
        res.render('index',{alert: alert, mutual: x, neg: rem ,actual: r.mutual, travel: r.travel, logs: logs});       
        
    })
    .catch(e => console.log(e)); 
}
module.exports = getDboard;
