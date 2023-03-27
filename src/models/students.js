const mongoose=require("mongoose")
const validator=require("validator")

const StudentsSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    cureentClass:{
        type:Number,
        required:true,
        min:1,
        max:12
    },
    division:{
        type:String,
        maxlength:1
    }
})

const Student=new mongoose.model("Student",StudentsSchema)

module.exports=Student