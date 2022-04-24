import { StyledItem } from './ListItem.styles';
import {IAllCategories} from "../CategoryList";

interface IProps {
  item: IAllCategories,
  bgColor: string,
  onClick: () => void,
  isActive: boolean,
}
const ListItem = ({ item, bgColor, onClick, isActive }: IProps) => {
  return (
    <StyledItem bgColor={bgColor} onClick={onClick} isActive={isActive}>
      {item.name}
    </StyledItem>
  );
};

export default ListItem;

