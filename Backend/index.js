const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
//connecting to database
require("./config/database").connect();

//route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

app.get('/',(req,res)=>{

    res.send("hello from server")
})
//actuivate
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})