import React, { useState, useEffect} from 'react';
import { postLesson, getSubjectsPreview, getFilteredUsers } from '../../service/Api';
import FormLesson from './formLesson';

// const subjects = [
//     {id: 0, name: "HTML"},
//     {id: 1, name: "CSS" },
//     {id: 2, name: "React"},
//     {id: 3, name: "Rails"},
// ]

export default function AddLesson () {
    const [subjects, setSubjects] = useState([])
    const [instructors, setInstructors] = useState([])
    

    const handleSubmit = formData => {        
        postLesson(formData)
    }

    useEffect(() => {
        getSubjectsPreview().then(({data}) => {
            setSubjects(data)
        })
        getFilteredUsers("instrutor").then(({data})=>{
            setInstructors(data)
        })
    }, [])

    return(
        <>
            <h2>Adicione uma nova aula</h2>
            <FormLesson 
                instructors={instructors}
                subjects={subjects}
                handleSubmit={handleSubmit}
                />
        </>
    )

}