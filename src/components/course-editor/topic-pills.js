import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import topicService from "../../services/topic-service";
import lessonService from "../../services/lesson-service";

const TopicPills = ({
    topics=[],
    findTopicsForLesson,
    createTopic,
    updateTopic,
    deleteTopic,
    cleanTopics
}) => {
  const {layout, courseId, moduleId, lessonId, topicId} = useParams();
  const [lessonTitle, setTopicTitle] = useState("")

  useEffect(()=>{
    if (moduleId !=="undefined" && typeof moduleId !== "undefined" && lessonId !== "undefined" && typeof lessonId !== "undefined") {
      findTopicsForLesson(lessonId)
    } else {
      cleanTopics()
    }
    lessonService.findLesson(lessonId).then(actualLesson => {
      setTopicTitle(actualLesson.title)})
  }, [moduleId, lessonId])

  return (
      <div>
        <label className="font-weight-bold h5">Editing Topics for {lessonTitle} :</label>
        <ul className={"nav nav-pills"}>
        {topics.map(topic =>
          <button type="button" className={`btn btn-outline-info lesson-btn
                     ${topic._id === topicId ? 'active' : ''}`}>
          <EditableItem
              to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
              updateItem={updateTopic}
              deleteItem={deleteTopic}
              item={topic}
              active={topic._id === topicId}/>
          </button>
        )}
        <li className="nav-item">
          <div className={"container-fluid"}>
            <i onClick={() => createTopic(lessonId)} className="fa fa-plus fa-2x"/>
          </div>
        </li>
      </ul>
      </div>
  )
}

const stpm = (state) => ({
  topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
  findTopicsForLesson: (lessonId) => {
    topicService.findTopicsForLesson(lessonId).then(topics => dispatch({
      type: "FIND_TOPICS_FOR_LESSON",
      topics: topics
    }))
  },
  createTopic: (lessonId) => {
    if(lessonId === "undefined" || typeof lessonId === "undefined") {
      alert("Please select a lesson first to add lessons!")
      return
    }
    topicService.createTopic(lessonId, {title: "New Topic"})
    .then(actualTopic => dispatch({
      type: "CREATE_TOPIC",
      topic: actualTopic
    }))
  },
  updateTopic: (topic) => {
    topicService.updateTopic(topic._id, topic)
    .then(status => dispatch({
      type: "UPDATE_TOPIC",
      updatedTopic: topic
    }))
  },
  deleteTopic: (item) => {
    topicService.deleteTopic(item._id)
    .then(status => dispatch({
      type: "DELETE_TOPIC",
      topicToDelete: item
    }))
  },
  cleanTopics: () => {
    dispatch({
      type: "CLEAN_TOPICS"
    })
  }
})

export default connect(stpm, dtpm)(TopicPills)