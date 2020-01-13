import React from 'react'
import {useSpring, animated} from 'react-spring'

const Skills = (props) => {

  const fade = useSpring({
    from: {opacity : 0}, opacity: 1
  })

    return (
        <animated.div style={fade}>
              <div className="content">
                <p className="describe">Javascript</p>
                <p>ES6 React React-Native Redux</p>
                <p>Flow-type, TypeScript</p>
                <p>Jest, Mocha, Jasmine</p>
                <p>Restful APIs</p>
                <h6>** InProgress Angular & GraphQL</h6>
              </div>
              <div className="content">
                <p className="describe">CSS</p>
                <p>Styled-Components, Pure CSS, SASS, SCSS, LESS</p>
                <p>Bulma, BootStrap, Material</p>
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
                <p>Visual studio code Visual studios 2019 git</p>
                <p>xCode, Android Studio, Microsoft DevOPS (VSTS)</p>
                <p>Adobe XD, Sketch</p>
              </div>
        </animated.div>
    )
} 

export default Skills