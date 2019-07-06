// Dependencies
const express = require("express");
let PORT = process.env.PORT || 3000;
const cheerio = require("cheerio");
const mongoose = require('mongoose');
const axios = require("axios");
const db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
const exphbs = require("express-handlebars");
const app = express();
const router = express.Router();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Connection to Mongoose
mongoose.connect(db, function(err){
    if(err){
        console.log("ERROR")
    }else{
        console.log("Connected with Mongoose")
    }
});

app.listen(PORT, function(){
    console.log("Listening on PORT:  "+ PORT);
})