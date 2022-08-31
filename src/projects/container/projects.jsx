import { Container, Title, Center } from "@mantine/core";
import React from "react";
import ProjectsList from "../components/ProjectsList";
import "./projects.css";
const Projects = () => {
  const PROJECTS = [
    {
      id: "p1",
      title: "Project 1",
      describe:
        "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
      Baged: ["SASS", "TypeScript", "React"],
    },
    {
      id: "p2",
      title: "Project 2",
      describe:
        "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
      Baged: ["SASS", "TypeScript", "React"],
    },
    {
      id: "p3",
      title: "Project 3",
      describe:
        "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
      Baged: ["SASS", "TypeScript", "React"],
    },
    {
      id: "p4",
      title: "Project 4",
      describe:
        "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
      Baged: ["RestFull", "Django", "React"],
    },
  ];

  return (
    <div id="Projects">
      <Center>
        <Title
          sx={(theme) => ({
            color:
              theme.colorScheme === "dark" ? "#CDCDFF" : theme.colors.dark[9],
          })}
        >
          PROJECTS
        </Title>
      </Center>
      <ProjectsList projects={PROJECTS} />
    </div>
  );
};

export default Projects;
