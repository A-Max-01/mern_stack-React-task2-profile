import React, { PureComponent } from "react";
import { Button } from "@mantine/core";
import './SkillsList.css';
const SkillList = ({ items }) => {
  return (
    <ul className="skills__list">
      {items.map((skill) => (
        <Button variant='light' className="skills__list-item" key={skill}>{skill}</Button>
      ))}
    </ul>
  );
};

export default SkillList;
