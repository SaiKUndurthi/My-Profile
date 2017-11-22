import React from 'react';

function Experience(props){
    return(
      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">{props.title} <a href={props.url} target="_blank">{props.link}
          </a></h3>
          <div className="subheading mb-3">{props.companyName}</div>
          <p>{props.description}</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">{props.time}</span>
        </div>
      </div>
    )
}

export default Experience;
