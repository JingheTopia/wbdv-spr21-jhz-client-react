const QUIZZES_URL = 'https://wbdv-spr21-server-node-jhz.herokuapp.com/api/quizzes';

const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}

export default {
    findQuestionsForQuiz
}