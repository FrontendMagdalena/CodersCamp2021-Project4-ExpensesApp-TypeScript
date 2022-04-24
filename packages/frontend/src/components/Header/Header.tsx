import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import icon from '../../assets/Icon.png';
import Hamburger from './Hamburger/Hamburger';
import {
  StyledHeader,
  StyledIcon,
  StyledName,
  StyledLogo,
} from './Header.styles';
import Navigation from './Navigation/Navigation';

const Header = () => {
  const [mobile, setMobile] = useState(() => {
    if (window.innerWidth <= 1280) return true;
    else return false;
  });

  const [active, setActive] = useState<boolean>(false);
  const isLogged = localStorage.getItem('userLogged') === 'true';

  const showNav = () => setActive((active) => !active);
  const location = useLocation();

  useEffect(() => {
    setActive(false);
  }, [location]);

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1280) setMobile(true);
    else setMobile(false);
  });

  return (
    <>
      {isLogged && (
        <StyledHeader>
          <Link to={'/'}>
            <StyledLogo>
              <StyledIcon src={icon} />
              <StyledName>Scrooge</StyledName>
            </StyledLogo>
          </Link>
          {mobile ? (
            <Hamburger onShowNav={showNav} menuActive={active} />
          ) : (
            <Navigation />
          )}
          {active ? <Navigation /> : null}
        </StyledHeader>
      )}
    </>
  );
};

export default Header;
