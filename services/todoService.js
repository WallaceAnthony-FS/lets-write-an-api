const axios = require("axios")
require("dotenv").config()

const todoService = async () => {
    console.log("Real todos")
    return await axios.get(process.env.todosUrl)
}

const todoServiceById = async (id) => {
    console.log("Real todos by id")
    return await axios.get(process.env.todosUrl + id)
}

module.exports = {
    todoService,
    todoServiceById
}