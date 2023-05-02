const express = require('express')
const app = express();
const cors = require('cors');

const port = 5000;
const chefs = require('./data/chefs.json')

app.use(cors());

app.get('/',(req,res)=>{
    res.send('foodie franzy server');
});

app.get('/chefs',(req,res)=>{
    res.send(chefs)
})

app.listen(port , ()=>{
    console.log(`foodie franzy api on port : ${port}`);

})