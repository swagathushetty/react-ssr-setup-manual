import React from 'react'

const Home=()=>{
    return (
        <div>
    <div>
        I'm the Home component with change
    </div>
    <button onClick={()=>{console.log('hi there')}}>Hi There</button>
    </div>
    )
}

export default Home