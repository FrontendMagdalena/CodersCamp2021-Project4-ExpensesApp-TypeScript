import { AccountForm } from '../../components/Form/AccountForm';
import { IconButton } from '../../components/Button/Button';
import { useContext } from 'react';
import { AccountsContext } from '../../reducers/accounts.reducer';
import { useNavigate } from 'react-router-dom';
import { apiUrl, token } from '../../utils/serverURL';

export const NewPosition = () => {
  const { accountsState, limitsState } = useContext(AccountsContext);
  const [list, dispatch] = accountsState;
  const [limits, limitsDispatch] = limitsState;
  const navigate = useNavigate();

  const currentMonth = new Date().toISOString().slice(4, 7);

  const validateLimit = (categoryLabel, lastAmount) => {
    const filteredList = list.filter(
      (item) =>
        item.date.includes(currentMonth) &&
        item.category === categoryLabel &&
        item.type === 'Wydatek',
    );
    const totalAmount = filteredList.reduce((acc, item) => {
      return acc + parseInt(item.amount, 10);
    }, lastAmount);

    const categoryLimit = limits.list && limits.list[categoryLabel];
    if (categoryLimit) {
      return totalAmount > categoryLimit.value;
    }
    return false;
  };

  const addTransaction = async (data) => {
    const userID = JSON.parse(localStorage.getItem('user')).id;

    const response = await fetch(apiUrl.transactions, {
      method: 'POST',
      body: JSON.stringify({ ...data, userID }),
      headers: {
        'Content-Type': 'application/json',
        'authorization-token': token,
      },
    });
    const { _id } = await response.json();
    return _id;
  };

  const handleSubmit = async (data) => {
    const payload = {
      ...data,
      category: data.category.label,
    };
    const id = await addTransaction(payload);
    console.log({ id });
    dispatch({
      type: 'addNewAccount',
      payload: { ...payload, id },
    });
    const reachedLimit = validateLimit(
      data.category.label,
      parseInt(data.amount, 10),
    );
    if (reachedLimit) {
      limitsDispatch({
        type: 'reachedLimit',
        payload: { category: data.category.label },
      });
    }
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <IconButton type="arrow" onClick={() => navigate(`/main`)} />
      <AccountForm handleSubmit={handleSubmit} buttonText={'Dodaj'} />
    </>
  );
};
