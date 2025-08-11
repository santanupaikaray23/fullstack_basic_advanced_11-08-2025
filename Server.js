const express =  require ("express");

const app = express();

app.get("/",(req,res)=>{
    res.json({message:"Welcome to naresh IT !!!"})
})

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server listening at port ${PORT}`)
})


