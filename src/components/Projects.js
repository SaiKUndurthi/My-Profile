import React from 'react';
import Experience from './Experience';
function Projects(){
    return(
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
        <div className="my-auto">
          <h2 className="mb-5">Projects
          <i className="list-inline-item list-social-icons mb-0">
            <a href="https://github.com/SaiKUndurthi/" target="_blank" title="GitHub">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </i>
          </h2>
          <Experience title="Best Practices for Android Apps (Android Open Source Project)" description="Invented a tool which looks out for patterns that violate Android best practices. The tool logs out information about the loophole, helping the end user improve the performance of their mobile battery. Tested Twitter, BBM and YouTube android applications." />
          <Experience title="MyProfile / Portfolio Website (ReactJS, AWS)" description="Built a mobile friendly website using React JS, that runs on node server. It features my work-timeline, projects & interests. Currently hosted on Firebase but, will be deployed on AWS utilizing features like VPC, Load balancers and Auto-scaling by 25th November 2017." />
          <Experience title="ChatHub (Android Application)" description="Developed a multi-user chat Android application with features such as texting, authentication, photos, camera and cloud persistence. Performed UI/ Unit Testing using Espresso. This application makes use of Java, Android and Firebase API’s." />
          <Experience title="ParkIt (Android Application)" description="Created an Android application that shows the parking locations available in the San Francisco downtown area. This application makes use of Java, Google Maps and SFpark API’s. Implemented warning timer." />
          <Experience title="AlpacaTable (Software Engineering project - 7-member team)" description="Constructed a table reservation website hosted on AWS. Implemented table booking algorithm, database for host, web admin and signup/login using Object Oriented PHP programming, JavaScript, phpMyAdmin, SVN and Google API." />
          <Experience title="OpenMRS Usage Statistics Module (4-member team)" description="Revamped the Open Source Usage Statistics module in OpenMRS. Specifically used HTML, CSS, Bootstrap, JavaScript and a little of jQuery to improve the functionality of UI in the module." />
          <Experience title="Saving the City (Ruby project- 2-member team)" url="https://savingthecity.herokuapp.com/" link="(https://savingthecity.herokuapp.com/)"description="Built a multiplayer 2-D shooting game using Ruby on Rails platform, MVC framework and RESTful API’s. Worked on the Signup/Login, Facebook login using omiauth gem and used pusher gem to maintain the state of two players." />
          <Experience title="Wingman (Java project)" description="Engineered a 2D sprite-based Java multiplayer dogfight plane game. Maintained a hierarchy of classes such as Enemy, Plane, Player etc. using the concept of Java Inheritance." />
          <Experience title="TOS (Operating Systems project)" description="Designed TOS, a pre-emptive multitasking operating system for Intel x86 based PCs. Validated the software using a model train via the serial line interface." />

        </div>
      </section>
    )
  }
export default Projects;
