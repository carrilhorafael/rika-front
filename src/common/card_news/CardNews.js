import React from 'react'
import style from './cardnews.module.css'

export default function CardNews(props){

    return (
        <div className={style.card_news_div}>
            <p>{props.news.content}</p>
            <h3>{props.news.author}</h3>
        </div>
    )
}