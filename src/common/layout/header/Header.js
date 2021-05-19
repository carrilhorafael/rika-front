import React from 'react'
import style from '../layout.module.css'

export default function Header (props) {
    return(
        <header className={style.grid_header_area}>
            <div className={style.header_logo}>
                <h1>理科</h1>
                <h2>Rika</h2>
            </div>
            <div className={style.header_content}>
                <div>
                    <p>Olá</p>
                    <p>Rafael Carrilho</p>
                </div>
            </div>
        </header>
    )
}