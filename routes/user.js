const express = require(`express`)
const app = express()
const { body } = require(`express-validator`)

app.use(express.json())

// call user controller
let userController = require("../controllers/userController")
let userValidator = require("../middlewares/userValidator")

// end-point get data user
app.get("/", userController.getDataUser)

// end-point add data user
app.post("/",[userValidator.validate], userController.addDataUser)

// end-point edit user
app.put("/:id_user", userController.editDataUser)

// end-point delete user
app.delete("/:id_user", userController.deleteDataUser)

app.post("/auth", userController.authentication)

module.exports = app 