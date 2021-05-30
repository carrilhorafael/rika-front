import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import CardNews from '../../common/card_news/CardNews';
import { getNews } from '../../service/Api';
import style from './home.module.css'

// let news = [
//     {content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere id sem feugiat vehicula. Donec a urna et ante congue porttitor. Nullam nec tellus eleifend dui finibus congue. Maecenas eu nisl egestas, vehicula arcu vitae, egestas nulla. Mauris eget eros suscipit, pulvinar ipsum id, sagittis mauris. Donec sed augue elementum, consequat ligula vel, sodales dolor. In id arcu vitae ipsum dignissim congue quis ac lorem. Praesent ac orci mollis, rhoncus est eget, tristique enim. Nunc et dui eu orci aliquam lobortis sit amet non leo. Mauris vitae eros sed purus volutpat cursus et id augue.", author: "Administrador"},
//     {content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere id sem feugiat vehicula. Donec a urna et ante congue porttitor. Nullam nec tellus eleifend dui finibus congue. Maecenas eu nisl egestas, vehicula arcu vitae, egestas nulla. Mauris eget eros suscipit, pulvinar ipsum id, sagittis mauris. Donec sed augue elementum, consequat ligula vel, sodales dolor. In id arcu vitae ipsum dignissim congue quis ac lorem. Praesent ac orci mollis, rhoncus est eget, tristique enim. Nunc et dui eu orci aliquam lobortis sit amet non leo. Mauris vitae eros sed purus volutpat cursus et id augue.", author: "Administrador"},
//     {content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere id sem feugiat vehicula. Donec a urna et ante congue porttitor. Nullam nec tellus eleifend dui finibus congue. Maecenas eu nisl egestas, vehicula arcu vitae, egestas nulla. Mauris eget eros suscipit, pulvinar ipsum id, sagittis mauris. Donec sed augue elementum, consequat ligula vel, sodales dolor. In id arcu vitae ipsum dignissim congue quis ac lorem. Praesent ac orci mollis, rhoncus est eget, tristique enim. Nunc et dui eu orci aliquam lobortis sit amet non leo. Mauris vitae eros sed purus volutpat cursus et id augue.", author: "Administrador"},
//     {content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere id sem feugiat vehicula. Donec a urna et ante congue porttitor. Nullam nec tellus eleifend dui finibus congue. Maecenas eu nisl egestas, vehicula arcu vitae, egestas nulla. Mauris eget eros suscipit, pulvinar ipsum id, sagittis mauris. Donec sed augue elementum, consequat ligula vel, sodales dolor. In id arcu vitae ipsum dignissim congue quis ac lorem. Praesent ac orci mollis, rhoncus est eget, tristique enim. Nunc et dui eu orci aliquam lobortis sit amet non leo. Mauris vitae eros sed purus volutpat cursus et id augue.", author: "Administrador"},
//     {content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere id sem feugiat vehicula. Donec a urna et ante congue porttitor. Nullam nec tellus eleifend dui finibus congue. Maecenas eu nisl egestas, vehicula arcu vitae, egestas nulla. Mauris eget eros suscipit, pulvinar ipsum id, sagittis mauris. Donec sed augue elementum, consequat ligula vel, sodales dolor. In id arcu vitae ipsum dignissim congue quis ac lorem. Praesent ac orci mollis, rhoncus est eget, tristique enim. Nunc et dui eu orci aliquam lobortis sit amet non leo. Mauris vitae eros sed purus volutpat cursus et id augue.", author: "Administrador"},
//     {content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere id sem feugiat vehicula. Donec a urna et ante congue porttitor. Nullam nec tellus eleifend dui finibus congue. Maecenas eu nisl egestas, vehicula arcu vitae, egestas nulla. Mauris eget eros suscipit, pulvinar ipsum id, sagittis mauris. Donec sed augue elementum, consequat ligula vel, sodales dolor. In id arcu vitae ipsum dignissim congue quis ac lorem. Praesent ac orci mollis, rhoncus est eget, tristique enim. Nunc et dui eu orci aliquam lobortis sit amet non leo. Mauris vitae eros sed purus volutpat cursus et id augue.", author: "Administrador"},
//     {content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere id sem feugiat vehicula. Donec a urna et ante congue porttitor. Nullam nec tellus eleifend dui finibus congue. Maecenas eu nisl egestas, vehicula arcu vitae, egestas nulla. Mauris eget eros suscipit, pulvinar ipsum id, sagittis mauris. Donec sed augue elementum, consequat ligula vel, sodales dolor. In id arcu vitae ipsum dignissim congue quis ac lorem. Praesent ac orci mollis, rhoncus est eget, tristique enim. Nunc et dui eu orci aliquam lobortis sit amet non leo. Mauris vitae eros sed purus volutpat cursus et id augue.", author: "Administrador"},
//     {content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere id sem feugiat vehicula. Donec a urna et ante congue porttitor. Nullam nec tellus eleifend dui finibus congue. Maecenas eu nisl egestas, vehicula arcu vitae, egestas nulla. Mauris eget eros suscipit, pulvinar ipsum id, sagittis mauris. Donec sed augue elementum, consequat ligula vel, sodales dolor. In id arcu vitae ipsum dignissim congue quis ac lorem. Praesent ac orci mollis, rhoncus est eget, tristique enim. Nunc et dui eu orci aliquam lobortis sit amet non leo. Mauris vitae eros sed purus volutpat cursus et id augue.", author: "Administrador"},
//     {content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere id sem feugiat vehicula. Donec a urna et ante congue porttitor. Nullam nec tellus eleifend dui finibus congue. Maecenas eu nisl egestas, vehicula arcu vitae, egestas nulla. Mauris eget eros suscipit, pulvinar ipsum id, sagittis mauris. Donec sed augue elementum, consequat ligula vel, sodales dolor. In id arcu vitae ipsum dignissim congue quis ac lorem. Praesent ac orci mollis, rhoncus est eget, tristique enim. Nunc et dui eu orci aliquam lobortis sit amet non leo. Mauris vitae eros sed purus volutpat cursus et id augue.", author: "Administrador"}
// ]

export default function Home () {
    const [news, setNews] = useState([])

    useEffect(() => {
        getNews().then(({data}) => {
            setNews(data)
            console.log(data)
        })

    }, [])

    return(
        <>
            <h2>Noticias</h2>
            <p>Fique por dentro das novidades do Rika</p>
            {news.map(single_new => (
                <CardNews news = {single_new} />
            ))}
        </>
    )
}