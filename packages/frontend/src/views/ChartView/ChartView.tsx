import { IconButton, PrimaryButton } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import {
  StyledChartView,
  InputDateStyled,
  StyledTitle,
  InputDateStyledGrouped,
} from './ChartView.styles';
// @ts-ignore
import Chart from '../../components/Chart/Chart';
import { useNavigate } from 'react-router-dom';

export default function ChartView() {
  const navigate = useNavigate();
  return (
    <>
      <IconButton type="arrow" onClick={() => navigate(`/main`)} />
      <StyledChartView>
        <StyledTitle>Wykres</StyledTitle>
        <InputDateStyledGrouped>
          <InputDateStyled>
            <Input Input type="date" inputLabel="Data" />
          </InputDateStyled>
          <InputDateStyled>
            <Input Input type="date" inputLabel="Data" />
          </InputDateStyled>
        </InputDateStyledGrouped>
        <PrimaryButton className="xxx" text="Potwierdź" isActive={true} />
        <Chart />
      </StyledChartView>
    </>
  );
}
