import React from 'react'
import {useState, useEffect} from 'react'
import './course-editor-style.css';
import {Link, useParams} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import courseService from "../../services/course-service"
import LessonTabs from "./lesson-tabs";
import ModuleList from "../course-editor/module-list";
import TopicPills from "./topic-pills";
const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer : topicReducer
})

const store = createStore(reducer)
const CourseEditor = ({history}) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    const [courseTitle, setCourseTitle] = useState("")
    useEffect(() => {
        courseService.findCourseById(courseId).then(actualCourse => {
            setCourseTitle(actualCourse.title)
        })
    }, [courseId])
    return (
        <Provider store={store}>
        <div>
        <body>
        <div className="home-container">
            <div className="row">
                <div className={"container-fluid"}>
                    <nav className="navbar navbar-extend-lg navbar-dark bg-secondary">
                        <div className="nav col-4 ">
                            <Link to={`/courses/${layout}`}>
                            <i className="fas fa-times fa-2x text-white"/>
                            </Link>
                            <label className="text-white font-weight-bold h3">Web Dev: {courseTitle}</label>
                        </div>
                        <ul className="nav col-8">
                        </ul>
                    </nav>
            </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <ModuleList/>
                </div>

                <div className="col-8">
                    <div className={"row"}>
                        <div className={"container-fluid lesson-tabs"}>
                            <LessonTabs/></div>
                        </div>
                    <lr/>
                    <div className={"row"}>
                        <div className={"container-fluid topic-pills"}>
                            <TopicPills/></div>
                        </div>
                </div>
            </div>

            </div>
            </body>
        </div>
    </Provider>)}

export default CourseEditor

