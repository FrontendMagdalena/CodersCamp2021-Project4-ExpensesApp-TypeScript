import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components/Button/Button';
import {
  StyledHomepage,
  StyledIcon,
  StyledTitle,
  StyledLogo,
  ButtonsGroup,
  StyledHeader,
} from './Homepage.styles';
import calculatorImage from '../../assets/budget-calculator.png';
import icon from '../../assets/Icon.png';

export default function Homepage() {
  const logged = localStorage.getItem('userLogged');
  const navigate = useNavigate();

  useEffect(() => {
    logged === 'true' ? navigate('/main') : navigate('/');
  }, []);

  return (
    <StyledHomepage>
      <StyledHeader>
        <StyledLogo>
          <StyledIcon src={icon} />
          <StyledTitle>crooge</StyledTitle>
        </StyledLogo>
        <img src={calculatorImage} alt="calculator image" />
        <h1>Odzyskaj kontrolę nad wydatkami!</h1>
      </StyledHeader>

      <ButtonsGroup>
        <Link to="/register">
          <PrimaryButton className="xxx" text="Rejestracja" isActive={true} />
        </Link>

        <p>lub</p>
        <Link to="/login">
          <PrimaryButton className="xxx" text="Logowanie" isActive={true} />
        </Link>
      </ButtonsGroup>
    </StyledHomepage>
  );
}
