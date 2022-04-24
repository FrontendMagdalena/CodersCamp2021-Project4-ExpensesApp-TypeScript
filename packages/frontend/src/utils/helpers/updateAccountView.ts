import { apiUrl, token } from '../serverURL';

interface IProps {
  category: string,
  amount: string | null,
  title: string,
  date: string,
  type: "Wydatek" | "Przychód"
}

export const updateAccountDetail = async (id: string, data:  IProps) => {
  await fetch(`${apiUrl.transactions}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'authorization-token': token,
    },
  });
};
