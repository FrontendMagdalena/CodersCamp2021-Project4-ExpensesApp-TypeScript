import {useEffect, useState} from 'react';
import {apiUrl, token} from '../serverURL';
import {IAccount} from "../../reducers/accounts.reducer";

export const useFetchDetail = (id: string) => {
  const [account, setAccount] = useState<IAccount | null>(null);

  useEffect(() => {
    getAccountDetail();
  }, []);

  const getAccountDetail = async () => {
    const response = await fetch(`${apiUrl.transactions}/${id}`, {
      headers: {
        'authorization-token': token,
      },
    });
    const data = await response.json();
    setAccount(data);
  };

  return account;
};
