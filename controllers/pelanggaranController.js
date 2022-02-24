// memanggil file model untuk pelanggaran
let modelPelanggaran = require("../models/index").pelanggaran 

exports.getDataPelanggaran = (request, response) => {
    modelPelanggaran.findAll()
    .then(result => {
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message  
        })
    })
}

exports.addDataPelanggaran = (request, response) => {
    // tampung data request
    let newPelanggaran = {
        nama_pelanggaran: request.body.nama_pelanggaran,
        poin: request.body.poin
    }

    modelPelanggaran.create(newPelanggaran)
    .then(result => {
        return response.json({
            message: `Data pelanggaran successfully inserted`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.editDataPelanggaran = (request, response) => {
    let id = request.params.id_pelanggaran
    let dataPelanggaran = {
        nama_pelanggaran: request.body.nama_pelanggaran,
        poin: request.body.poin
    }

    modelPelanggaran.update(dataPelanggaran, { where: { id_pelanggaran: id } })
    .then(result => {
        return response.json({
            message: `Data pelanggaran successfully updated`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.deleteDataPelanggaran = (request, response) => {
    let id = request.params.id_pelanggaran
    
    modelPelanggaran.destroy({ where: { id_pelanggaran: id } })
    .then(result => {
        return response.json({
            message: `Data pelanggaran successfully deleted`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message 
        })
    })
}