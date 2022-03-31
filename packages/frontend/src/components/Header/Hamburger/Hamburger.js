import PropTypes from 'prop-types';
import { StyledBurger, StyledLine } from "./Hamburger.styles";

const Hamburger = ({ onShowNav, menuActive }) => {
  return (
    <StyledBurger onClick={onShowNav} active={menuActive}>
      <StyledLine />
      <StyledLine />
      {menuActive ? null : <StyledLine />}
    </StyledBurger>
  );
};

Hamburger.propTypes = {
  onShowNav: PropTypes.func,
  menuActive: PropTypes.bool
};

export default Hamburger;
