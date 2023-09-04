const Dboard = require('./models/dboard');
const subMutual = require('./subMutual');
const subTravel = require('./subTravel');

const subDboard = (data,type,res,del) => {
    var dashboard = {
        mutual: 0,
        travel: 0
    };
    
    var queryId = {_id: '64f4ec4a3581c26a9032a37b'};
    Dboard.findOne(queryId)
    .then( r =>  {
        if(type === 'both'){
            dashboard.mutual=(+r.mutual) - (+data.amount);
            dashboard.travel = (+r.travel) - (+data.amount);
            
        }else if(type === 'mutual'){
            dashboard.mutual=(+r.mutual) - (+data.amount);
            dashboard.travel =  r.travel;
            if(del === 'N'){
                subMutual(data,dashboard,res);
            }
        }else{
            dashboard.travel = (+r.travel) - (+data.amount);
            dashboard.mutual = r.mutual;
            if(del === 'N'){
                subTravel(data,dashboard,res); 
            }      
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

module.exports = subDboard;