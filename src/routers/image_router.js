const router = require('express').Router()
const multerConfig = require('../config/multer_config')
const imageController = require('../controller/imageController')

router.post('/uploadImage', multerConfig.single('avatar'),imageController.uploadImage)

module.exports= router