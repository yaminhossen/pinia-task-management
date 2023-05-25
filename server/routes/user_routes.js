const express = require('express');
const {all, show, store, update, destroy } = require('../controllers/userController');
const router = express.Router();


module.exports = router
        .get('/', all)
        .get('/:id', show)
        .get('/create', (req, res) => {
                res.send(`
                   <form action="/users" method="POST">
                    <input name="title">
                    <button>submit</button>
                   </form>
                `);
              })
        .post("/", store)
        .put("/:id", update)
       .delete("/:id", destroy) 