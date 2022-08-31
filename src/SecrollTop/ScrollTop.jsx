import React, { PureComponent, useEffect, useState } from "react";

import { IconArrowUp } from "@tabler/icons";
import { ActionIcon, useMantineTheme } from "@mantine/core";
import "./ScrollTop.css";
import { useWindowScroll } from "@mantine/hooks";
const ScrollTop = () => {
  const theme = useMantineTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [scroll, scrollTo] = useWindowScroll();

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <ActionIcon onClick={() => scrollTo({ y: 0 })}>
        <IconArrowUp
          color={theme.colorScheme === "dark" ? "#BDBCDC" : "#545554"}
          size={40}
          stroke={2}
          strokeLinejoin="miter"
        />
      </ActionIcon>
      
    </div>
  ) : null;
};

export default ScrollTop;
