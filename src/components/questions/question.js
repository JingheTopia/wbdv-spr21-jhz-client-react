import React from 'react';
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";


const Question = (
    {question,
    updateQuestion,
        grade
    }) => {
    return (
        <div>
            {
                question.type === "TRUE_FALSE" &&
                    <TrueFalseQuestion question = {question}
                                       updateQuestion={updateQuestion}
                                       grade = {grade}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                    <MultipleChoiceQuestion question = {question}
                                            updateQuestion={updateQuestion}
                                            grade = {grade}/>
            }



        </div>
    )
}


export default Question