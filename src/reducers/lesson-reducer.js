const initialState = {
  lessons: []
}

const lessonReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "CREATE_LESSON":
      return {
        ...prevState,
        lessons: [
          ...prevState.lessons,
          action.lesson
        ]
      }
    case "FIND_LESSONS_FOR_MODULE":
      return {
        ...prevState,
        lessons: action.lessons
      }
    case "FIND_LESSON":
      return {
        ...prevState,
        lesson: action.lesson
      }
    case "UPDATE_LESSON":
      prevState.lessons.forEach(console.log)

      return {
        ...prevState,
        lessons: prevState.lessons.map(lesson => {
          return lesson._id === action.updatedLesson._id ? action.updatedLesson : lesson;
        })
      }
    case "DELETE_LESSON":
      return {
        ...prevState,
        lessons: prevState.lessons.filter(lesson => lesson._id !== action.lessonToDelete._id)
      }

    case "EMPTY_LESSON":
        return {
          ...prevState,
          lessons: []
        }

    default:
      return prevState
  }
}

export default lessonReducer