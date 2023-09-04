const express = require('express');
const mongoose = require('mongoose');
const Mlog = require('./models/mlog');
const Tlog = require('./models/tlog');
const Income = require('./models/income');
const addDboard = require('./addDboard');
const subDboard = require('./subDboard');
const getDboard = require('./getDboard');
const app = express();
const port = 3000;

app.listen(process.env.port || port);
app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true}))

const dbURI = 'mongodb+srv://mudashar:YczGKbzDoGBhw258@cluster0.gpnso6e.mongodb.net/';
mongoose.connect(dbURI)
    .then((result)=> console.log('Connected to db'))
    .catch((err) => console.log(err));

app.get('/',(req,res)=>{
    //pass alert as arg
    getDboard(res,'no');
});

//mutual log
app.get('/MutualLogs',(req,res)=>{
    Mlog.find().sort({ _id: -1 })
    .then(logs => {
        res.render('log',{type: req.url ,logs});
    })
    .catch(e => console.log(e));    
});
app.get('/MutualLogs/:id',(req,res) => {
    const id = req.params.id;
    Mlog.findById(id)
        .then(r => {
            res.render('oneLog',{alert: 'no', type: '/MutualLogs', r});
        })
        .catch(e => console.log(e)); 
});

//travel log
app.get('/TravelLogs',(req,res)=>{
    Tlog.find().sort({ _id: -1 })
        .then(logs => {
            res.render('log',{type: req.url ,logs});
        })
        .catch(e => console.log(e)); 
});
app.get('/TravelLogs/:id',(req,res) => {
    const id = req.params.id;
    Tlog.findById(id)
        .then(r => {
            res.render('oneLog',{alert: 'no', type: '/TravelLogs', r});
        })
        .catch(e => console.log(e)); 
});

//income log
app.get('/IncomeLogs',(req,res) => {
    Income.find().sort({ _id: -1})
        .then(logs => {
            res.render('log',{type: req.url ,logs});
        })
        .catch(e => console.log(e)); 
})
app.get('/IncomeLogs/:id',(req,res) => {
    const id = req.params.id;
    Income.findById(id)
        .then(r => {
            res.render('oneLog',{alert: 'no', type: '/IncomeLogs', r});
        })
        .catch(e => console.log(e)); 
});

//add expd in mutual
app.post('/add-mutual',(req,res)=>{
    subDboard(req.body,'mutual',res,'N');
})

//add expd in travel
app.post('/add-travel',(req,res)=>{
    subDboard(req.body,'travel',res,'N');
})

//add income
app.post('/add-income',(req,res)=>{
    addDboard(req.body,res,'N');
})

//delete
app.post('/delete',(req,res) => {
    //console.log(req.body);
    if(req.body.type === '/MutualLogs'){
        Mlog.deleteOne({_id: req.body.id})
            .then( r => {
                console.log(r);
                //res.render('oneLog',{alert: 'success',type: req.body.type, r});
                res.redirect(req.body.type);
            })
            .catch(e => console.log(e)); 
        addDboard(req.body,res,'mutual');

    }else if(req.body.type === '/TravelLogs'){
        Tlog.deleteOne({_id: req.body.id})
            .then( r => {
                console.log(r);
               // res.render('oneLog',{alert: 'success',type: req.body.type, r});
                res.redirect(req.body.type);
            })
            .catch(e => console.log(e)); 
        addDboard(req.body,res,'travel');

    }else if(req.body.type === '/IncomeLogs'){
        Income.deleteOne({_id: req.body.id})
            .then( r => {
                console.log(r);
                //res.render('oneLog',{alert: 'success',type: req.body.type, r});
                res.redirect(req.body.type);
            })
            .catch(e => console.log(e));
            switch(req.body.addin){
                case 'both':
                    subDboard(req.body,'both',res,'Y');
                break;
                case 'mutual':
                    subDboard(req.body,'mutual',res,'Y');
                break;
                case 'travel':
                    subDboard(req.body,'travel',res,'Y');
                break;
            }
    }

})

app.use(express.static('assets'))