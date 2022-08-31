import {
  Center,
  Container,
  Group,
  MediaQuery,
  Text,
} from "@mantine/core";
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <Container mx={"xl"} mt={50}>
      <Center>
        <MediaQuery smallerThan={"sm"} styles={{ fontSize: "35px" }}>
          <Text
            weight={700}
            size="50px"
            sx={(theme) => ({
              color:
                theme.colorScheme === "dark" ? "#CDCDFF" : theme.colors.dark[5],
            })}
          >
            <Group>
              Hi, I am{" "}
              <Text
                sx={(theme) => ({
                  color: theme.colorScheme === "dark" ? "#90A1D5" : "#2979B4",
                })}
              >
                Ali Rabah
              </Text>
            </Group>
          </Text>
        </MediaQuery>
      </Center>
      <Center>
        <MediaQuery smallerThan={"sm"} styles={{ fontSize: "20px" }}>
          <Text
            mt={"10px"}
            weight={700}
            size="30px"
            sx={(theme) => ({
              color:
                theme.colorScheme === "dark" ? "#CDCDFF" : theme.colors.dark[5],
            })}
          >
            Full Stack Web Developer.
          </Text>
        </MediaQuery>
      </Center>
      <Center>
        <MediaQuery
          className="content-div"
          smallerThan={"sm"}
          styles={{ width: "300px" }}
        >
          <Text
            sx={(theme) => ({
              color:
                theme.colorScheme === "dark" ? "#90A1D5" : theme.colors.dark[1],
                width:'400px'
            })}
          >
            Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta
            facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum
            delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis!
            Maiores minima consectetur.
          </Text>
        </MediaQuery>
      </Center>
    </Container>
  );
};

export default Home;
