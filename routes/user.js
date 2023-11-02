const express = require('express');
const { create, getAll, getOne, replaceOne, updateAll, updateOne, deleteAll, deleteOne } = require('../controller/user');
const router = express.Router();

router
.post("/", create)
.get("/", getAll)
.get("/:id", getOne)
.put("/:id", replaceOne)
.patch("/", updateAll)
.patch("/:id", updateOne)
.delete("/", deleteAll)
.delete("/:id", deleteOne)

exports.routes = router;