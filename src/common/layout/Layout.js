import React from 'react'
import Header from './header/Header'

function Layout (props) {
    return(
        <div className="grid-main-content">
            <Header />
            <SideMenu />
            <main className="item_grid grid_switch_area">
                {props.children}
            </main>
            <ListTasks />
            <Footer />
        </div>
    )
}