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
                <h1>Rika</h1>
            </div>
            <Header />
            <SideMenu />
            <main className={style.grid_main_area}>
                <div className={style.main_container}>
                    {props.children} 
                </div>
            </main>
            <Tasks />
            <Footer />
        </div>
    )
}