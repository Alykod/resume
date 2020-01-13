import React from "react";
import {useSpring, animated} from 'react-spring'

const Education = () => {
  const fade = useSpring({
    from: {opacity : 0}, opacity: 1
  })
  
  return (
    <animated.div style={fade}>
      <div className="content">
        <p className="describe">University Of Central Florida </p>
        <p className="describe">Bachelors in IT</p>
        <p>
          Graduated from the University of Central Florida in December 2017{" "}
        </p>
        <p className="describe">Florida A & M University</p>
        <p>Attended Florida A & M for Pre-Pharmacy</p>
      </div>
    </animated.div>
  );
};

export default Education;
