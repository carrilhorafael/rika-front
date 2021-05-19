import React from 'react'
import {Link} from 'react-router-dom'
import style from "../layout.module.css"

export default function SideMenu () {
    return (<nav className={style.grid_nav_area}>
        <Link to="/">Link 1</Link>
        <Link to="/">Link 2</Link>
        <Link to="/">Link 3</Link>
        <Link to="/">Link 4</Link>
        <Link to="/">Link 5</Link>
    </nav>)
}
