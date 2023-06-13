const express = require('express');
const app = express();


// MONGO MODULES    
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// ROUTERS
const authRouter = require("./routes/auth");

// HELPERS
const passport = require("passport");
require("./passportSettings");

const MONGODB_URI = 'mongodb+srv://romayaruk:sXoSxt6Vu1bHDEVr@cluster0.hu13b6c.mongodb.net/shop';

const MongoStore = new MongoDBStore({
    uri: MONGODB_URI,
    collection: "sessions",
});

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());

app.use(
    session({
      secret: "my secret",
      resave: false,
      saveUninitialized: false,
      MongoStore,
    })
);

app.use(passport.authenticate("session"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(authRouter);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("DB Connected.");
    app.listen(3000, () => {
      console.log('Server started');
    });
  })
  .catch((err) => {
    console.error(err);
  });