import React from 'react'
import {renderToString} from 'react-dom/server'
import Home from '../client/components/Home'

export default ()=>{
    const content=renderToString(<Home />)

/*
 id root is added for the client side bundle react app to 
render it again on browser. the server rendered html aka content 
will be overwritten by the react app on the browser
*/

 return `
 <html>
    <head></head>
    <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script> 
    </body>
 <html>
 `
}
