// memanggil file model untuk siswa
let modelSiswa = require("../models/index").siswa 

exports.getDataSiswa = (request, response) => {
    modelSiswa.findAll()
    .then(result => {
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message  
        })
    })
}

exports.addDataSiswa = (request, response) => {
    // tampung data request
    let newSiswa = {
        nama: request.body.nama,
        kelas: request.body.kelas,
        poin: request.body.poin,
        nis: request.body.nis
    }

    modelSiswa.create(newSiswa)
    .then(result => {
        return response.json({
            message: `Data siswa successfully inserted`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.editDataSiswa = (request, response) => {
    let id = request.params.id_siswa
    let dataSiswa = {
        nama: request.body.nama,
        nis: request.body.nis,
        poin: request.body.poin,
        kelas: request.body.kelas
    }

    modelSiswa.update(dataSiswa, { where: { id_siswa: id } })
    .then(result => {
        return response.json({
            message: `Data siswa successfully updated`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.deleteDataSiswa = (request, response) => {
    let id = request.params.id_siswa 
    
    modelSiswa.destroy({ where: { id_siswa: id } })
    .then(result => {
        return response.json({
            message: `Data siswa successfully deleted`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message 
        })
    })
}