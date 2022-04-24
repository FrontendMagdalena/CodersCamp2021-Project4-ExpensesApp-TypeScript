import { StyledBurger, StyledLine } from "./Hamburger.styles";

interface IProps {
    onShowNav: () => void;
    menuActive: boolean
}

const Hamburger = ({ onShowNav, menuActive }: IProps) => {
  return (
    <StyledBurger onClick={onShowNav} active={menuActive}>
      <StyledLine />
      <StyledLine />
      {menuActive ? null : <StyledLine />}
    </StyledBurger>
  );
};

export default Hamburger;
