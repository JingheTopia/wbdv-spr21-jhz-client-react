const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/001051630/lessons";
const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/001051630/topics";

const createTopic = (lessonId, topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(topic)
    }).then(response => response.json())


const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`).then(response => response.json())


const findTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`).then(response => response.json())


const updateTopic = (topicId, topic) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(topic)
    }).then(response => response.json())


const deleteTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`, {method: 'DELETE'}).then(response => response.json())


export default {
    createTopic, findTopicsForLesson, findTopic, updateTopic, deleteTopic
}