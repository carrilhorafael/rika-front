import axios from 'axios'

const api = axios.create({
    baseURL: "https://psina-back.herokuapp.com/"
})

export function getNews () {
    return api.get("/news")
}

export function postLesson (fetchBody) {
    return api.post("/lessons", fetchBody)
}
export function getSubjectsPreview () {
    return api.get("/subjects/preview")
}
export function getFilteredUsers(filter){
    return api.get("/users/filter", {
        params:{"filter": filter}
    })
}