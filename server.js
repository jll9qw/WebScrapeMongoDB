// Dependencies
const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
const app = express();
// First, tell the console what server3.js is doing
console.log("\n******************************************\n" +
            "Look at the image of every award winner in \n" +
            "one of the pages of `awwwards.com`. Then,\n" +
            "grab the image's source URL." +
            "\n******************************************\n");

