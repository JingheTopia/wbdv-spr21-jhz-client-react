import CourseManager from "./components/course-manager/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz"

import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import quizReducer from "./reducers/quiz-reducer";

const reducer = combineReducers({quizReducer: quizReducer})

const store = createStore(reducer)

function App() {
  return (
      <BrowserRouter>
      <Provider store={store}>
        <div className="container-fluid">
            <Route path="/" exact={true}  component={Home}/>
            <Route path="/courses" component={CourseManager}/>
            {/*<Route path="/editor" exact={true} render={(props) => <CourseEditor {...props}/>}/>*/}

            <Route path="/courses/:courseId/quizzes" exact={true}>
                <QuizzesList/>
            </Route>

            <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                <Quiz/>
            </Route>
        </div>
      </Provider>
      </BrowserRouter>
  );
}

export default App;
