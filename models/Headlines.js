const mongoose = require("mongoose");

let schema = mongoose.schema;

let headlineSchema = new Schema({
  headline:{
    type: String,
    required: true,
    unique: true
  },
  summary:{
    type: String,
    required: true
  },
  date:{
    type: String,
    default: false
  }
})

let Headline = mongoose.model("Headline", headlineSchema)
module.exports=Headline;