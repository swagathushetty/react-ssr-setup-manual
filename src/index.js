import express from 'express'
import { connect } from 'react-redux'
import renderer from './helpers/renderer.'
const app=express()
app.use(express.static('public')) // expose our client bundle.js(inside public) 

app.get('*',(req,res)=>{
 res.send(renderer(req))
})

app.listen(3000,()=>console.log('server started'))