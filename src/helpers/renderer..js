import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import Routes from '../client/Routes'

//server side routing
//uses the same routes file as client side
export default (req)=>{
    const content=renderToString(
        <StaticRouter location={req.url} context={{}}>
            <Routes />
        </StaticRouter>
    )

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
