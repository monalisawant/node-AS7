const express=require("express")
const app=express()
require("./db1/conn");
const Student=require("./models/students")
const port=process.env.port || 8000;
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hi home page")
})


app.post("/students",(req,res)=>{
    const users=new Student(req.body)
    users.save().then(()=>{
        res.status(201).send(users)
    }).catch((e)=>{
        res.status(400).send(e)
    })

})
app.get("/students",async(req,res)=>{
    try{const result=await Student.find()
    res.send(result)}
    catch(e){
        res.send(e)
    }
})

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})