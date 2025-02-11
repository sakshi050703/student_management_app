const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
//cors - cross origin resource sharing
app.use(express.json())

//MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/b0506')
.then(()=>console.log('mongoDB connected'))
.catch((error)=> console.log(error))

//Define Schema and model for students
const studentSchema = new mongoose.Schema({
    fname : String,
    lname : String,
    mother_name : String,
    father_name: String,
    address: String,
    gender: String,
    course: String,
    fees: String,
    dob: String,
    pincode: String,
    password: String,
    email: String
})

const Students = mongoose.model('Students',studentSchema)

//To POST Data
app.post('/students' , async (req,res)=>{
    try{
        const student = new Students(req.body)
        await student.save()
        res.status(201).send(student)
    }catch(error){
        res.status(400).send(error)
    }
})

//To GET Data

app.get('/students', async (req,res)=>{
    try{
        const student = await Students.find()
        res.status(200).send(student)
    }catch(error){
        res.status(500).send(error)
    }
})

//TO GET Specific Student Data

app.get('/students/:id', async (req,res)=>{
    try{
        const student = await Students.findById(req.params.id)
        res.status(200).json(student)

    }catch(error){
        res.status(500).send(error)
    }
})

//To UPDATE Data - PUT

app.put('/update/students/:id', async (req,res)=>{
    try{
        const updateStudent = await Students.findByIdAndUpdate(req.params.id, req.body, {new : true})
        res.status(200).json(updateStudent)
    }catch(error){
        res.status(500).send(error)
    }
})

//To Delete Data 
app.delete('/delete/students/:id', async(req,res)=>{
    try{
        await Students.findByIdAndDelete(req.params.id)
        res.status(200).json({message : "Data Deleted"})
    }catch(error){
        res.status(500).send(error)
    }
})


app.listen(8000,()=>{
    console.log('8000 is running')
})