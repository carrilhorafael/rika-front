import React from 'react'

function Layout (props) {
    return(
        <div className="grid-main-content">
            <div>
                <h1>理科</h1>
                <h2>Rika</h2>
            </div>
            <nav></nav>
            <main>{props.children}</main>
            <div></div>
            <footer></footer>
        </div>
    )
}