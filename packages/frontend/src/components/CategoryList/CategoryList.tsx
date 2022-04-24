import { StyledList } from './CategoryList.styles';
import ListItem from './ListItem/ListItem';
import { apiUrl } from '../../utils/serverURL';
import { useEffect, useState } from 'react';

 interface ICategory {
  color: string;
  name: string;
  userID: string;
  _id: string;
}

export type IAllCategories = Pick<ICategory, "color" | "name">;

const allCategories: IAllCategories= {
  name: 'Wszystkie',
  color: '#8b796e',
};

interface IProps {
  category: string,
  setCategory:  React.Dispatch<React.SetStateAction<string>>,
}

const CategoryList = ({ category, setCategory }: IProps) => {
  const token = JSON.parse(localStorage.getItem('user') as string)?.token;
  const getInitialCategories = async () => {
    const response = await fetch(apiUrl.categories, {
      headers: {
        Method: 'GET',
        'Content-Type': 'application/json',
        'authorization-token': token,
      },
    });
    const data = await response.json();
    setCategoryList(data);
  };
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);

  useEffect(() => {
    getInitialCategories();
  }, []);

  const categoriesWithAll = [allCategories, ...categoryList ];
  return (
    <StyledList>
      {categoriesWithAll.map((item) => (
        <ListItem
          key={item.name}
          item={item}
          onClick={() => setCategory(item.name)}
          bgColor={item.color || '#8b796e'}
          isActive={category === item.name}
        />
      ))}
    </StyledList>
  );
};

export default CategoryList;
