import React from 'react'
import {Link} from 'react-router-dom'

export default function Initial (props){
    return(
        <>
            <h1>Esse é o initial page</h1>
            <Link to="/">ir para a home</Link>
        </>
    )
}