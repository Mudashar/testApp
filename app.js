const express = require('express');
const mongoose = require('mongoose');
const Mutual = require('./models/mutual');
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
    res.render('index',{alert: 'no'});
});
app.get('/MutualLogs',(req,res)=>{
    res.render('MutualLogs');
});
app.get('/TravelLogs',(req,res)=>{
    res.render('TravelLogs');
});

//form action mongo
app.post('/test',(req,res)=>{
    //console.log(req.body);
    const mutual = new Mutual(req.body);
    mutual.save()
        .then( r => {
            console.log('Mutual amount added');
            res.render('index',{alert: 'success'});
            //res.redirect('/');
        })
        .catch( e => {
            console.log('Failed to add.');
            res.render('index',{alert: 'failed'});
            console.log(e);
        })
})

app.use(express.static('assets'))