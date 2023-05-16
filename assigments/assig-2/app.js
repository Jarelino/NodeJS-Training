const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    res.send('Users page');
});

app.use('/', (req, res, next) => {
    console.log('1st middleware');
    next();
});

app.use('/', (req, res, next) => {
    console.log('2nd middleware');
    res.send('Home page');
});


app.listen(3000);