import React from 'react'
import {Link} from 'react-router-dom'
import style from "../layout.module.css"

export default function SideMenu () {
    const handlerToggleShow = (e) => {
        e.target.nextSibling.style.display = e.target.nextSibling.style.display === "none" ? "flex" : "none" 
    }
    return (<nav className={style.grid_nav_area}>
        <Link to="/"><button className={style.button_nav_type}>Principal</button></Link>
        <Link to="/class"><button className ={style.button_nav_type}>Aulas</button></Link>
        <button onClick={handlerToggleShow} className = {style.button_nav_type}>Entregas</button>
        <div style={{display:"none"}} className={style.div_buttons_nav_bar}>
            <Link><button className={style.button_nav_type}>Tarefas</button></Link>
            <Link><button className={style.button_nav_type}>Feedbacks</button></Link>
            <Link><button className={style.button_nav_type}>Minhas entregas</button></Link>
        </div>
        <Link to="/"><button className ={style.button_nav_type}>Painel</button></Link>
        <Link to="/logout"><button className = {style.button_nav_type}>Sair</button></Link>
    </nav>)
}
