import React, { Component } from "react";
import "../App.css";

export default class background extends Component {
  state = {
    handled: {
      skills: false,
      experience: false,
      education: false
    }
  };
  handleClick = type => {
    let handle = this.state.handled
    handle.skills = false;
    handle.experience = false;
    handle.education = false;
    handle[type] = true;
    this.setState({
      handled: handle
    });
  };

  render() {
    return (
      <div>
      <a name="background"></a>
        <p className="describe">Resume</p>
        <div className="listResume">
          <button className="skills" onClick={() => this.handleClick("skills")}>
            Skills
          </button>
          <button
            className="experience"
            onClick={() => this.handleClick("experience")}>
            Experience
          </button>
          <button
            className="education"
            onClick={() => this.handleClick("education")}>
            Education
          </button>
        </div>
        {this.state.handled.skills ? (
            <a className='borderMagic'>
          <div className="filler">
            <div className="content">
              <p className="describe">Javascript</p>
              <p>ES6 React React-Native Redux</p>
              <p>Flow-Type Detox Jest Mocha</p>
              <p>Restful APIs</p>
            </div>
            <div className="content">
              <p className="describe">CSS</p>
              <p>Styled-Components Pure CSS</p>
            </div>
            <div className="content">
              <p className="describe">Backend</p>
              <p>Express JS and working knowledge of C#</p>
            </div>
            <div className="content">
              <p className="describe">Services</p>
              <p>Progressive Web Apps Workbox External APIS</p>
            </div>
            <div className="content">
              <p className="describe">Tool-sets</p>
              <p>Visual studio code Visual studios 2017 git</p>
              <p>xCode Android Studios Microsoft DevOPS (VSTS)</p>
            </div>
          </div>
          </a>
        ) : null}
        {this.state.handled.experience ? (
          <div className="filler">
            <div className="content">
              <p className="describe">Jr Developer</p>
              <p className="describe">React Native</p>
              <p>Worked On an Agile Team building a React Native Application (iOS, android and Windows UWP)
                 Was tasked with  deploying builds and setting up the continous integration and creating final
                 production builds with coordination with the off-shore team
                 Build reusable components
                 Unit testing using Jest
                 Detailed documentation for processes
              </p>
              <p className="describe">React JS/PWA</p>
              <p>Worked On an Agile Team building a ReactJS Progressive Web Application
                 Intermidate knowledge of WorkBox and vanilla Service workers 
                 production builds with coordination with the off-shore team
                 Build reusable components
                 Unit testing using Jest
                 Detailed documentation for processes
              </p>
            </div>
            <div className="content">
              <p className="describe">Backend</p>
              <p>Express JS and working knowledge of C#</p>
            </div>
            <div className="content">
              <p className="describe">Services</p>
              <p>Progressive Web Apps Workbox External APIS</p>
            </div>
            <div className="content">
              <p className="describe">Tool-sets</p>
              <p>Visual studio code Visual studios 2017 git</p>
              <p>xCode Android Studios Microsoft DevOPS (VSTS)</p>
            </div>
          </div>
        ) : null}
        {this.state.handled.education ? (
          <div className="filler">
            <div className="content">
              <p className="describe">University Of Central Florida </p>
              <p className="describe">Bachelors in IT</p>
              <p>Graduated from the University of Central Florida in December 2017  </p>
              <p className="describe">Florida A & M University</p>
              <p>Attended Florida A & M for Pre-Pharmacy</p>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
