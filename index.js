const pets = require('./data');


const express = require('express');
const app = express();

const PORT = 8080;


app.get('/', (req, res) => {
   

});

app.use(express.static("public"))

app.get('/api', (req, res) => {
    res.send('Hello World!');
});
app.get('/api/v1/pets', (req, res) => {
    res.send (pets);
});


app.get('/api/v1/pets/owner', (req, res) => {
    const owner = req.query.owner;
    const pet = pets.find(pet => pet.owner === owner);
    if(pet) res.send(pet);
    res.send("No pet with that owner found");
});

/
app.get('/api/v1/pets/:name', (req, res) => {

    const name = req.params.name
    console.log(pet);
    if(pet) res.send(pet);
    res.send("no pet found with that name");

    const pet = pets.find(pet => pet.name === name);


});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;