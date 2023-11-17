const express = require('express');
const router = express.Router();
const { create, getAll, getOne, replaceOne, updateAll, updateOne, deleteAll, deleteOne, login } = require('../controller/user');
const { auth } = require('../controller/userAuth');



router
.post("/signup", create)
.get("/login", login)
.get("/", auth, getAll)
.get("/:id", auth, getOne)
.put("/:id", auth, replaceOne)
.patch("/", auth, updateAll)
.patch("/:id", auth, updateOne)
.delete("/", auth, deleteAll)
.delete("/:id", auth, deleteOne)

exports.routes = router;