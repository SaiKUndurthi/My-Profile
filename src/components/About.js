import React from 'react';

function About(){
    return(
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">Hi, I'm
            <span className="text-primary"> Sai Krishna Undurthi</span>
          </h1>
          <div className="subheading mb-5">810 Gonzalez Drive · San Francisco, CA 94132 · (415) 316-3487 ·
            <a href="mailto:sai.undurthi@gmail.com" title="Email me">sai.undurthi@gmail.com</a>
          </div>
          <p className="mb-5">I am a Computer Science Graduate Student(2017) and Software Developer. Experienced in Object oriented methodologies. Well versed in Android, Java, JavaScript, NodeJS and React JS.
          Used SQL and NoSQL Databases. Exposure to working in agile work environment. Passionate about learning and using new technologies. Currently looking for Internships/Full-Time Opportunities as a Software Developer. </p>
          <ul className="list-inline list-social-icons mb-0">
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/saiundurthi/" target="_blank" rel="noopener noreferrer" title="Linkedin">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/SaiKUndurthi/" target="_blank" rel="noopener noreferrer" title="GitHub">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://drive.google.com/file/d/1pvP5fL5kdiJ6fn8NclePQmkD6hHLgknr/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Resume PDF">
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
