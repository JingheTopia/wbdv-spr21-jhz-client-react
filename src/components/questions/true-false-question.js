import React, {useState} from 'react';

const TrueFalseQuestion = ({question}) => {
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
                    !grade &&
                    <>
                        <li className="list-group-item">
                            <lable>
                                <input type='radio'
                                       className=''
                                       onClick={() => {
                                           setYourAnswer('true')
                                       }}
                                       name={question._id}/> TRUE
                            </lable>
                        </li>
                        <li className="list-group-item">
                            <lable>
                                <input type='radio'
                                       className=''
                                       onClick={() => {
                                           setYourAnswer('false')
                                       }}
                                       name={question._id}/> FALSE
                            </lable>
                        </li>
                    </>
                }

                {
                    grade &&
                    <>
                        {yourAnswer === question.correct && yourAnswer === 'true' &&
                            <li className='list-group-item list-group-item-success'>
                                <lable>
                                    <input type='radio'
                                           className=''
                                           name={question._id}
                                           checked
                                           disabled
                                    />
                                    TRUE
                                    <i className="fas fa-check float-right" style={{color: '#5cb85c'}}/>
                                </lable>
                            </li>
                        }
                        {yourAnswer === question.correct && yourAnswer === 'true' &&
                        <li className='list-group-item'>
                            <lable>
                                <input type='radio'
                                       className=''
                                       name={question._id}
                                       disabled={true}
                                />FALSE
                            </lable>
                        </li>
                        }
                        {yourAnswer === question.correct && yourAnswer === 'false' &&
                        <li className='list-group-item '>
                            <lable>
                                <input type='radio'
                                       className=''
                                       name={question._id}
                                       disabled={true}
                                />TRUE
                            </lable>
                        </li>
                        }
                        {yourAnswer === question.correct && yourAnswer === 'false' &&
                        <li className='list-group-item list-group-item-success'>
                            <lable>
                                <input type='radio'
                                       className=''
                                       name={question._id}
                                       checked
                                       disabled={true}
                                />
                                FALSE
                                <i className="fas fa-check float-right" style={{color: '#5cb85c'}}/>
                            </lable>
                        </li>
                        }

                        {yourAnswer !== question.correct && yourAnswer === 'true'
                            &&
                            <li className='list-group-item list-group-item-danger'>
                                <lable>
                                    <input type='radio'
                                           className=''
                                           name={question._id}
                                           checked
                                           disabled={true}
                                    />
                                    TRUE
                                    <i className="fas fa-times float-right" style={{color: '#d9534f'}}/>
                                </lable>
                            </li>
                        }
                        {yourAnswer !== question.correct && yourAnswer === 'true'
                        &&
                        <li className='list-group-item list-group-item-success'>
                            <lable>
                                <input type='radio'
                                       className=''
                                       name={question._id}
                                       disabled={true}
                                />
                                FALSE
                                <i className="fas fa-check float-right" style={{color: '#5cb85c'}}/>
                            </lable>
                        </li>
                        }
                        {yourAnswer !== question.correct && yourAnswer === 'false'
                        &&
                        <li className='list-group-item list-group-item-success'>
                            <lable>
                                <input type='radio'
                                       className=''
                                       name={question._id}
                                       disabled={true}
                                />
                                TRUE
                                <i className="fas fa-check float-right" style={{color: '#5cb85c'}}/>
                            </lable>
                        </li>
                        }
                        {yourAnswer !== question.correct && yourAnswer === 'false'
                        &&
                        <li className='list-group-item list-group-item-danger'>
                            <lable>
                                <input type='radio'
                                       className=''
                                       name={question._id}
                                       checked
                                       disabled={true}
                                />
                                FALSE
                                <i className="fas fa-times float-right" style={{color: '#d9534f'}}/>
                            </lable>
                        </li>
                        }
                    </>
                }
            </ul>

            <p>
                Your answer: {yourAnswer}
            </p>

            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        if (yourAnswer === '') {
                            alert('Please select one option.')
                        } else {
                            setGrade(true)
                        }
                    }}
            >Grade</button>
            <hr/>
        </div>
    )

}

export default TrueFalseQuestion;