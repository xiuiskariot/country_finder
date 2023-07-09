import styled from "styled-components";
import { useState, useEffect } from "react";
import { ContainerS } from "./Container";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeaderS = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;
const WrapperS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const TitleS = styled(Link).attrs({
  to: "/"
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;
const ModeSwitcherS = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  display: flex;
  flex-direction: baseline
`;

export const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <HeaderS>
      <ContainerS>
        <WrapperS>
          <TitleS>Where is the world?</TitleS>
          <ModeSwitcherS onClick={toggleTheme}>
            {theme === "light" ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}
            <span style = {{marginLeft: "0.75rem"}}>{theme}</span>
          </ModeSwitcherS>
        </WrapperS>
      </ContainerS>
    </HeaderS>
  );
};
