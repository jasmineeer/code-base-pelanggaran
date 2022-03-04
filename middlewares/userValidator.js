const {body} = require(`express-validator`)

exports.validate = [
    // validasi password
    body(`password`).isLength({min: 8})
    .withMessage(`Password need to be at least 8 characters`),
    
    // validasi username
    body(`username`).notEmpty()
    .withMessage(`Username must be filled`),

    // validasi nama user
    body(`nama_user`).notEmpty()
    .withMessage(`Nama User must be filled`)
]