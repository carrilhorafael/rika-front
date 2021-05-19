import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import SideMenu from './sidemenu/SideMenu'
import Tasks from './tasks/Task'
import style from './layout.module.css'

export default function Layout (props) {
    return(
        <div className={style.grid_main_container}>
            <div className={style.grid_logo}>
                <h1>理科</h1>
                <h2>Rika</h2>
            </div>
            <Header />
            <SideMenu />
            <main className={style.grid_main_area}>
                {props.children}
            </main>
            <Tasks />
            <Footer />
        </div>
    )
}