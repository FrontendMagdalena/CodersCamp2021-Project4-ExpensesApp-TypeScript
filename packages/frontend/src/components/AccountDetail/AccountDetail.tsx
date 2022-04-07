import {
  DetailContainer,
  NameOfExpense,
  ColumnContainer,
  BoldText,
  StyledAmountColor,
  PropsRow,
  IconsContainer,
  ConfirmationStyle,
  StyledImg,
} from './AccountDetail.styles.js';
import penBig from './penBig.png';
import trashBig from './trashBig.png';
import {IAccount} from "../../reducers/accounts.reducer";

interface IProps {
  item: IAccount
  onEditClick: () => void,
  odDeleteClick: () => void,
}

export const AccountDetail = (props: IProps) => {
  const { onEditClick, odDeleteClick, item } = props;
  const { date, title, amount, type, category } = item;
  const formattedDate = new Date(date).toISOString().slice(0, 10);
  const formatDate = formattedDate.split('-').reverse().join('-');
  return (
    <DetailContainer>
      <NameOfExpense>{type}</NameOfExpense>
      <ColumnContainer>
        <BoldText>Data: </BoldText>
        <PropsRow> {formatDate} </PropsRow>
        <BoldText>Kategoria: </BoldText>
        <PropsRow> {category} </PropsRow>
        <BoldText>Nazwa: </BoldText>
        <PropsRow> {title} </PropsRow>
        <BoldText>Kwota: </BoldText>
        <StyledAmountColor isExpense={type === 'Wydatek'}>
          {' '}
          {amount} zł{' '}
        </StyledAmountColor>
        <BoldText>Potwierdzenie:</BoldText>
        <ConfirmationStyle>Potwierdzenie.jpg</ConfirmationStyle>
      </ColumnContainer>
      <IconsContainer>
        <StyledImg src={penBig} onClick={onEditClick} />
        <StyledImg src={trashBig} onClick={odDeleteClick} />
      </IconsContainer>
    </DetailContainer>
  );
};
