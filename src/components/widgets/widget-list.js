import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import widgetService from "../../services/widget-service"
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = ({
    widgets=[],
    findAllWidgetsForTopic,
    createWidget,
    updateWidget,
    deleteWidget,
    cleanWidget
}) => {
  const {layout, courseId, moduleId, lessonId, topicId, widgetId} = useParams();


  useEffect(()=>{
    if (moduleId !=="undefined" && typeof moduleId !== "undefined"
        && lessonId !== "undefined" && typeof lessonId !== "undefined"
        && topicId !== "undefined" && typeof topicId !== "undefined") {
        findAllWidgetsForTopic(topicId)
    } else {
      cleanWidget()
    }
  }, [moduleId, lessonId, topicId])

  return (
      <div>
          <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right"/>
          <h2>Widget List ({widgets.length}) </h2>
          <ul className="list-group">
              {
                  widgets.map(widget =>
                      <li className="list-group-item" key={widget.id}>
                          {
                              widget.type == "HEADING" &&
                              <HeadingWidget
                                  to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.id}`}
                                  // editing={editingWidget.id === widget.id}
                                  widget={widget}
                                  updateItem={updateWidget}
                                  deleteItem={deleteWidget}
                                  active={widget.id == widgetId}/>
                          }
                          {
                              widget.type == "PARAGRAPH" &&
                              <ParagraphWidget
                                  to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.id}`}
                                  widget={widget}
                                  updateItem={updateWidget}
                                  deleteItem={deleteWidget}
                                  active={widget.id == widgetId}/>
                          }
                          {
                              widget.type == "LIST" &&
                              <ListWidget
                                  to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.id}`}
                                  widget={widget}
                                  updateItem={updateWidget}
                                  deleteItem={deleteWidget}
                                  active={widget.id == widgetId}/>
                          }

                          {
                              widget.type == "IMAGE" &&
                              <ImageWidget
                                  to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.id}`}
                                  widget={widget}
                                  updateItem={updateWidget}
                                  deleteItem={deleteWidget}
                                  active={widget.id == widgetId}/>
                          }
                      </li>
                  )
              }
          </ul>
      </div>
  )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
    findAllWidgetsForTopic: (topicId) => {
    widgetService.findWidgetsForTopic(topicId).then(widgets => dispatch({
      type: "FIND_ALL_WIDGETS_FOR_TOPIC",
      widgets: widgets
    }))
  },
    createWidget: (topicId) => {
    if(topicId === "undefined" || typeof topicId === "undefined") {
      alert("Please select a lesson first to add lessons!")
      return
    }
    widgetService.createWidgetForTopic(topicId, {type: "HEADING", size : 1, text: "NEW HEADING"})
        .then(actualWidget => {
        dispatch({
      type: "CREATE_WIDGET",
      widget: actualWidget
    })})
  },
    updateWidget: (widget) => {
    widgetService.updateWidget(widget.id, widget)
    .then(status => dispatch({
      type: "UPDATE_WIDGET",
      updatedWidget: widget
    }))
  },

  deleteWidget: (widget) => {
      console.log("Printing widget id", widget.id)
    widgetService.deleteWidget(widget.id)
    .then(status => dispatch({
      type: "DELETE_WIDGET",
      widgetToDelete: widget
    }))
  },

  cleanWidget: () => {
    dispatch({
      type: "CLEAN_WIDGET"
    })
  }
})

export default connect(stpm, dtpm)(WidgetList)