import { apiUrl, token } from '../serverURL';

export const updateAccountDetail = async (id, data) => {
  await fetch(`${apiUrl.transactions}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'authorization-token': token,
    },
  });
};
