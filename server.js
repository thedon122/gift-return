const express = require('express')
const hbs = require('hbs')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.set('view engine', 'hbs')
app.listen(3000, ()=>{
    console.log("listening on port 3000")
})
// Connect to database
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
  }
  else {
    mongoose.connect('mongodb://localhost/express-movies');
  }
  mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
    }
  );
  mongoose.connection.once('open', function() {
    console.log("Mongoose has connected to MongoDB!");
  });

app.get("/", (req, res)=> {
    res.redirect("/users")
})

const User = require("./models/User")
app.get("/users", (req, res) =>{
    User.find({})
    .then((users) =>{
    console.log("USERS", users)
    res.render("Users/index", {
        users
    })
})
})