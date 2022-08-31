import React, { PureComponent } from "react";
import {Center, Title} from '@mantine/core'
import SkillList from "../components/SkillList";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Django",
    "React",
    "Redux",
    "ASP.Net",
    "Mantain UI",
    "Git",
    "CI/CD",
    "Flask",
    "REST-API",
    
  ];
  return (
    <div id="Skills" >
      <Center>
        <Title
          sx={(theme) => ({
            color:
              theme.colorScheme === "dark" ? "#CDCDFF" : theme.colors.dark[9],
          })}
        >
          SKILLS
        </Title>
      </Center>
      <SkillList items={skills}/>
    </div>
  );
};

export default Skills;
