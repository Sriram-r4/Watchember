require('dotenv').config()


const express = require('express');
const bodyParser = require("body-parser");
const { mongoose } = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/user-routes');
const animeRoutes=require('./routes/anime-routes');


//express app
const app = express()


//middleware
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', (req, res, next) => {
    console.log(req.path, req.method)
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your client's origin
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.header('Access-Control-Allow-Headers', '*');
    next();
})

app.get("/", (req, res) => {
    res.json("Working...")
})
//routes
app.use("/api", userRoutes)
app.use("/api",animeRoutes)

//listen
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Database Connected Succesfully...")
            console.log("App is listening on port", process.env.PORT)
        })
    }).catch((error) => {
        console.log(error)
    })

