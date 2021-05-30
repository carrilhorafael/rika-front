import React, {useState} from "react"
import style from './addlesson.module.css'


export default function FormLesson (props) {
    const [subject, setSubject] = useState("")
    const [description, setDescription] = useState("")
    const [youtube, setYoutube] = useState("")
    const [instructor, setInstructor] = useState("")

    const onFormSubmit = e => {
        e.preventDefault()
        props.handleSubmit({
            "subject_id": subject,
            "description": description,
            "link_youtube": youtube,
            "instructor_id": instructor
        })
    }

    return (
        <form className={style.form_addlesson} onSubmit={onFormSubmit}>
            <fieldset>
                <label htmlFor = "id-input-name">Matéria:</label>
                <select id = "id-select-name" value={subject} onChange={e => setSubject(e.target.value)}>
                    <option value={""}>Selecione a aula</option>
                    {props.subjects.map(subject => (
                        <option key={subject.id} value={subject.id}>{subject.name}</option>
                    ))}
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor = "id-input-instructor">Instrutor:</label>
                <select id = "id-select-instructor" value={instructor} onChange={e => setInstructor(e.target.value)}>
                    <option value={""}>Selecione o instrutor</option>
                    {props.instructors.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
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
            <input className="button_main" type="submit" value="Enviar"></input>
        </form>
    )
}