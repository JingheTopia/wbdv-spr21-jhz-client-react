const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/001051630/modules";
const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/001051630/lessons";

const createLesson = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(lesson)
    }).then(response => response.json())


const findLessonsForModule = (moduleId) =>
  fetch(`${MODULES_URL}/${moduleId}/lessons`).then(response => response.json())


const findLesson = (lessonId) =>
  fetch(`${LESSONS_URL}/${lessonId}`).then(response => response.json())


const updateLesson = (lessonId, lesson) =>
  fetch(`${LESSONS_URL}/${lessonId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(lesson)
  }).then(response => response.json())


const deleteLesson = (lessonId) =>
  fetch(`${LESSONS_URL}/${lessonId}`, {method: 'DELETE'}).then(response => response.json())


export default {
  createLesson, findLessonsForModule, findLesson, updateLesson, deleteLesson
}