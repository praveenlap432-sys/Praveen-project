
const express = require('express')
const connectdb = require('./db.config/Db')
const cors=require('cors')
const app = express()
app.use(express.json())
connectdb();
app.use(cors({
      origin: "http://13.63.159.25"}
));


const RegisterRoute=require('./routes/RegisterRoute')


app.use('/register',RegisterRoute)


app.listen(3000,"0.0.0.0",()=>{
    console.log("server is running on http://localhost:3000");
    
})