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
// connect to database
mongoose.connect("mongodb://localhost/regifter")

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!!! 
    ${error}
  `)
    process.exit(-1)
})

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