import React from 'react'
import style from './cardnews.module.css'

export default function CardNews(props){

    return (
        <div className={style.card_news_div}>
            <h3>{props.news.title}</h3>
            <p>{props.news.content}</p>
            <h3>{props.news.user.name}</h3>
        </div>
    )
}