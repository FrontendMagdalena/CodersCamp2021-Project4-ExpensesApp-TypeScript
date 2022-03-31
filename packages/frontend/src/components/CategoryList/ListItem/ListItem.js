import PropTypes from 'prop-types';
import { StyledItem } from './ListItem.styles';

const ListItem = ({ item, bgColor, onClick, isActive }) => {
  return (
    <StyledItem bgcolor={bgColor} onClick={onClick} isActive={isActive}>
      {item.name}
    </StyledItem>
  );
};

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.object,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};
