const express= require('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./models/user.model')

const port = process.env.PORT || 1337;

mongoose.connect('mongodb+srv://FSDB3group7:FSDB3group7@ictakcluster.rpo6w.mongodb.net/JOBPORTAL?retryWrites=true&w=majority')

app.use(cors())
app.use(express.json())


app.post('/api/register', async (req,res)=>{
    console.log(req.body)
    try{
        
        const user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,

        })
        res.json({status:'ok'})
    }catch(err){
        res.json({status:'error', error:'Duplicate email'})
    }
})


app.post('/api/login', async (req,res)=>{
 
   
        
        const user = await User.findOne({
           
            email:req.body.email,
            password:req.body.password,

        })

        if(user){
            return res.json({status:'ok',user:true})
        }else{
            return res.json({status:'error', user:false})
        }
        
  
})



app.listen(port,()=>console.log(`The app is running on Port: ${port}`));