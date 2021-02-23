import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import CourseRow from "./course-row";

const CourseGrid = ({courses, updateCourse, deleteCourse}) =>
  <div>
      <nav className="navbar navbar-expand-lg bg-light sticky-top">
          <div className="container-fluid">
              <div className="col-12 mx-auto table-container">
                  <table className="table">
                      <tr>
                          <th scope="col"
                              className="list-title-col-1 d-none d-md-table-cell"
                              style={{width:"40%"}}>Recent Documents
                          </th>
                          <th scope="col"
                              className=" list-title-col-1 d-none d-md-table-cell">Owned by me
                              <i className="fas fa-angle-down"/>
                          </th>
                          <th scope="col"
                              className=" list-title-col-1 d-none d-xs-table-cell">
                          </th>
                          <th scope="col"
                              className="icon-col"
                              style={{width:"10%"}}>
                              <Link to="/courses/table">
                                  <i className="fas fa-list"
                                     style={{marginRight:"5%", float:"right"}}/>
                              </Link>
                              <a href="#">
                                  <i className="fas fa-sort-alpha-down"
                                     style={{marginRight:"5%",
                                         float:"right"}}/>
                              </a>

                              <a href="#">
                                  <i className="fas fa-folder"
                                     style={{marginRight:"5%",
                                         float:"right"}}/>
                              </a>
                          </th>
                      </tr>
                  </table>
              </div>
          </div>
      </nav>

    {/*<h2>Course Grid {courses.length}</h2>*/}
    <div className="row">
    {
        courses.map((course) =>
            <CourseCard
                key={course._id}
                course={course}
                updateCourse={updateCourse}
                deleteCourse={deleteCourse}
            />
        )
    }
    </div>
  </div>

export default CourseGrid
