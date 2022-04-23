import { PrimaryButton, ButtonExpenses, ButtonIncome } from '../Button/Button';
import {
  StyledNewPosition,
  ExpIncBtnGroup,
  InputDateStyled,
  InputGroupStyled,
} from '../../views/NewPosition/NewPosition.styles';
import { Input, InputSelect, InputAttachment } from '../Input/Input';
import {ChangeEvent, useCallback, useEffect, useState} from 'react';
import { apiUrl } from '../../utils/serverURL';
import {IAccount} from "../../reducers/accounts.reducer";

const colors = [
  '#F4600C',
  '#EEA67E',
  '#83BEF5',
  '#EFB82B',
  '#8088CC',
  '#57A14AFF',
];

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
const token = JSON.parse(localStorage.getItem('user') as string)?.token;

interface IAccountFormData {
  amount: string | null,
  category: { value: string, label: string},
  title: string,
  date: string,
  type: 'Wydatek' | 'Przychód',
}

interface IProps {
  handleSubmit: (data: IAccountFormData) => void
  account?: IAccount,
  buttonText: string
}

export const AccountForm = ({ handleSubmit, account, buttonText }: IProps) => {
  const getInitialCategories = async () => {
    const response = await fetch(apiUrl.categories, {
      headers: {
        Method: 'GET',
        'Content-Type': 'application/json',
        'authorization-token': token,
      },
    });
    const data = await response.json();
    const translatedData = data.map((item: {name: string}) => {
      return {
        ...item,
        label: item.name,
        value: item.name,
      };
    });
    const initialCategory = translatedData.find(
      (item: {label: string}) => item.label === account?.category,
    );
    initialCategory && setCategory(initialCategory);
    setCategoryList(translatedData);
  };

  const [categoryList, setCategoryList] = useState<{ value: string, label: string, color: string }[]>([]);

  const addNewCategory = async (data: {name: string, color: string, } ) => {
    const userID = JSON.parse(localStorage.getItem('user') as string).id;
    const response = await fetch(apiUrl.categories, {
      method: 'POST',
      body: JSON.stringify({ ...data, userID }),
      headers: {
        'Content-Type': 'application/json',
        'authorization-token': token,
      },
    });
    const result = await response.json();
    return result._id;
  };

  useEffect(() => {
    getInitialCategories();
  }, []);

  const formattedDate = account?.date
    ? new Date(account?.date).toISOString().slice(0, 10)
    : new Date().toISOString().slice(0, 10);

  const [date, setDate] = useState<string>(formattedDate);
  const [type, setType] = useState<'Wydatek' | 'Przychód'>(account?.type || 'Wydatek');
  const [category, setCategory] = useState<{ label: string, value: string }>({ label: '', value: '' });
  const [title, setTitle] = useState<string>(account?.title || '');
  // TODO think how to remove console warning
  const [amount, setAmount] = useState<string | null>(account?.amount || null);
  // const [attachment, setAttachment] = useState(null);

  const handleCreate = useCallback(
    (inputValue) => {
      const newValue: { value: string, label: string, color: string } = {
        value: inputValue.toLowerCase(),
        label: inputValue,
        color: colors[getRandomInt(0, colors.length)],
      };
      const payload = {
        name: inputValue,
        color: colors[getRandomInt(0, colors.length)],
      };

      addNewCategory(payload);
      const newCategories = [...categoryList, newValue];
      setCategoryList(newCategories);
      setCategory(newValue);
    },
    [categoryList],
  );

  const onSubmit = () => {
    const data = {
      date,
      type,
      category,
      title,
      amount,
    };
    handleSubmit(data);
  };

  return (
    <>
      <StyledNewPosition>
        <InputDateStyled>
          <Input
            type="date"
            inputLabel="Data"
            value={date}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
          />
        </InputDateStyled>
        <ExpIncBtnGroup>
          <ButtonExpenses
            text="Wydatek"
            isActive={type === 'Wydatek'}
            onClick={() => setType('Wydatek')}
          />
          <ButtonIncome
            text="Przychód"
            isActive={type === 'Przychód'}
            onClick={() => setType('Przychód')}
          />
        </ExpIncBtnGroup>
        <InputGroupStyled>
          <InputSelect
            isClearable
            inputLabel="Kategoria"
            value={category}
            options={categoryList}
            onChange={(option: { label: string, value: string}) => setCategory(option)}
            onCreateOption={handleCreate}
          />
          <Input
            type="text"
            inputLabel="Nazwa"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          />
          <Input
            type="number"
            inputLabel="Kwota"
            value={amount}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
          />
          <InputAttachment
            type="file"
            inputLabel="Załącz plik"
            icon={'Attach'}
            // style="visibility:hidden"
          />
        </InputGroupStyled>
        <PrimaryButton
          className="xxx"
          text={buttonText}
          isActive={true}
          onClick={onSubmit}
        />
      </StyledNewPosition>
    </>
  );
};

