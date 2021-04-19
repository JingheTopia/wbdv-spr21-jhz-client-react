import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const QuizAttempt = ({attempt}) => {

    return(
        <div className={"container-fluid"}>
            <ul className="list-group">
                <li className={"list-group-item"}>
                    Attempt Id: {attempt._id}
                </li>
                <li className={"list-group-item"}>
                    Score: {attempt.score}
                </li>
            </ul>
        </div>
    )

}

export default QuizAttempt;