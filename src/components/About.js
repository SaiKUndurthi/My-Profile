import React from 'react';

function About(){
    return(
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">Sai Krishna
            <span className="text-primary">Undurthi</span>
          </h1>
          <div className="subheading mb-5">810 Gonzalez Drive · San Francisco, CA 94132 · (415) 316-3487 ·
            <a href="mailto:sai.undurthi@gmail.com" title="Email me">sai.undurthi@gmail.com</a>
          </div>
          <p className="mb-5">Computer Science Graduate with leadership training and experience with academic training at San Francisco State University. Proven skills in Software Engineering, Android Development and Full-Stack Web Development. Experienced in Object oriented methodologies. Well versed in Android mobile technologies with experience using Android Development Tools.
          Experienced in Java, React JS, NodeJS, HTML, CSS, JavaScript. SQL and NoSQL Databases. Exposure to working in agile work environment. Passionate about learning and using new technologies. Strong analytical, evaluation and interpretation skills. </p>
          <ul className="list-inline list-social-icons mb-0">
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/saiundurthi/" target="_blank" title="Linkedin">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/SaiKUndurthi/" target="_blank" title="GitHub">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://drive.google.com/file/d/1JhU4kTb1gMSzU91WN7vwXVIjBo5d-zuT/view?usp=sharing" target="_blank" title="Resume PDF">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-file-pdf-o fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="mailto:sai.undurthi@gmail.com" title="Email me">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }

export default About;
