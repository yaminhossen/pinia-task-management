const express = require('express');
const app = express();
const port = 5005
const cors = require('cors');
// const bodyParser = require('body-parser')


app.use(cors());

// parse application/json
// app.use(bodyParser.json())
app.use(require('express-form-data').parse());

// app.use(bodyParser.urlencoded({
//     limit: '100mb',
//     extended: false
// }))

app.use(express.urlencoded());


app.get('/', (req, res)=>{
    res.send(`
        <form  action="/users" method="POST">
            <input type="text" name="name">
            
            <button>submit</button> 
        </form>
    `)
})

app.post('/users', (req, res)=>{
    console.log(req.body);
    res.json(req.body)
})

// 404 routes
app.use((req, res, next) =>{
    res.status(404).send("error ! 404 page not found")
})

// app routes
app.listen(port, ()=>{
    console.log(`This app listening on this port http://localhost:${port}`)
})