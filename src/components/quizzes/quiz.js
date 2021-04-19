import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Question from "../questions/question";
import {connect} from "react-redux";
import quizzesService, {submitQuiz} from "../../services/quizzes-service"
import QuizAttempt from "./quiz-attempt";


const Quiz = ({
    attempt_questions = [],
    attempts = [],
    findAllAttemptsForQuiz,
    updateQuestion,
    findAllQuestions,
  }) => {

    const {quizId} = useParams();
    const [submitted,  setSubmitted] = useState(false)
    const [showAttempts,  setShowAttempts] = useState(false)
    const [score, setScore] = useState(0)

    useEffect(() => {
        findAllQuestions(quizId);
        findAllAttemptsForQuiz(quizId)
    }, [findAllAttemptsForQuiz])

    return (
        <div>
            <h3>quiz {quizId} ({attempt_questions.length})</h3>
            <ul>
                {
                    attempt_questions.map((question) => {
                    return (
                        <li>
                            <Question question={question}
                                      updateQuestion={updateQuestion}
                                      grade = {submitted}/>
                        </li>
                    )
                })
                }
            </ul>
            <hr/>
            <div className={"row"}>
                {submitted && <div className={"col"}
                style={{"fontWeight" : "bold"}}>
                    Score : {score}
                </div>}

                <div className={"col"}>
                <button type="button"
                        className="btn btn-primary float-right"
                        onClick={() => {
                            setSubmitted(true)
                            let numberOfCorrectQuestions = 0
                            attempt_questions.forEach(question =>
                                question.answer === question.correct ?
                                numberOfCorrectQuestions++ : numberOfCorrectQuestions)
                            let score = 100 * numberOfCorrectQuestions / attempt_questions.length
                            setScore(score)
                            submitQuiz(quizId, attempt_questions)
                        }}
                >Submit</button>

                    <button type="button"
                            className="btn btn-success float-right"
                            style={{"marginRight" : "2%"}}
                            onClick={() => {
                               setSubmitted(false)
                                setShowAttempts(false)}}
                    >Redo Quiz</button>
                </div>
            </div>
            <hr/>

            <div className={"row"}>
                <div className={"col"}>
                <button type="button"
                        className="btn btn-info float-right"
                        style={{"marginBottom" : "5%"}}
                        onClick={() => {
                            setShowAttempts(true)
                            findAllAttemptsForQuiz(quizId)
                        }}
                >Show Attempts</button>
                </div>
            </div>

            { showAttempts && <div className={"container-fluid"}>
                <h3 className={"row"}
                >{attempts.length} Attempts for quiz {quizId} in total: </h3>
                <ul>
                    {
                        attempts.map((attempt) => {
                            return (
                                <div className={"row"}
                                    style={{"marginBottom" : "2%"}}>
                                <QuizAttempt attempt={attempt}/>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
            }
        </div>
    )
}


const stpm = (state) => {
    return {
        attempts: state.quizAttemptsReducer.attempts,
        attempt_questions : state.quizAttemptsReducer.attempt_questions
    }
}
const dtpm = (dispatch) => ({

    findAllAttemptsForQuiz: (qid) => {
            quizzesService.findAttemptsForQuiz(qid)
                .then(attempts => dispatch({
                    type: "FIND_ALL_ATTEMPTS_FOR_QUIZ",
                    attempts: attempts
                }))
        },

     updateQuestion : (updatedQuestion) => {
        dispatch({
            type: "UPDATE_QUESTION",
            updatedQuestion : updatedQuestion
        })
    },

    findAllQuestions : (quizId) => {
        quizzesService.findQuestionsForQuiz(quizId).then(
            questions => {
                dispatch({
                    type: "FIND_ALL_QUESTIONS",
                    questions : questions
                })
            }
        )
    }

})

export default connect(stpm, dtpm)(Quiz)
