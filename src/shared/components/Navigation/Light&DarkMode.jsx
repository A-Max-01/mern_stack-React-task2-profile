import React from "react";

import { ActionIcon } from "@mantine/core";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import { IconSun, IconMoonStars } from "@tabler/icons";

const LightDarkModeIcon = ({ colorHandeler }) => {
  const [theme, setTheme] = useDisclosure(false);
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "color-scheme",
    defaultValue: "light",
  });

  const toggleColorScheme = () => {
    setColorScheme((current) => (current === "dark" ? "light" : "dark"));
    setTheme.toggle();
    colorHandeler(colorScheme);
  };

  return (
    <ActionIcon
      variant="outline"
      color={theme ? "yellow" : "blue"}
      onClick={toggleColorScheme}
      title="Toggle color scheme"
    >
      {theme ? <IconSun size={18} /> : <IconMoonStars size={18} />}
    </ActionIcon>
  );
};

export default LightDarkModeIcon;
