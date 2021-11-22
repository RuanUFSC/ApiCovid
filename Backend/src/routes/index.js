const { Router } = require('express');

const dataRouter = require('./datas.js')

const router = Router();

router
    .use('/data', dataRouter)

module.exports = router;
