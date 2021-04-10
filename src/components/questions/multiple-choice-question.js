import React, {useState, useEffect} from 'react';

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState('');
    const [grade, setGrade] = useState(false);

    return (
        <div>
            <h5>
                {grade &&
                <>
                    {question.question}
                    {
                        question.correct === yourAnswer &&
                        <i className="fas fa-check" style={{color: '#5cb85c'}}/>
                    }
                    {
                        question.correct !== yourAnswer &&
                        <i className="fas fa-times" style={{color: '#d9534f'}}/>
                    }
                </>
                }
                {!grade &&
                <>
                    {question.question}
                </>
                }
            </h5>

            <ul className="list-group">
                {
                    grade &&
                    question.choices.map((choice) => {
                        return (
                            <>
                                {yourAnswer === question.correct && yourAnswer === choice &&
                                    <li className='list-group-item list-group-item-success'>
                                        <lable>
                                            <input type='radio'
                                                   className=''
                                                   name={question._id}
                                                   checked
                                                   disabled={true}
                                            />
                                            {choice}
                                            <i className="fas fa-check float-right" style={{color: '#5cb85c'}}/>
                                        </lable>
                                    </li>
                                }
                                {yourAnswer === question.correct && yourAnswer !== choice &&
                                    <li className='list-group-item'>
                                        <lable>
                                            <input type='radio'
                                                   className=''
                                                   name={question._id}
                                                   disabled={true}
                                            />
                                            {choice}
                                        </lable>
                                    </li>
                                }
                                {yourAnswer !== question.correct && yourAnswer === choice
                                && choice !== question.correct &&
                                    <li className='list-group-item list-group-item-danger'>
                                        <lable>
                                            <input type='radio'
                                                   className=''
                                                   name={question._id}
                                                   checked
                                                   disabled={true}
                                            />
                                            {choice}
                                            <i className="fas fa-times float-right" style={{color: '#d9534f'}}/>
                                        </lable>
                                    </li>
                                }
                                {yourAnswer !== question.correct && yourAnswer !== choice
                                    && choice === question.correct &&
                                    <li className='list-group-item list-group-item-success'>
                                        <lable>
                                            <input type='radio'
                                                   className=''
                                                   name={question._id}
                                                   disabled={true}
                                            />
                                            {choice}
                                            <i className="fas fa-check float-right" style={{color: '#5cb85c'}}/>
                                        </lable>
                                    </li>
                                }
                                {yourAnswer !== question.correct && yourAnswer !== choice
                                && choice !== question.correct &&
                                <li className='list-group-item'>
                                    <lable>
                                        <input type='radio'
                                               className=''
                                               name={question._id}
                                               disabled={true}
                                        />
                                        {choice}
                                    </lable>
                                </li>
                                }
                            </>
                        )
                    })
                }
                {
                    !grade && question.choices.map((choice) => {

                        return (
                            <li className="list-group-item">
                                <lable>
                                    <input type='radio'
                                           className=''
                                           onClick={() => {
                                               setYourAnswer(choice)
                                           }}
                                           name={question._id}/> {choice}
                                </lable>
                            </li>
                        )
                    })
                }
            </ul>
            <p>
                Your answer: {yourAnswer}
            </p>
            <button type="button"
                    class="btn btn-success"
                    onClick={() => {
                        if (yourAnswer === '') {
                            alert('Please select an option.')
                        } else {
                            setGrade(true) // only allow select answer for once
                        }
                    }}
            >Grade</button>
            <hr/>
        </div>
    )

}

export default MultipleChoiceQuestion;