import React, {useState} from 'react';
import {Link} from "react-router-dom";

const CourseCard = ({course, updateCourse, deleteCourse}) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }

        console.log(newTitle)
        updateCourse(newCourse)
    }

  return(
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div className="card">
          <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top"
               alt="..."/>
          <div className="card-body">

              {
                  !editing &&
                  <Link to="/editor" className="card-title">{course.title}</Link>
              }
            {
              editing &&
              <input
                  onChange={(event)=> setNewTitle(event.target.value)}
                  value={newTitle}
                  className="form-control"/>
            }

            {/*<h5 className="card-title">{course.title}</h5>*/}
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's
              content.</p>
            <img src={``}/>
            <Link to="/editor" className="btn btn-primary">
              {course.title}
            </Link>


            <div className="card-footer">
              <div className="float-right">
                {!editing && <i onClick={() => setEditing(true)}
                    className="fas fa-edit"/>}
                {editing && <i onClick={() => {
                    deleteCourse(course)
                    setEditing(false)
                }
                } className="fas fa-trash"/>}
                {editing && <i onClick={() => saveTitle()}
                       className="fas fa-check" />}
              </div>
            </div>
            {/*<i className="fas fa-trash"></i>*/}
          </div>
        </div>
      </div>)
    }
export default CourseCard
