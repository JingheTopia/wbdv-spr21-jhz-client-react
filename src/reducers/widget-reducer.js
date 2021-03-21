const initialState = {
    widgets: []
}

const widgetReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                ...prevState,
                widgets: [
                    ...prevState.widgets,
                    action.widget
                ]
            }
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...prevState,
                widgets: action.widgets
            }

        case "FIND_WIDGET":
            return {
                ...prevState,
                widget: action.widget
            }

        case "UPDATE_WIDGET":
            return {
                ...prevState,
                widgets: prevState.widgets.map(widget => {
                    return widget.id === action.updatedWidget.id ? action.updatedWidget : widget;
                })
            }
        case "DELETE_WIDGET":
            return {
                ...prevState,
                widgets: prevState.widgets.filter(widget => widget.id !== action.widgetToDelete.id)
            }

        case "CLEAN_WIDGET":
            return {
                ...prevState,
                widgets: []
            }

        default:
            return prevState
    }
}

export default widgetReducer