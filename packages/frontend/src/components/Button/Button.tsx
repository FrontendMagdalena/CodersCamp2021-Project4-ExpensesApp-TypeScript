import {
  PrimaryStyledButton,
  StyledIconButton,
  ExpensesStyledButton,
  IncomeStyledButton,
  StyledIconButtonWrap,
  StyledIconButtonText,
  StyledIconAddButton,
} from './Button.styles';

/* props text to wyświetlany tekst; props isActive jesli false jest wyszarzony; props primary może być użyty do stylowania innych buttonów niż standardowe*/

interface IPrimaryButton {
  className: string;
  text: string;
  isActive: boolean;
  onClick?: () => void;
  alert?: boolean;
  type?: 'submit' | 'text' | 'reset';
}

export const PrimaryButton = (props: IPrimaryButton) => {
  const { className, text, isActive = true, onClick, alert } = props;
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

interface IButtonExpenses {
  text: 'Wydatek' | 'Przychód';
  isActive: boolean;
  onClick: () => void;
}

export const ButtonExpenses = (props: IButtonExpenses) => {
  const { text, isActive = true, onClick } = props;
  return (
    <ExpensesStyledButton text={text} isActive={isActive} onClick={onClick}>
      {text}
    </ExpensesStyledButton>
  );
};

interface IButtonIncome {
  text: 'Wydatek' | 'Przychód';
  isActive: boolean;
  onClick: () => void;
}

export const ButtonIncome = (props: IButtonIncome) => {
  const { text, isActive = true, onClick } = props;
  return (
    <IncomeStyledButton text={text} isActive={isActive} onClick={onClick}>
      {text}
    </IncomeStyledButton>
  );
};

interface IIconButton {
  type: 'arrow' | 'arrowd' | 'add' | 'glass' | 'edit' | 'delete';
  onClick: () => void;
}

export const IconButton = (props: IIconButton) => {
  return <StyledIconButton type={props.type} onClick={props.onClick} />;
};

interface IAddButton {
  text: string;
  imageName: string;
  alt?: string;
  isSmall?: boolean;
  onClick: () => void;
}

export const AddButton = (props: IAddButton) => {
  const { text, imageName, alt, isSmall = false, onClick } = props;
  return (
    <StyledIconButtonWrap onClick={onClick}>
      <StyledIconButtonText>{text}</StyledIconButtonText>
      <StyledIconAddButton src={imageName} alt="" isSmall={isSmall} />
    </StyledIconButtonWrap>
  );
};
