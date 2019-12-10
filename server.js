const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const Pokedex = require("pokedex-promise-v2");
const P = new Pokedex();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));

});

app.get('/pokemon', function (req, res) {
  console.log('Hello World')
  P.getPokemonByName("eevee") // with Promise
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log("There was an ERROR: ", error);
    });
})


app.listen(8080, () => {
  console.log('app is running on port 8080');
});