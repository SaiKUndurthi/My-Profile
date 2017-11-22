import React, { Component } from 'react';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Interest from './components/Interest';
import logo from './logo.svg';
class App extends Component {
  render() {
    return (
              <div className="container-fluid p-0">
                <About />

                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                  <div className="my-auto">
                    <h2 className="mb-5">Experience</h2>
                    <Experience title="Software Engineering Intern" companyName="Home Slice" description="Built a new user-facing features website using React JS for HomeSlice customers. Used GraphQL to build API’s.
Responsible for building reusable React components and Redux forms. Also, translated wireframes into high quality code." time="June 2017 to October 2017" />
                    <Experience title="Software Engineering Intern" companyName="Technology for Impact - Refugee Transitions" description="Developed a Salesforce web portal for volunteers of Refugee Transitions using Visualforce and Salesforce Apex.
This project improved report completion rate by 25% and saved approximately $90,000 per year." time="May 2015 to July 2015" />
                  </div>
                </section>

                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                  <div className="my-auto">
                    <h2 className="mb-5">Education</h2>
                    <Education university="San Francisco State University" degree="Master of Science" major="Computer Science" gpa="3.4" time="August 2014 to November 2017" />
                    <Education university="Jawaharlal Nehru Technological University" degree="Bachelor of Technology" major="Electronics and Communication Engineering" gpa="3.6" time="May 2010 to May 2014" />
                  </div>
                </section>

                <Skills />
                <Interest />
                <Projects />
              </div>
    );
  }
}

export default App;
