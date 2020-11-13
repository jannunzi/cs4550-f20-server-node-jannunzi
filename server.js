const express = require("express")
const app = express()

require("./controllers/quizzes-controller")(app)
require("./controllers/questions-controller")(app)

app.listen(3000)
