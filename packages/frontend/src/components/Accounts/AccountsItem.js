import PropTypes from 'prop-types';
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

export const AccountsItem = (props) => {
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

AccountsItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
  }),
  onEditClick: PropTypes.func,
  odDeleteClick: PropTypes.func,
  onClick: PropTypes.func,
};
