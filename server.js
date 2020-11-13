const express = require("express")
const app = express()

// @GetMapping("/hello")
// public String function() {
//    return "Hello World";
// }
app.get('/hello', (req, res) =>
  res.send('Hello World!!'))

app.get('/add/:a/:b', (req, res) =>
{
  const a = parseInt(req.params['a'])
  const b = parseInt(req.params['b'])
  const c = a + b
  res.send({c: c})
})

let quizzes = [
  {
    _id: "123",
    title: "Q1"
  },
  {
    _id: "234",
    title: "Q2"
  },
  {
    _id: "345",
    title: "Q3"
  },
  {
    _id: "456",
    title: "Q4"
  },
  {
    _id: "567",
    title: "Q5"
  },
]

const questions = [
  {"_id": "123", "title": "JPA True False", "quizId": "234", "question":
      "JPA stands for Java Persistence API", "correct": "true", "type": "TRUE_FALSE"},
    {"_id": "234", "title": "JPA Multiple Choice", "quizId": "234", "question":
        "What does JPA stand for?", "correct": "Java Persistence API",
      "type": "MULTIPLE_CHOICE", "choices":
        ["Java Pseudo API", "Java Persistence API", "JSON Persistence API",
          "JavaScript Persistence API"]},
    {"_id": "345", "title": "JSON True False", "quizId": "234", "question":
        "JSON stands for Java Object Notation", "correct": "false","type": "TRUE_FALSE"},
    {"_id": "456", "title": "JSON Multiple Choice", "quizId": "345", "question":
        "What does JSON stand for?", "correct": "JavaScript Object Notation",
      "type": "MULTIPLE_CHOICE", "choices": ["JavaScript Object Notation",
        "JavaScript Object Normalization", "Java Object Normalization", "Java Object Notation"]},
    {"_id": "567", "title": "CSS True False", "quizId": "345", "question":
        "CSS stands for Cascading Style Sheet", "correct": "true", "type": "TRUE_FALSE"},
    {"_id": "678", "title": "CSS Multiple Choice", "quizId": "123", "question":
        "What does CSS stand for?", "correct": "Cascading Style Sheet", "type":
        "MULTIPLE_CHOICE", "choices": ["Class Style Sheet", "Cascading Screen Style",
        "Cascading Style Sheet", "Cascading Style Screen"]}
  ]

app.get("/api/questions", (req, res) =>
  res.send(questions))

app.get("/api/quizzes/:qid/questions", (req, res) =>
  res.send(questions.filter(q => q.quizId === req.params['qid']))
)


app.get("/api/quizzes", (req, res) =>
  res.send(quizzes))

app.get("/api/quizzes/:qid", (req, res) =>
  res.send(quizzes.find(q => q._id === req.params['qid']))
)


app.listen(3000)

console.log("How many a serve you?")
