const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://udaichauhan284:7wiei0fEL5jOdqmg@cluster0.nsbdt1n.mongodb.net/week5-todos");

const todoSchema = mongoose.Schema({
  title: String,
  description : String,
  completed: Boolean
})
const todo = mongoose.model("week5-todos", todoSchema);
module.exports = {
  todo
}