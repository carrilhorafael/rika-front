import axios from 'axios'

const api = axios.create({
    baseURL: "https://psina-back.herokuapp.com/"
})

export function getNews () {
    return api.get("/news")
}