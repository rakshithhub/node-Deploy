const express = require('express');
const { create, getAll, getOne, deleteOne, replaceOne, updateOne } = require('../controller/product');
const router = express.Router();

router
.post('/',create)
.get('/',getAll)
.get('/:id',getOne)
.put('/:id',replaceOne)
.patch('/:id',updateOne)
.delete('/:id',deleteOne)

exports.routes = router;