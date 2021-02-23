import React from 'react'
import {Link} from "react-router-dom";
import './course-editor-style.css';


const CourseEditor = ({history}) =>
  <div>
     <body>
      <div className="home-container">
          <div className="row">
              <div className="container-fluid">
                  <nav className="navbar navbar-extend-lg navbar-dark bg-secondary" >
                      <div className="col-md-1">
                          <a className="nav-link bg-secondary nav-back" >
                              <i onClick={() => history.goBack()}
                                 className="fas fa-times fa-2x"/>
                          </a>
                      </div>
                      <div className="col-md-2" style={{textAlign: "left"}}>
                          <i className="navbar-brand">
                              CS5600 WebDev
                          </i>
                      </div>

                      <ul className="nav nav-pills nav-fill col-md-7">
                          <li className="nav-item">
                              <a className="nav-link btn btn-block bg-secondary active" href="#">Build</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link bg-secondary " href="#">Pages</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link bg-secondary " href="#">Theme</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link bg-secondary " href="#">Store</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link bg-secondary " href="#">Apps</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link bg-secondary " href="#">Settings</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link bg-secondary " href="#">
                                  <i className="fa fa-plus"/>
                              </a>
                          </li>
                      </ul>
                        <div>
                            <a className="nav-link bg-secondary nav-back col-md-2" >
                                <Link to="/courses/table">
                                    <i className="fas fa-2x fa-list"
                                       style = {{color :"white"}}/>
                                </Link>
                            </a>
                        </div>

                  </nav>
              </div>
          </div>

          <div className="row">
              <div className="col-4">
                  <nav className="d-done d-md-block bg-dark sidenav">
                      <div className="sidebar-sticky">
                          <ul className="nav">
                              <div className="container">
                                  <label className="row"></label>
                                  <li className="sidenav-item ">
                                      <button type="button"
                                              className="btn btn-secondary active btn-md col-md-12 navbtn">
                                          <div className="container">
                                              <div className="row">
                                                  Module 1 - JQuery
                                                  <div className="col">
                                                      <i className="pull-right fas fa-times"></i>
                                                  </div>
                                              </div>
                                          </div>
                                      </button>
                                  </li>
                                  <label className="row"></label>
                                  <li className="sidenav-item">
                                      <button type="button" className="btn btn-secondary btn-md col-md-12 navbtn">
                                          <div className="container">
                                              <div className="row">
                                                  Module 2 - React
                                                  <div className="col">
                                                      <i className="pull-right fas fa-times"></i>
                                                  </div>
                                              </div>
                                          </div>
                                      </button>
                                  </li>
                                  <label className="row"></label>
                                  <li className="sidenav-item">
                                      <button type="button" className="btn btn-secondary btn-md col-md-12 navbtn">
                                          <div className="container">
                                              <div className="row">
                                                  Module 3 - Redux
                                                  <div className="col">
                                                      <i className="pull-right fas fa-times"></i>
                                                  </div>
                                              </div>
                                          </div>
                                      </button>
                                  </li>
                                  <label className="row"></label>
                                  <li className="sidenav-item">
                                      <button type="button" className="btn btn-secondary btn-md col-md-12 navbtn">
                                          <div className="container">
                                              <div className="row">
                                                  Module 4 - Native
                                                  <div className="col">
                                                      <i className="pull-right fas fa-times"></i>
                                                  </div>
                                              </div>
                                          </div>
                                      </button>
                                  </li>
                                  <label className="row"></label>
                                  <li className="sidenav-item">
                                      <button type="button" className="btn btn-secondary btn-md col-md-12 navbtn">
                                          <div className="container">
                                              <div className="row">
                                                  Module 5 - Angular
                                                  <div className="col">
                                                      <i className="pull-right fas fa-times"></i>
                                                  </div>
                                              </div>
                                          </div>
                                      </button>
                                  </li>
                                  <label className="row"></label>
                                  <li className="sidenav-item">
                                      <button type="button" className="btn btn-secondary btn-md col-md-12 navbtn">
                                          <div className="container">
                                              <div className="row">
                                                  Module 6 - Node
                                                  <div className="col">
                                                      <i className="pull-right fas fa-times"></i>
                                                  </div>
                                              </div>
                                          </div>
                                      </button>
                                  </li>
                                  <label className="row"></label>
                                  <li className="sidenav-item">
                                      <button type="button" className="btn btn-secondary btn-md col-md-12 navbtn">
                                          <div className="container">
                                              <div className="row">
                                                  Module 7 - Mongo
                                                  <div className="col">
                                                      <i className="pull-right fas fa-times"></i>
                                                  </div>
                                              </div>
                                          </div>
                                      </button>
                                  </li>
                                  <label className="row"></label>
                                  <label className="row"></label>
                                  <i className="pull-right fas fa-plus "
                                     style={{color: "#FFFFFF"}}></i>
                              </div>
                          </ul>
                      </div>
                  </nav>
              </div>
              <div className="col-8">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col">
                              <label className="row"></label>
                              <button type="button" className="btn btn-secondary topic-btn">Topic 1</button>
                              <button type="button" className="btn btn-secondary topic-btn">Topic 2</button>
                              <button type="button" className="btn btn-secondary topic-btn">Topic 3</button>
                              <button type="button" className="btn btn-secondary topic-btn">Topic 4</button>
                              <button type="button" className="btn btn-secondary topic-btn">
                                  <a className="topic-link" style={{color: "#FFFFFF"}} href="#">
                                      <i className="fa fa-plus"></i>
                                  </a>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </body>
  </div>

export default CourseEditor
