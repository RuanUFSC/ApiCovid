const { Router } = require('express');
const { createData, getData, createCsvData } = require('../controllers/datas');
const { createDataValidator } = require('../middlewares/dataValidation');
const dataRouter = Router();
const multer = require('multer');
const multerConfig = multer()

dataRouter
    .get('/', getData)
    .post('/', createDataValidator, createData) 
    .post('/file', multer(multerConfig).single('file'), createCsvData);

module.exports = dataRouter;
