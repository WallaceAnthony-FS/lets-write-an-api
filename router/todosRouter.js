const express = require("express")
const { todoService, todoServiceById } = require("../services/todoService")

const todosRouter = express.Router()

todosRouter.get("/", (req, res, next) => {
    todoService().then(result => {
        res.status(200).json(result.data)
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        })
    })
})

todosRouter.get("/:id", (req, res, next) => {
    todoServiceById(req.params.id).then(result => {
        res.status(200).json(result.data)
    }).catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
})


module.exports = todosRouter