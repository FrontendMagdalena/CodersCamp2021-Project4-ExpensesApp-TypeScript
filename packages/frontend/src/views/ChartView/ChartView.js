import { IconButton, PrimaryButton } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import Arrow from '../../assets/arrow.png';
import {
  StyledChartView,
  InputDateStyled,
  ArrowButtonStyled,
  StyledTitle,
  InputDateStyledGrouped,
} from './ChartView.styles';
import Chart from '../../components/Chart/Chart';

export default function ChartView() {
  return (
    <>
      <ArrowButtonStyled>
        <IconButton imageName={Arrow}></IconButton>
      </ArrowButtonStyled>
      <StyledChartView>
        <StyledTitle>Wykres</StyledTitle>
        <InputDateStyledGrouped>
          <InputDateStyled>
            <Input Input type="date" inputLabel="Data"></Input>
          </InputDateStyled>
          <InputDateStyled>
            <Input Input type="date" inputLabel="Data"></Input>
          </InputDateStyled>
        </InputDateStyledGrouped>
        <PrimaryButton
          className="xxx"
          text="Potwierdź"
          isActive={true}
        ></PrimaryButton>
        <Chart></Chart>
      </StyledChartView>
    </>
  );
}
