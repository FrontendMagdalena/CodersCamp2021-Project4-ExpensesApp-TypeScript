import 'normalize.css';
import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './components/styles/Global';
import Header from './components/Header/Header';
import LimitPage from './views/Limit/LimitPage';
import NotFound from './views/NotFound/NotFound';
import { AccountDetailView } from './views/AccountDetailView';
// @ts-ignore
import ChartView from './views/ChartView/ChartView';
import Homepage from './views/Homepage/Homepage';
import LoginPage from './views/Login/LoginPage/LoginPage';
import RegisterPage from './views/Login/RegisterPage/RegisterPage';
import ResetPasswordPage from './views/ResetPasswordPage/ResetPasswordPage';
import MainPage from './views/MainPage/MainPage';
import { NewPosition } from './views/NewPosition/NewPosition';
import {
  AccountsContext,
  accountsReducer,
  limitsReducer,
  users,
} from './reducers/accounts.reducer';
import { Container } from './components/styles/Container.styled';
import { EditView } from './views/EditView';
import Settings from './views/Settings/Settings';
import ActivationView from './views/ActivationView/ActivationView';
import ResetPasswordByIDPage from './views/ResetPasswordByIDPage/ResetPasswordByIDPage';

function App() {
  const initialLimit = localStorage.getItem('limits')
    ? JSON.parse(localStorage.getItem('limits') as string)
    : {};

  const accountsState = useReducer(accountsReducer, []);
  const limitsState = useReducer(limitsReducer, initialLimit);

  console.log('List', accountsState[0]);
  return (
    // @ts-ignore
    <AccountsContext.Provider value={{ accountsState, users, limitsState }}>
      <GlobalStyles />
      <Header />
      <Container>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/charts" element={<ChartView />} />
          <Route path="/detail/:id" element={<AccountDetailView />} />
          <Route path="/detail/:id/edit" element={<EditView />} />
          <Route path="/limit" element={<LimitPage />} />
          <Route path="/new" element={<NewPosition />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route
            path="/reset-password/:id"
            element={<ResetPasswordByIDPage />}
          />
          <Route path="/" element={<Homepage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/verify/:id" element={<ActivationView />} />
        </Routes>
      </Container>
    </AccountsContext.Provider>
  );
}

export default App;
