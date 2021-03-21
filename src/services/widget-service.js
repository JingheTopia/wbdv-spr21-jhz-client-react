
const TOPIC_URL = "https://wbdv-course-manager-jh.herokuapp.com/api/topics";
const WIDGETS_URL = "https://wbdv-course-manager-jh.herokuapp.com/api/widgets";

const createWidgetForTopic = (topicId, widget) => {
    console.log("topic is:", topicId)
    console.log("widget is:" , widget.toString())
   return  fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(widget)
    }).then(response => response.json())
}

const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`).then(response => response.json())


const findAllWidgets = () =>
    fetch(`${WIDGETS_URL}`).then(response => response.json())


const findWidgetById = (widgetId) =>
    fetch(`${WIDGETS_URL}/${widgetId}`).then(response => response.json())


const deleteWidget = (wid) => {
    console.log(wid)
    return fetch(`${WIDGETS_URL}/${wid}`, {
        method: "DELETE",
    }).then(response => response.json())
}


const updateWidget = (wid, widget) =>
    fetch(`${WIDGETS_URL}/${wid}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(widget)
    }).then(response => response.json())



export default {
    createWidgetForTopic, deleteWidget, updateWidget,
    findAllWidgets, findWidgetById, findWidgetsForTopic
}