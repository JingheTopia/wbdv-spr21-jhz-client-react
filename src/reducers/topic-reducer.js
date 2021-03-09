const initialState = {
    topics: []
}

const topicReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            return {
                ...prevState,
                topics: [
                    ...prevState.topics,
                    action.topic
                ]
            }
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...prevState,
                topics: action.topics
            }
        case "FIND_TOPIC":
            return {
                ...prevState,
                topic: action.topic
            }
        case "UPDATE_TOPIC":
            return {
                ...prevState,
                topics: prevState.topics.map(topic => {
                    return topic._id === action.updatedTopic._id ? action.updatedTopic : topic;
                })
            }
        case "DELETE_TOPIC":
            return {
                ...prevState,
                topics: prevState.topics.filter(topic => topic._id !== action.topicToDelete._id)
            }

        case "CLEAN_TOPICS":
            return {
                ...prevState,
                topics: []
            }

        default:
            return prevState
    }
}

export default topicReducer