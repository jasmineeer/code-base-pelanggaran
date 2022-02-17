const express = require(`express`)
const app = express()

app.use(express.json())

// call siswa controller
let siswaController = require("../controllers/siswaController")

// end-point get data siswa
app.get("/", siswaController.getDataSiswa)

// end-point add data siswa
app.post("/", siswaController.addDataSiswa)

// end-point edit siswa
app.put("/:id_siswa", siswaController.editDataSiswa)

// end-point delete siswa
app.delete("/:id_siswa", siswaController.deleteDataSiswa)

module.exports = app 