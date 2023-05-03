const express = require('express')
const app = express();
const cors = require('cors');

const port = 5000;
const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/',(req,res)=>{
    res.send('foodie franzy server');
});

app.get('/chefs',(req,res)=>{
    res.send(chefs)
})
app.get('/recipes',(req,res)=>{
    res.send(recipes)
})


app.get('/chefs/:id',(req,res)=>{
    const id = parseInt(req.params.id);
   
    const chefRecipe = recipes.filter(recipe =>parseInt(recipe.chef_id) === id);
    res.send(chefRecipe)

})





app.listen(port , ()=>{
    console.log(`foodie franzy api on port : ${port}`);

})