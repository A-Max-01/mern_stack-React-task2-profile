import React from "react";
import { Text } from "@mantine/core";

const NavLinks = () => {
  return (
    <>
      <Text
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark" ? "#90A1D5" : theme.colors.dark[5],
        })}
        component="a"
        href="#Projects"
        weight={500}
      >
        Projects
      </Text>
      <Text
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark" ? "#90A1D5" : theme.colors.dark[5],
        })}
        component="a"
        href="#"
        weight={500}
      >
        Skills
      </Text>
      <Text
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark" ? "#90A1D5" : theme.colors.dark[5],
        })}
        component="a"
        href="#"
        weight={500}
      >
        Contact
      </Text>
    </>
  );
};

export default NavLinks;
