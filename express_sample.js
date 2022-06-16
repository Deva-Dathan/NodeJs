/* First Program of Express for printing hello in webpage */
/*
const express=require('express')
const { listen } = require('express')
const app=express()

app.get('/',(req,res)=>res.send('hello'))
app.listen(3000,()=>console.log('Server Started'))



/* Program of adding html page through express code */

const express=require('express')
const app=express()
const path=require('path')

app.get('/',(req,res)=>res.send('hello'))
app.get('/signup',(req,res)=>res.sendFile(path.join(__dirname,'sampleform.html')))
app.post('/signup',(req,res)=>res.send('Data Inserted'))  /* Passing data to server by post method */
app.get('/about',(req,res)=>res.send('About Page'))
app.listen(3000,()=>console.log('Server Started'))