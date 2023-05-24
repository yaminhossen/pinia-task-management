const express = require('express');
const {all, show, store, update, destroy } = require('../controllers/userController');
const router = express.Router();


module.exports = router
        .get('/', all)
        .get('/:id', show)
        .post("/", store)
        .put("/:id", update)
       .delete("/:id", destroy) 