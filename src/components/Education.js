import React from 'react';

function Education(props){
  return(
    <div className="resume-item d-flex flex-column flex-md-row mb-5">
      <div className="resume-content mr-auto">
        <h3 className="mb-0">{props.university}</h3>
        <div className="subheading mb-3">{props.degree}</div>
        <div>{props.major}</div>
        <p>GPA: {props.gpa}</p>
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{props.time}</span>
      </div>
    </div>
  )
}

export default Education;
