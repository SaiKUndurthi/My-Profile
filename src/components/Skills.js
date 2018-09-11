import React from 'react';

function Skills(){
  return(
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
      <div className="my-auto">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline list-icons">
          <li className="list-inline-item">
            <i className="devicons devicons-html5"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-css3"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-javascript"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-docker"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-android"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-github"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-java"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-react"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-mysql"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-mongodb"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-npm"></i>
          </li>
        </ul>

        <div className="subheading mb-3"></div>
        <ul className="fa-ul mb-0">
          <li>
            <p>
            <i className="fa-li fa fa-check"></i>
            <b>Technology</b> ---- Android, AWS, Docker, Kubernetes, Firebase, GraphQL, Git, HTML/CSS, Java, Linux, Node.js, React JS, Redux.
            </p>
          </li>
          <li>
            <p>
            <i className="fa-li fa fa-check"></i>
            <b>Coursework</b> ---- Internet App Development, Intro to Databases, Mobile App Development, Software Engineering and Development.
            </p>
          </li>
          <li>
            <p>
            <i className="fa-li fa fa-check"></i>
            <b>Framework</b> ---- Espresso, Mockito, AndroidJUnitRunner, React, Redux.
            </p>
          </li>
          <li>
            <p>
            <i className="fa-li fa fa-check"></i>
            <b>Database</b> ---- MySQL, MongoDB, SQLite, JDBC, Firebase.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default Skills;
