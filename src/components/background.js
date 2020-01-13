import React, { useState } from "react";
import "../App.css";
import ResumeHeader from './Resume/resumeHeader';
import WorkExperience from './Resume/workExperience';
import Education from './Resume/education';
import Skills from './Resume/skills';
import _ from 'lodash'
import { useSpring, animated } from 'react-spring';

const Background =  (props) => {

  const [category, SetCategory] = useState({
    skills: false, 
    experience: false, 
    education: false
  });
  const fade = useSpring({
    from: {opacity : 0}, opacity: 1
  })
  const handleClick = type => {
    let updatedCategory = _.cloneDeep(category);
    updatedCategory.skills = false;
    updatedCategory.experience = false;
    updatedCategory.education = false;
    updatedCategory[type] = true;
    console.log(updatedCategory)
    SetCategory(updatedCategory);
  };


    return (
      <>
      <ResumeHeader handleClick={handleClick} />
      <div className="filler">
      {category.skills && <Skills/>}
      {category.experience && <WorkExperience/>}
      {category.education && <Education />}
      </div>
      </>
      
    )
};

export default Background;