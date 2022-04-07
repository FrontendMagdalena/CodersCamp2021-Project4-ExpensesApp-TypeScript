import {
  PrimaryStyledButton,
  StyledIconButton,
  ExpensesStyledButton,
  IncomeStyledButton,
  StyledIconButtonWrap,
  StyledIconButtonText,
  StyledIconAddButton,
} from './Button.styles';
import PropTypes from 'prop-types';

/* props text to wyświetlany tekst; props isActive jesli false jest wyszarzony; props primary może być użyty do stylowania innych buttonów niż standardowe*/

interface IPrimaryButton {
  className: string,
  text: string,
  isActive: boolean,
  onClick: () => void,
  alert?: boolean,
}

export const PrimaryButton = (props: IPrimaryButton) => {
  const {className, text, isActive = true, onClick, alert} = props;
  return (
    <PrimaryStyledButton
      className={className}
      text={text}
      isActive={isActive}
      onClick={onClick}
      alert={alert}
    >
      {text}
    </PrimaryStyledButton>
  );
};
//
// PrimaryButton.propTypes = {
//   className: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   isActive: PropTypes.bool.isRequired,
//   onClick: PropTypes.func,
//   alert: PropTypes.bool,
// };
//
// PrimaryButton.defaultProps = {
//   isActive: true,
// };

interface IButtonExpenses {
    text: 'Wydatek' | 'Przychód',
    isActive: boolean,
    onClick: () => void,
};

export const ButtonExpenses = (props : IButtonExpenses) => {
  const {text, isActive = true, onClick} = props;
  return (
    <ExpensesStyledButton
      text={text}
      isActive={isActive}
      onClick={onClick}
    >
      {text}
    </ExpensesStyledButton>
  );
};

// ButtonExpenses.propTypes = {
//   className: PropTypes.oneOf(['Wydatek']),
//   text: PropTypes.string.isRequired,
//   isActive: PropTypes.bool.isRequired,
//   onClick: PropTypes.func,
// };
//
// ButtonExpenses.defaultProps = {
//   isActive: true,
// };
interface IButtonIncome {
  text: 'Wydatek' | 'Przychód',
  isActive: boolean,
  onClick: () => void,
};

export const ButtonIncome = (props: IButtonIncome) => {
  const {text, isActive = true, onClick} = props;
  return (
    <IncomeStyledButton
      text={text}
      isActive={isActive}
      onClick={onClick}
    >
      {text}
    </IncomeStyledButton>
  );
};

// ButtonIncome.propTypes = {
//   className: PropTypes.oneOf(['Przychody']),
//   text: PropTypes.string.isRequired,
//   isActive: PropTypes.bool.isRequired,
//   onClick: PropTypes.func,
// };
//
// ButtonIncome.defaultProps = {
//   isActive: true,
// };

interface IIconButton {
    type: 'arrow' | 'arrowd' | 'add' | 'glass' | 'edit'| 'delete',
    onClick: () => void,
};

export const IconButton = (props: IIconButton) => {
  return <StyledIconButton type={props.type} onClick={props.onClick} />;
};

// IconButton.propTypes = {
//   type: PropTypes.oneOf(['arrow', 'arrowd', 'add', 'glass', 'edit', 'delete']),
//   onClick: PropTypes.func,
// };

export const AddButton = (props: any) => {
  return (
    <StyledIconButtonWrap onClick={props.onClick}>
      <StyledIconButtonText>{props.text}</StyledIconButtonText>
      <StyledIconAddButton
        src={props.imageName}
        alt=""
        isSmall={props.isSmall}
      />
    </StyledIconButtonWrap>
  );
};

AddButton.propTypes = {
  text: PropTypes.string,
  imageName: PropTypes.string,
  alt: PropTypes.string,
  isSmall: PropTypes.bool,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  isSmall: false,
};
