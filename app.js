const express = require('express')
const bodyParser = require('body-parser')
const req = require('express/lib/request')
const res = require('express/lib/response')

const app = express()
app.use(bodyParser.json())
/*
app.get('/perro',(req,res,next) => {
  console.log('Soy un perrou!')
  //res.json({message:'soy un perrou!!!'})
  next()
})
app.use((req,res,next)=> {
  res.json({result:'Soy otro middleware'})
})
*/

let todos = []

app.post('/todos',(req,res)=>{
  const{title,date} = req.body
  const newToDo = {
    id:Math.random(),
    title,
    date
  }
  todos.push(newToDo)
  res.json({message: 'To do Created!'})
})

app.get('/todos',(req,res)=>{
  res.json({todos})
})

app.delete('/todos/:id',(req,res) => {
  const {id} = req.params
  console.log(id)
  todos = todos.filter((todo) => todo.id !== +id)
  res.json({todos})
})

app.listen(3000)