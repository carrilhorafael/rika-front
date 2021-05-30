import React from 'react'
import {Link} from 'react-router-dom'
import style from './subjects.module.css'

const subjects = [
    {id: 0, name: "HTML", lessons:[
        {id: 1, link: "https://www.youtube.com/embed/GHYK0Er6Lk0"},
        {id: 2, link: "https://www.youtube.com/embed/sdy4MaxAxTE"},
        {id: 3, link: "https://www.youtube.com/embed/cdtULRcYVvE"}
        
    ] 
    },
    {id: 1, name: "CSS", lessons:[
        {id: 4, link: "https://www.youtube.com/embed/RLFpnIO5hB8"},
        {id: 5, link: "https://www.youtube.com/embed/aTI3RoaoOFA"},
        {id: 6, link: "https://www.youtube.com/embed/sdy4MaxAxTE"}
        
    ] 
    },
    {id: 2, name: "React", lessons:[
        {id: 7, link: "https://www.youtube.com/embed/aTI3RoaoOFA"},
        {id: 8, link: "https://www.youtube.com/embed/NJBKdNAPGbk"},
        {id: 9, link: "https://www.youtube.com/embed/cdtULRcYVvE"},
        {id: 10, link: "https://www.youtube.com/embed/sdy4MaxAxTE"}
        
    ] 
    },
    {id: 3, name: "Rails", lessons:[
        {id: 11, link: "https://www.youtube.com/embed/NJBKdNAPGbk"},
        {id: 12, link: "https://www.youtube.com/embed/cdtULRcYVvE"},
        {id: 13, link: "https://www.youtube.com/embed/cdtULRcYVvE"},
        {id: 14, link: "https://www.youtube.com/embed/NJBKdNAPGbk"}
        
    ] 
    }

]

export default function ListSubjects () {
    
    return (
        <>
            <div className={style.div_title_button}>
                <h2>Aulas</h2>
                <Link to="/add_lesson"><button className="button_main">Adicionar aula</button></Link>
            </div>
            {subjects.map(subject => {
                return (
                    <div key={subject.id}>

                        <p className={style.class_name}>{subject.name}</p>
                        <div className={style.container_classes}>        
                            {subject.lessons.map(lesson => (
                                <div key={lesson.id} className={style.lesson_div}>
                                    <Link to={`view_lesson/${lesson.id}`}>
                                        <button className={"button_main "+ style.button_assist}>Assistir a aula</button>
                                    </Link>

                                    <iframe className={style.iframe_youtube} src={lesson.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}
        </>
    )
}   