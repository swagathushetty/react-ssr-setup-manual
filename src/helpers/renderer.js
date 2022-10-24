import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Routes from '../client/Routes'
//server side routing
//uses the same routes file as client side
export default (req,store)=>{
    const content=renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <Routes />
            </StaticRouter>
        </Provider>
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
