const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const app = express();

app.engine('hbs', handlebars());

app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

const users = [];

app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/users', (req, res, next) => {
    res.render('users', {
      users,
    });
});
  
app.post('/add-user', (req, res, next) => {
    users.push({ name: req.body.name });
    res.redirect('/users');
});

app.listen(3000);
