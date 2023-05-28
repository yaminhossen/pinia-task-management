const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000
const cors = require('cors');
const bodyParser = require('body-parser');
const user_routes = require('./server/routes/user_routes');
const routes = require('./server/routes/routes');
const userSchema = require('./server/schemas/userSchema');
const userModel = require('./server/models/userModel');


// middleware setup
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
app.use(require('express-form-data').parse());
// parse application/json
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    limit: '100mb',
    extended: false
}))


app.use(express.static('public'))
app.set('json spaces', 4)


// home page 
app.get('/', (req, res)=>{
    res.send(`
        <form onsubmit="save()" 
            action="">
            <input type="text" name="name">
            <input type="text" name="email">
            <button>submit</button> 
        </form>
        <script>
            function save(){
                event.preventDefault();
                fetch("/save",{
                    method: "POST",
                    body: new FormData(event.target),
                })
            }
        </script>
    `)
})

app.get('/users', async (req, res)=>{
    let users = await userModel.find().exec();
    res.json(users);
})
app.delete('/users/:id', async (req, res)=>{
    let user = await userModel.deleteOne({_id:req.params.id}).exec();
    res.json(user);
})
app.delete('/users', async (req, res)=>{
    let users = await userModel.deleteMany().exec();
    res.json(users);
})
app.get('/user/:id', async (req, res)=>{
    let user = await userModel.findOne({_id:req.params.id}).exec();
    res.json(user);
})
app.put('/user/:id', async (req, res)=>{
    let user = await userModel.findOne({_id:req.params.id}).exec();
    user.name = req.body.name;
    user.email = req.body.email;
    user.save();
    res.json(user);
})
app.post('/save', async (req, res)=>{
    const user = req.body;
    let data = await userModel.create(user);
    console.log(user);
    res.json(user);
})

// database connection with mongoose



// management routes
app.use(routes)

// 404 routes
app.use((req, res, next) =>{
    res.status(404).send("error ! 404 page not found")
})

// app routes

mongoose
    .connect('mongodb://127.0.0.1:27017/user_management',)
    .then(()=> {
        console.log("connection successful")
        app.listen(port, ()=>{
            console.log(`This app listening on this port http://localhost:${port}`)
        })
    })
    .catch((err)=> console.log(err));
