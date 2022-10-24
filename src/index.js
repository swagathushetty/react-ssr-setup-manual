import express from 'express'
import { connect } from 'react-redux'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
const app=express()
app.use(express.static('public')) // expose our client bundle.js(inside public) 

app.get('*',(req,res)=>{
 const store=createStore()


 res.send(renderer(req,store))
})

app.listen(3000,()=>console.log('server started'))