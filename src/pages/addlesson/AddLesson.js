import React, { useState } from 'react';
import style from './addlesson.module.css'

const subjects = [
    {id: 0, name: "HTML"},
    {id: 1, name: "CSS" },
    {id: 2, name: "React"},
    {id: 3, name: "Rails"},
]

export default function AddLesson () {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [youtube, setYoutube] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        console.log({
            "name": name,
            "description": description,
            "link_youtube": youtube
        })
    }

    return(
        <>
        <h2>Adicione uma nova aula</h2>
        <form className={style.form_classname} onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor = "id-input-name">Nome:</label>
                <select id = "id-select-name" value={name} onChange={e => setName(e.target.value)}>
                    <option value={""}>Selecione a aula</option>
                    {subjects.map(subject => (
                        <option key={subject.id} value={subject.name}>{subject.name}</option>
                    ))}
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor = "id-input-link">Link do Youtube:</label>
                <input id = "id-input-link" value={youtube} onChange={e => setYoutube(e.target.value)}></input>
            </fieldset>
            <fieldset>
                <label htmlFor = "id-input-description">Descrição:</label>
                <textarea id = "id-input-description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </fieldset>
            <input type="submit" value="Enviar"></input>
        </form>
        </>
    )

}