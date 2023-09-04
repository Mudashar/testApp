const addIncome = require('./addIncome');
const Dboard = require('./models/dboard');

const addDboard = (data,res,del) => {
    var dashboard = {
        mutual: 0,
        travel: 0
    };
    var queryId = {_id: '64f4ec4a3581c26a9032a37b'};
    Dboard.findOne(queryId)
    .then( r =>  {

        switch(data.addin || del){
            case 'both':
                dashboard.mutual=(+r.mutual) + (+data.amount);
                dashboard.travel = (+r.travel) + (+data.amount);
                if(del === 'N'){
                addIncome(dashboard,data,res);
                }
                break;
    
            case 'mutual':
                dashboard.mutual=(+r.mutual) + (+data.amount);
                dashboard.travel =  r.travel;
                if(del === 'N'){
                addIncome(dashboard,data,res);
                }
                break;
    
            case 'travel':
                dashboard.mutual = r.mutual;
                dashboard.travel = (+r.travel) + (+data.amount);
                if(del === 'N'){
                addIncome(dashboard,data,res);
                }
                break;
        }
        var newvalues = { $set: { 
            mutual: dashboard.mutual,
            travel: dashboard.travel
        },
        $currentDate: { lastUpdated: true }
        };
    
    
        Dboard.updateOne(queryId,newvalues)
        .then( r=>  console.log(r))
        .catch( e => console.log(e))
    })
    .catch( e => console.log(e));    
}

module.exports = addDboard;