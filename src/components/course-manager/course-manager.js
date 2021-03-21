import React, {useState} from 'react'
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import CourseEditor from "../course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../../services/course-service";
import './course-manager-style.css';


class CourseManager extends React.Component {
  state = {
    courses: [],
    initialCourse : {
      title: "New Course",
      owner: "me",
      lastModified: new Date().toLocaleDateString()
    },
    title : "New Course",

    layout : {
      table : "table",
      gird: "grid"
    }
  }


  updateCourse = (course) => {
    console.log(course)
    courseService.updateCourse(course._id, course)
        .then(status => this.setState((prevState) => ({
          ...prevState,
          courses: prevState.courses.map(
              (c) => c._id === course._id ? course : c)
        })))
  }

  componentDidMount = () =>
    findAllCourses()
        .then(courses => this.setState({courses}))

  addCourse = () => {
    let newCourse = {...this.state.initialCourse}
    newCourse["title"] = this.state.title;
    courseService.createCourse(newCourse)
        .then(course => {this.setState(
            (prevState) => ({
              ...prevState,
              courses: [
                  ...prevState.courses,
                  course
              ]
            }))
        })
      this.setState({title: 'New Course'});
      document.getElementById('wbdv-form').reset()
  }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
        .then(status => {
            this.setState((prevState) => ({
              ...prevState,
              courses: prevState.courses.filter
                (course => course !== courseToDelete)
          }))
        })
  }


  render() {
    return(
        <div>
        <Route path={["/courses/table", "/courses/grid"]} exact={true}>
      <div>
          <div className="home-container">
              <nav className="navbar navbar-expand-lg navbar-dark sticky-top nav-top">
                  <div className="icon-container">
                      <Link to="/">
                          <i className="nav-icon fas fa-2x fa-bars"/>
                      </Link>
                  </div>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                      <label className="navbar-brand h1" >Course Manager</label>
                  </div>
                  <form className="form-inline my-2 my-lg-0">
                      <div className="form-row align-items-center">
                          <div className="col-auto">
                              <form id={"wbdv-form"}>
                              <input className ="form-control ml-sm-2"
                                     type="search"
                                     placeholder="New Course Title"
                                     aria-label="Search"
                                     onChange={(e) => {
                                       this.state.title = e.target.value
                                     }}
                              />
                              </form>
                          </div>
                          <div className="col-auto">
                              <a className="courseAddition" href="#">
                                  <i className="nav-icon fas fa-plus-circle fa-2x" onClick={this.addCourse}/>
                              </a>
                          </div>

                      </div>
                  </form>
              </nav>
          </div>
        <Route path="/courses/table">
          <CourseTable
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}
              layout = {this.state.layout.table}/>
        </Route>
        <Route path="/courses/grid">
          <CourseGrid
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}
              layout = {this.state.layout.gird}/>
        </Route>

          <div className="float-md-right" style={{marginRight: "5%"}}>
              <i onClick={this.addCourse}
                 className="fas fa-plus-circle fa-3x col-md-auto float-right"
                 style={{color: 'red'}}/>
          </div>
       </div>
    </Route>
      <Route path={[
          "/courses/:layout/edit/:courseId",
          "/courses/:layout/edit/:courseId/modules/:moduleId",
          "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
          "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
          "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"]}
             exact={true}
             render={(props) => <CourseEditor {...props}/>}>
      </Route>
    </div>

    )
  }
}

export default CourseManager
