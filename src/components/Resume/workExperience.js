import React from 'react'
import {useSpring, animated} from 'react-spring'


const Work = () => {

  const fade = useSpring({
    from: {opacity : 0}, opacity: 1
  })

    return (
        <animated.div style={fade}>
        <div className="content">
              <p className="describe">Developer</p>
              <p className="describe">React Native</p>
              <p>Worked On an Agile Team building a React Native Application (iOS, android and Windows UWP)<br/>
                 Was tasked with  deploying builds and setting up the continuous integration and creating final
                 production builds with coordination with the off-shore team
                 Build reusable components<br/>
                 Unit testing using Jest<br/>
                 Detailed documentation for processes<br/>
              </p>
              <p className="describe">React JS/PWA</p>
              <p>Worked On an Agile Team building a ReactJS Progressive Web Application<br/>
                 Intermediate knowledge of WorkBox and vanilla Service workers <br/>
                 production builds with coordination with the off-shore team<br/>
                 Build reusable components<br/>
                 Unit testing using Jest<br/>
                 Detailed documentation for processes<br/>
              </p>
              <p className="describe">React JS/PWA X 2</p>
              <p>Build a caching strategy using indexed Db, and a background sync strategy for iOS. <br/>
                 Building reusable components and using Kendo UI, React Bootstrap and Redux/Redux.<br/>
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
        </animated.div>
    )
}

export default Work