const initialState = {
    attempts: [],
    attempt_questions : []
}

const quizAttemptsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_ATTEMPT":
            return {
                attempts: [
                    ...state.attempts,
                    action.attempt
                ]
            }

        case "FIND_ALL_ATTEMPTS_FOR_QUIZ":
            return {
                ...state,
                attempts: action.attempts
            }

        case "UPDATE_QUESTION":
            return {
                ...state,
                attempt_questions: state.attempt_questions.map(question => {
                    return question._id === action.updatedQuestion._id ? action.updatedQuestion : question;
                })
            }

        case "FIND_ALL_QUESTIONS":
            return {
                ...state,
                attempt_questions: action.questions
            }

        default:
            return state
    }


}

export default quizAttemptsReducer