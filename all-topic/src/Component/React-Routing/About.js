import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <div className="container-fluid">

        <div className="row">

          <div className="col-2 d-flex justify-content-center align-items-center flex-column">

            <Link to={"/about"}>About me</Link>

            <Link to={"/about/tech-skill"}>Technical Skill</Link>

            <Link to={"/about/course"}>Course</Link>

          </div>

          <div className="col-10">

            <Outlet />

          </div>
        </div>
      </div>
    </div>
  )
}

export default About