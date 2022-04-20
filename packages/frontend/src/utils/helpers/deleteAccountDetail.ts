import { apiUrl } from '../serverURL';

export const deleteAccountDetail = async (id: string) => {
  const token = JSON.parse(localStorage.getItem('user') as string)?.token;
  await fetch(`${apiUrl.transactions}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'authorization-token': token,
    },
  });
};
