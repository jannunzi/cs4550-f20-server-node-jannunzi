const express = require("express")
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/whiteboard', {useNewUrlParser: true});

const quizSchema = mongoose.Schema({
  name: String,
  avg: Number
}, {collection: "quizzes"})

const quizModel = mongoose.model("QuizModel", quizSchema)

quizModel.find()
  .then(quizzes => console.log(quizzes))


require("./controllers/quizzes-controller")(app)
require("./controllers/questions-controller")(app)

app.listen(3000)
