import React from 'react'
import {Link} from 'react-router-dom'
import style from '../layout.module.css'
import lobo_facebook from '../../../assets/facebook.png'

export default function(){

    return(
        <footer className={style.grid_footer_area}>
            <p>Desenvolvido por Rafael Carrilho</p>
            <div>
                <Link to="/">Facebook</Link>
                <Link to="/">Instagram</Link>
                <Link to="/">LinkedIN</Link>
            </div>
        </footer>
    )
}