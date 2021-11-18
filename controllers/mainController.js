require('dotenv').config();
const axios = require('axios');

exports.getHomePage = (req, res) => {
    let url = `https://api.spoonacular.com/recipes/random/?apiKey=${process.env.APIKEY}`;
    axios.get(url)
    .then((response) => {
        let recipe = {
            title: response.data.recipes[0].title,
            ingredients: response.data.recipes[0].extendedIngredients,
            image: response.data.recipes[0].image,
            summary: response.data.recipes[0].summary,
            instructions: response.data.recipes[0].instructions
        }
        res.render('index.ejs', {dataFromSpoonacular: recipe});
    })
    .catch((error) => {
        console.log(error);
    });
}

/*
app.get('/', (req, res) => {
    let url = `https://api.spoonacular.com/recipes/random/?apiKey=${process.env.APIKEY}`;
    axios.get(url)
    .then((response) => {
        let recipe = {
            title: response.data.recipes[0].title,
            ingredients: response.data.recipes[0].extendedIngredients,
            image: response.data.recipes[0].image,
            summary: response.data.recipes[0].summary,
            instructions: response.data.recipes[0].instructions
        }
        res.render('index.ejs', {dataFromSpoonacular: recipe});
    })
    .catch((error) => {
        console.log(error);
    });
});
*/