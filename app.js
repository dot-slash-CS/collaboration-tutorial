const express = require('express'); //Import Express
const app = express(); //Create an App

app.use(express.static('public')); //If the user requests '/' route, serve files from the public folder
app.use(express.json()); //If the user sends a JSON object to the server, parse it

app.post('/add-class', (req, res) => { //POST route on '/add-class', req = request, res = response
    //...
    // These lines would add the class and do server stuff
    //...
    res.send({
        body: req.body.class,
        MONEY: req.body.MONEY,
        message: "Your class was added to the database."
    });
});

app.listen(6969, () => console.log("Listening")); //Listen on port 1515