import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import SideMenu from './sidemenu/SideMenu'
import Tasks from './tasks/Task'

export default function Layout (props) {
    return(
        <div className="grid_main_content">
            <Header />
            <SideMenu />
            <main className="item_grid grid_switch_area">
                {props.children}
            </main>
            <Tasks />
            <Footer />
        </div>
    )
}