const express = require("express");
const app = express();
const cors=require("cors")

require('dotenv').config();
const PORT = process.env.PORT || 4000;

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());
var corsOptions = { origin: 'http://localhost:3000', optionsSuccessStatus: 200 } 
app.use(cors(corsOptions));
//connecting to database
require("./config/database").connect();

//route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

app.get('/',(req,res)=>{

    res.send("hello from server")
})

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})