import icon from '../../assets/calculatorx.png';
import { PrimaryButton } from '../../components/Button/Button';
import {
  StyledNotFoundView,
  StyledHeader,
  StyledCalculator,
  StyledText,
} from './NotFound.styles';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <StyledNotFoundView>
      <StyledHeader>Błąd 404</StyledHeader>
      <StyledCalculator
        src={icon}
        alt="szary martwy kalkulator"
      ></StyledCalculator>
      <StyledText>Podana strona nie istnieje!</StyledText>
      <Link to="/main">
        <PrimaryButton
          className="xxx"
          text="Przejdź do strony głównej"
          isActive={true}
        ></PrimaryButton>
      </Link>
    </StyledNotFoundView>
  );
}
