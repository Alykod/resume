import React, {useState} from "react";

const ResumeHeader = (props) => {

  // const [category, SetCategory] = useState({
  //   skills: false, 
  //   experience: false, 
  //   education: false
  // });

  // const defaultSelection = category;

  // const handleClick = type => {
  //   // let updatedCategory = defaultSelection;
  //   // updatedCategory[type] = true;
  //   // SetCategory(updatedCategory);
  //   props.handleClick(type);
  // };

  return (
    <>
      <p className="describe">Resume</p>
      <div className="listResume">
        <button className="skills" onClick={() => props.handleClick("skills")}>
          Skills
        </button>
        <button
          className="experience"
          onClick={() => props.handleClick("experience")}>
          Experience
        </button>
        <button
          className="education"
          onClick={() => props.handleClick("education")}>
          Education
        </button>
      </div>
    </>
  );
};

export default ResumeHeader;
