const express = require(`express`)
const app = express()

app.use(express.json())

// call pelanggaran controller
let pelanggaranController = require("../controllers/pelanggaranController")

// end-point get data pelanggaran
app.get("/", pelanggaranController.getDataPelanggaran)

// end-point add data pelanggaran
app.post("/", pelanggaranController.addDataPelanggaran)

// end-point edit pelanggaran
app.put("/:id_pelanggaran", pelanggaranController.editDataPelanggaran)

// end-point delete pelanggaran
app.delete("/:id_pelanggaran", pelanggaranController.deleteDataPelanggaran)

module.exports = app 