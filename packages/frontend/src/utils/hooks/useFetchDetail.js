import {useEffect, useState} from 'react';
import {apiUrl, token} from '../serverURL';

export const useFetchDetail = (id) => {
  const [account, setAccount] = useState(null);

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
