let quizzes = require("./quizzes.json")

const findAllQuizzes = () =>
  quizzes

const findQuizById   = (qid) =>
  quizzes.find(q => q._id === qid)

const deleteQuiz = (qid) =>
  quizzes = quizzes.filter(quiz => quiz._id !== qid)

const createQuiz = () => {
  const newQuiz = {_id: (new Date()).getTime() + "", titel: "New Quiz"}
  quizzes.push(newQuiz)
  return newQuiz
}

const updateQuiz = (qid, newQuiz) => {
  quizzes
}

module.exports = {
  findAllQuizzes: findAllQuizzes,
  findQuizById: findQuizById,
  deleteQuiz, createQuiz
}
