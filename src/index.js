import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import { connect } from 'react-redux'
import Home from './client/components/Home'
const app=express()
app.use(express.static('public')) // expose our client bundle.js(inside public) 

app.get('/',(req,res)=>{
 const content=renderToString(<Home />)

/*
 id root is added for the client side bundle react app to 
render it again on browser. the server rendered html aka content 
will be overwritten by the react app on the browser
*/

 const html=`
 <html>
    <head></head>
    <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script> 
    </body>
 <html>
 `
 res.send(html)
})

app.listen(3000,()=>console.log('server started'))