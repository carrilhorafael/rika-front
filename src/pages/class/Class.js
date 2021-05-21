import React from 'react'
import style from './class.module.css'

const classes = [
    {name: "HTML", links:[
        "https://www.youtube.com/embed/GHYK0Er6Lk0",
        "https://www.youtube.com/embed/sdy4MaxAxTE",
        "https://www.youtube.com/embed/cdtULRcYVvE",
    ] 
    },
    {name: "CSS", links:[
        "https://www.youtube.com/embed/RLFpnIO5hB8",
        "https://www.youtube.com/embed/aTI3RoaoOFA",
        "https://www.youtube.com/embed/sdy4MaxAxTE",
    ] 
    },
    {name: "React", links:[
        "https://www.youtube.com/embed/aTI3RoaoOFA",
        "https://www.youtube.com/embed/NJBKdNAPGbk",
        "https://www.youtube.com/embed/cdtULRcYVvE",
        "https://www.youtube.com/embed/cdtULRcYVvE",
    ] 
    },
    {name: "Rails", links:[
        "https://www.youtube.com/embed/sdy4MaxAxTE",
        "https://www.youtube.com/embed/NJBKdNAPGbk",
        "https://www.youtube.com/embed/cdtULRcYVvE",
        "https://www.youtube.com/embed/NJBKdNAPGbk",
        "https://www.youtube.com/embed/cdtULRcYVvE",
    ] 
    },

]

export default function Class () {
    
    return (
        <>
            <div className={style.div_title_button}>
                <h2>Aulas</h2>
                <Link to="/add_class"><button className="button_main">Adicionar aula</button></Link>
            </div>
            {classes.map(lesson => {
                return (
                    <div>

                        <p className={style.class_name}>{lesson.name}</p>
                        <div className={style.container_classes}>        
                            {lesson.links.map(link => (
                                <iframe className={style.iframe_youtube} src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            ))}
                        </div>
                    </div>
                )
            })}
        </>
    )
}   