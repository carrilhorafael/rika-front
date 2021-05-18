import React from 'react'
import Header from './header/Header'

function Layout (props) {
    return(
        <div className="grid-main-content">
            <Header />
            <nav></nav>
            <main>{props.children}</main>
            <div></div>
            <footer></footer>
        </div>
    )
}