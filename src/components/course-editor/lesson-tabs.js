import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import lessonService from "../../services/lesson-service";
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import moduleService from "../../services/module-service"

const LessonTabs = ({
    lessons=[],
    findLessonsForModule,
    createLesson,
    updateLesson,
    deleteLesson,
    emptyLessons
}) => {
  const {layout, courseId, moduleId, lessonId} = useParams();

  const [moduleTitle, setModuleTitle] = useState("")
  useEffect(()=>{
    if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
      findLessonsForModule(moduleId)
    } else {
        emptyLessons(moduleId)
    }
  moduleService.findModule(moduleId).then(actualModule => {
      setModuleTitle(actualModule.title)
  })
  }, [moduleId])
  return (
      <div>
      <label className="font-weight-bold h5">Editing Lessons for {moduleTitle} :</label>
      <ul className={"nav nav-tabs "}>
        {lessons.map(lesson =>
            <li  className={`list-group-item
                     ${lesson._id === lessonId ? 'active' : ''}`}>
              <EditableItem
                  active={lesson._id === lessonId}
                  updateItem={updateLesson}
                  deleteItem={deleteLesson}
                  to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                  item={lesson}/>
            </li>
        )}
        <li className="nav-item">
          <div className={"container-fluid"}>
            <i onClick={() => createLesson(moduleId)} className="fa fa-plus fa-2x"/>
          </div>
        </li>
      </ul>
      </div>
  )
}

const stpm = (state) => ({
  lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
  findLessonsForModule: (moduleId) => {
    lessonService.findLessonsForModule(moduleId).then(lessons => dispatch({
      type: "FIND_LESSONS_FOR_MODULE",
      lessons: lessons
    }))
  },
  createLesson: (moduleId) => {
    if(moduleId === "undefined" || typeof moduleId === "undefined") {
      alert("Please select a module first to add lessons!")
      return
    }

    lessonService.createLesson(moduleId, {title: "New Lesson"})
    .then(actualLesson => dispatch({
      type: "CREATE_LESSON",
      lesson: actualLesson
    }))
  },
  updateLesson: (lesson) => {
    lessonService.updateLesson(lesson._id, lesson)
    .then(status => dispatch({
      type: "UPDATE_LESSON",
      updatedLesson: lesson
    }))
  },
  deleteLesson: (item) => {
    lessonService.deleteLesson(item._id)
    .then(status => dispatch({
      type: "DELETE_LESSON",
      lessonToDelete: item
    }))
  },

    emptyLessons: (moduleId) => {
      dispatch({
          type: "EMPTY_LESSON",
      })
      lessonService.findLessonsForModule(moduleId).then(lessons => {
          lessons.map(lesson =>
              lessonService.deleteLesson(lesson._id))
     })}
    })

export default connect(stpm, dtpm)(LessonTabs)