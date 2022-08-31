import React from "react";
import { Button, Center, Title } from "@mantine/core";
const Contact = () => {
  return (
    <div id="Contact" style={{margin:'70px', padding:'20px'}}>
      <Center>
        <Title
          sx={(theme) => ({
            color:
              theme.colorScheme === "dark" ? "#CDCDFF" : theme.colors.dark[9],
          })}
        >
          CONTACT
        </Title>
      </Center>
      <Center>
        <Button variant="subtle" m={'xl'}>Email Me</Button>
      </Center>
    </div>
  );
};

export default Contact;
