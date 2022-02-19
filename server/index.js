const express= require('express')
const app = express();
const cors = require('cors');

const port = process.env.PORT || 1337;


app.use(cors())
app.use(express.json())

app.post('/api/register',(req,res)=>{
    console.log(req.body)
    res.json({status:'ok'})
})



app.listen(port,()=>console.log(`The app is running on Port: ${port}`));