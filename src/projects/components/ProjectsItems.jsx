import { Card, Grid, Center, Text, Badge } from "@mantine/core";
import React from "react";
import './projectItem.css';

const ProjectItems = ({ items }) => {
  return (
    <React.Fragment>
      {items.map((item) => {
        return (
          <Grid.Col className="project" key={item.id} xs={6}  md={4} my={'md'} justify="space-between">
            <Card shadow="xl" p="lg" radius="lg" withBorder>
              <Center>
                <Text
                  weight={800}
                  size={20}
                  sx={(theme) => ({
                    color:
                      theme.colorScheme === "dark"
                        ? "#CDCDFF"
                        : theme.colors.dark[9],
                  })}
                >
                  {item.title}
                </Text>
              </Center>
              <Text
                m={"md"}
                sx={(theme) => ({
                  color:
                    theme.colorScheme === "dark"
                      ? "#90A1D5"
                      : theme.colors.dark[1],
                  textAlign: "center",
                })}
              >
                {item.describe}
              </Text>
              <Center my={"xl"}>
                {item.Baged.map((b) => {
                  return (
                    <Badge key={b} p="md" mx={2}>
                      {b}
                    </Badge>
                  );
                })}
              </Center>
            </Card>
          </Grid.Col>
        );
      })}
    </React.Fragment>
  );
};

export default ProjectItems;
