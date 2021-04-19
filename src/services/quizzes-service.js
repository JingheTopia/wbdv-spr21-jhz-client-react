
const BASE_URL = "https://wbdv-spr21-server-node-jhz.herokuapp.com/api/quizzes";

export const submitQuiz = (quizId, questions) => {
    console.log("creating attempt....\n")
    console.log(quizId, "\n")
    console.log(questions)

    fetch(`${BASE_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(result => console.log(result))
};


export const findAttemptsForQuiz = (quizId) => {
    return fetch(`${BASE_URL}/${quizId}/attempts`)
        .then(response => response.json())
}


export const updateQuestion =() =>{

}



const findQuestionsForQuiz = (qid) => {
    return fetch(`${BASE_URL}/${qid}/questions`)
        .then(response => response.json())
}


export default  {
    submitQuiz,
    findAttemptsForQuiz,
    updateQuestion,
    findQuestionsForQuiz
}
