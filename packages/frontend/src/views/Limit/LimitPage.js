import CategoryList from '../../components/CategoryList/CategoryList';
import { Input } from '../../components/Input/Input';
import { PrimaryButton, IconButton } from '../../components/Button/Button';

import {
  StyledLimitPage,
  StyledLimitTitle,
  StyledLimitText,
  StyledLimitGroup,
} from './LimitPage.styles';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AccountsContext } from '../../reducers/accounts.reducer';

export default function LimitPage() {
  const { limitsState } = useContext(AccountsContext);
  const [, dispatch] = limitsState;
  const navigate = useNavigate();
  const [amount, setAmount] = useState(null);
  const [category, setCategory] = useState('');

  const dataLimit = {
    category,
    amount,
  };

  return (
    <StyledLimitPage>
      <IconButton type="arrow" onClick={() => navigate(`/main`)} />
      <StyledLimitTitle>Ustaw limit miesięczny</StyledLimitTitle>
      <StyledLimitGroup>
        <StyledLimitText>Kategoria:</StyledLimitText>
        <CategoryList category={category} setCategory={setCategory} />
      </StyledLimitGroup>
      <Input
        type="number"
        inputLabel="Kwota:"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <PrimaryButton
        className="xxx"
        text="Dodaj"
        isActive={true}
        onClick={() => {
          dispatch({ type: 'addLimit', payload: dataLimit });
          navigate(`/main`);
        }}
      />
    </StyledLimitPage>
  );
}
