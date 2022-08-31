import { Drawer, useMantineTheme } from "@mantine/core";
import React from "react";

const SideDrawer = (props) => {
  const theme = useMantineTheme();
  return (
    <Drawer
      overlayColor={
        theme.colorScheme === "dark"
          ? '#22293E'
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={props.opened}
      onClose={() => props.onClose.close()}
      padding={"xl"}
      size={"lg"}
      title="Ali Rabah"
      onClick={() => props.onClose.close()}
    >
      {props.children}
    </Drawer>
  );
};

export default SideDrawer;
