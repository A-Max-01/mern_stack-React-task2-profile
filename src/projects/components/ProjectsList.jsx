import { Grid } from "@mantine/core";
import React from "react";
import ProjectItems from "./ProjectsItems";

const ProjectsList = ({ projects }) => {
  return (
    <Grid mt={30}>
      <ProjectItems items={projects}/>
    </Grid>
  );
};

export default ProjectsList;
