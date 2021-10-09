const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.post('/add-class', (req, res) => {
    //...
    // These lines would add the class and do server stuff
    //...
    res.send({
        body: req.body.class,
        message: "Your class was added to the database."
    });
});

app.listen(1515, () => console.log("Listening"));