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
            <i className="devicons devicons-jquery"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-android"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-github"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-bootstrap"></i>
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

        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check"></i>
            Mobile-First, Responsive Design</li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Cross Browser Testing &amp; Debugging</li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Agile Development &amp; Scrum</li>
        </ul>
      </div>
    </section>
  )
}
export default Skills;
