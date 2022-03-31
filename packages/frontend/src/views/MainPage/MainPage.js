import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../../utils/serverURL';
import Table from '../../components/Table/Table';
import Alert from '../../components/Alert/Alert';
import Limit from '../../components/Limit/Limit';
import CategoryList from '../../components/CategoryList/CategoryList';
import { Input } from '../../components/Input/Input';
import { AccountsList } from '../../components/Accounts/AccountsList';
import { AddButton } from '../../components/Button/Button';
import { AccountsContext } from '../../reducers/accounts.reducer';
import { StyledDate, StyledDateWrap } from './MainPage.styles';
import Add from '../../assets/add.png';

const MainPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [category, setCategory] = useState('Wszystkie');
  const [expenses, setExpenses] = useState(0);
  const [incomes, setIncomes] = useState(0);
  const [balance, setBalance] = useState(0);
  const token = JSON.parse(localStorage.getItem('user'))?.token;

  useEffect(() => {
    getInitialList();
    getBalance();
  }, []);

  const getInitialList = async () => {
    const response = await fetch(apiUrl.transactions, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization-token': token,
      },
    });
    const data = await response.json();
    const [, dispatch] = accountsState;
    data &&
      dispatch({
        type: 'setInitialAccount',
        payload: data,
      });
  };

  const getBalance = async () => {
    const response = await axios.get(`${apiUrl.balance}`, {
      headers: {
        'authorization-token': token,
      },
    });

    setExpenses(response.data.expenses);
    setIncomes(response.data.incomes);
    setBalance(response.data.total);
  };

  const { accountsState, limitsState } = useContext(AccountsContext);
  const [limits, limitsDispatch] = limitsState;
  const onSetShowAlert = () => limitsDispatch({ type: 'closeLastLimit' });

  const [list, dispatch] = accountsState;
  const [listToShow, setListToShow] = useState(list);
  useEffect(() => {
    setListToShow(list);
    filterList();
    getBalance();
  }, [list, category]);
  let filteredList = list;

  const filterList = () => {
    if (name)
      filteredList = list.filter((item) =>
        item.title.toLowerCase().includes(name.toLowerCase().trim()),
      );
    if (dateStart)
      filteredList = filteredList
        ? filteredList.filter(
            (item) => new Date(item.date) >= new Date(dateStart),
          )
        : list.filter((item) => new Date(item.date) >= new Date(dateStart));
    if (dateEnd)
      filteredList = filteredList
        ? filteredList.filter(
            (item) => new Date(item.date) <= new Date(dateEnd),
          )
        : list.filter((item) => new Date(item.date) <= new Date(dateEnd));

    if (category !== 'Wszystkie') {
      filteredList = filteredList.filter((item) => item.category === category);
    }
    if (filteredList) setListToShow(filteredList);
  };

  return (
    <>
      <Table expenses={expenses} incomes={incomes} balance={balance} />
      {limits.lastReachedLimit ? <Limit limitList={limits.list} /> : null}
      {limits.lastReachedLimit && !limits?.lastReachedLimit?.closed ? (
        <Alert
          category={limits?.lastReachedLimit?.label}
          onSetShowAlert={onSetShowAlert}
        />
      ) : null}
      <AddButton
        text="Dodaj"
        imageName={Add}
        onClick={() => navigate(`/new`)}
      />
      <Input
        type="search"
        placeholder="Wyszukaj"
        icon={'glass'}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onSearchClick={filterList}
      />
      <StyledDateWrap>
        <StyledDate>
          <Input
            type="date"
            inputLabel="Początek zakresu"
            value={dateStart}
            onChange={(e) => setDateStart(e.target.value)}
          />
        </StyledDate>
        <StyledDate>
          <Input
            type="date"
            inputLabel="Koniec zakresu"
            value={dateEnd}
            onChange={(e) => setDateEnd(e.target.value)}
          />
        </StyledDate>
      </StyledDateWrap>
      <CategoryList category={category} setCategory={setCategory} />
      <AccountsList list={listToShow} dispatch={dispatch} />
    </>
  );
};
export default MainPage;
