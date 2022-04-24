import {
  ItemBox,
  StyledText,
  StyledText2,
  StyledTitle,
  StyledAmount,
  FirstColumn,
  SecondColumn,
  ThirdColumn,
  StyledIcon,
} from './AccountsItem.styles';
import pen from './pen.png';
import trash from './trash.png';
import {IAccount} from "../../reducers/accounts.reducer";

interface IProps {
  item: IAccount,
  onEditClick: (e: React.MouseEvent<HTMLElement>)=> void,
  odDeleteClick: (e: React.MouseEvent<HTMLElement>)=> void,
  onClick: ()=> void,
};

export const AccountsItem = (props: IProps) => {
  const { onEditClick, odDeleteClick, item, onClick } = props;
  const { date, title, amount, type } = item;
  const formattedDate = new Date(date).toISOString().slice(0, 10);
  const formatDate = formattedDate.split('-').reverse().join('-');
  return (
    <>
      <ItemBox onClick={onClick}>
        <FirstColumn>
          <StyledText>{formatDate}</StyledText>
          <StyledTitle>{title}</StyledTitle>
        </FirstColumn>
        <SecondColumn>
          <StyledText2>Kwota: </StyledText2>
          <StyledAmount isExpense={type === 'Wydatek'}>
            {amount} zł
          </StyledAmount>
        </SecondColumn>
        <ThirdColumn>
          <StyledIcon src={pen} onClick={onEditClick} />
          <StyledIcon src={trash} onClick={odDeleteClick} />
        </ThirdColumn>
      </ItemBox>
    </>
  );
};

