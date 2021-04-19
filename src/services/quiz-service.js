const QUIZZES_URL = "https://wbdv-spr21-server-node-jhz.herokuapp.com/api/quizzes"

export const findAllQuizzes = () => {
    return (fetch(QUIZZES_URL)
        .then(response => response.json()))
}

const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}

const api = {
    findAllQuizzes,
    findQuizById
}

export default api

