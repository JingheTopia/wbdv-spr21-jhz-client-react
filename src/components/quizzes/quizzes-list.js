import {Link, useParams} from "react-router-dom";
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import quizReducer from "../../reducers/quiz-reducer";
import quizService from "../../services/quiz-service"

const QuizzesList = (
    {
        quizzes=[],
        findAllQuizzes
    }) => {
    const {courseId} = useParams();
    useEffect(() => {findAllQuizzes()}, [findAllQuizzes])

    return(
    <div>
        <h2>Quizzes ({quizzes.length})</h2>
        <ul className="list-group">
            {quizzes.map(quiz =>
                    <li className={"list-group-item"}>
                        <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                            {quiz.title}
                        </Link>
                    </li>
                )
            }

        </ul>
    </div>)}

const stpm = (state) => {
    return {
        quizzes: state.quizReducer.quizzes
    }   
}
const dtpm = (dispatch) => {
    return {
        findAllQuizzes: () => {
            quizService.findAllQuizzes()
                .then(quizzes => dispatch({
                    type: "FIND_ALL_QUIZZES",
                    quizzes: quizzes
                }))
        }
    }
}

export default connect(stpm, dtpm)(QuizzesList)
