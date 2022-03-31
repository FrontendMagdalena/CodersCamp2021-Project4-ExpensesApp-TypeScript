import { PrimaryButton, ButtonExpenses, ButtonIncome } from '../Button/Button';
import {
  StyledNewPosition,
  ExpIncBtnGroup,
  InputDateStyled,
  InputGroupStyled,
} from '../../views/NewPosition/NewPosition.styles';
import { Input, InputSelect, InputAttachment } from '../Input/Input';
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { apiUrl } from '../../utils/serverURL';

const colors = [
  '#F4600C',
  '#EEA67E',
  '#83BEF5',
  '#EFB82B',
  '#8088CC',
  '#57A14AFF',
];

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
const token = JSON.parse(localStorage.getItem('user'))?.token;

export const AccountForm = ({ handleSubmit, account, buttonText }) => {
  const getInitialCategories = async () => {
    const response = await fetch(apiUrl.categories, {
      headers: {
        Method: 'GET',
        'Content-Type': 'application/json',
        'authorization-token': token,
      },
    });
    const data = await response.json();
    const translatedData = data.map((item) => {
      return {
        ...item,
        label: item.name,
        value: item.name,
      };
    });
    const initialCategory = translatedData.find(
      (item) => item.label === account?.category,
    );
    initialCategory && setCategory(initialCategory);
    setCategoryList(translatedData);
  };

  const [categoryList, setCategoryList] = useState([]);

  const addNewCategory = async (data) => {
    const userID = JSON.parse(localStorage.getItem('user')).id;
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

  console.log({ account });
  const formattedDate = account?.date
    ? new Date(account?.date).toISOString().slice(0, 10)
    : new Date().toISOString().slice(0, 10);

  const [date, setDate] = useState(formattedDate);
  const [type, setType] = useState(account?.type || 'Wydatek');
  const [category, setCategory] = useState({ label: '', value: '' });
  const [title, setTitle] = useState(account?.title || '');
  // TODO think how to remove console warning
  const [amount, setAmount] = useState(account?.amount || null);
  // const [attachment, setAttachment] = useState(null);

  const handleCreate = useCallback(
    (inputValue) => {
      const newValue = {
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
            onChange={(e) => setDate(e.target.value)}
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
            onChange={(option) => setCategory(option)}
            onCreateOption={handleCreate}
          />
          <Input
            type="text"
            inputLabel="Nazwa"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="number"
            inputLabel="Kwota"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <InputAttachment
            type="file"
            inputLabel="Załącz plik"
            icon={'Attach'}
            style="visibility:hidden"
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

AccountForm.propTypes = {
  handleSubmit: PropTypes.func,
  account: PropTypes.object,
  buttonText: PropTypes.string,
};
