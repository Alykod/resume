import React, {useState} from "react";

const Resume = () => {

  const [category, SetCategory] = useState({
    skills: false, 
    experience: false, 
    education: false
  });

  const defaultSelection = category;

  const handleClick = type => {
    let updatedCategory = defaultSelection;
    updatedCategory[type] = true;
    SetCategory(updatedCategory);
  };

  return (
    <>
      <p className="describe">Resume</p>
      <div className="listResume">
        <button className="skills" onClick={() => handleClick("skills")}>
          Skills
        </button>
        <button
          className="experience"
          onClick={() => handleClick("experience")}>
          Experience
        </button>
        <button
          className="education"
          onClick={() => handleClick("education")}>
          Education
        </button>
      </div>
    </>
  );
};

export default Resume;
