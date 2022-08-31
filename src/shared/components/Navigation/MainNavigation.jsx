import React from "react";
import MainHeader from "./MainHeader";
import { MediaQuery, Burger, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";
import LightDarkModeIcon from "./Light&DarkMode";
import SideDrawer from "./SideDrawer";

const MainNavigation = ({ colorHandeler }) => {
  const [open, setOpen] = useDisclosure(false);
  return (
    <React.Fragment>
      <SideDrawer opened={open} onClose={setOpen}>
        <div className="SideDrawer__navlinks">
          <NavLinks />
        </div>
      </SideDrawer>
      <MainHeader>
        <Group>
          <Text
            size={"xl"}
            weight={700}
            sx={(theme) => ({
              color: theme.colorScheme === "dark" ? "#91A0D8" : "#2979B4",
            })}
          >
            AR.
          </Text>
          <Group className="right-section">
            <MediaQuery smallerThan={"sm"} styles={{ display: "none" }}>
              <nav className="Nav">
                <NavLinks />
              </nav>
            </MediaQuery>
            <LightDarkModeIcon colorHandeler={colorHandeler} />
            <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
              <Burger
                opened={open}
                onClick={setOpen.toggle}
                sx={(theme) => ({
                  color:
                    theme.colorScheme === "dark"
                      ? "#00000"
                      : theme.colors.dark[9],
                })}
              />
            </MediaQuery>
          </Group>
        </Group>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
