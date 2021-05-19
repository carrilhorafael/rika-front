import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import SideMenu from './sidemenu/SideMenu'
import Tasks from './tasks/Task'
import style from './layout.module.css'

export default function Layout (props) {
    return(
        <div className={style.grid_main_container}>
            <Header />
            <SideMenu />
            <main className={style.item_grid + style.grid_switch_area}>
                {props.children}
            </main>
            <Tasks />
            <Footer />
        </div>
    )
}