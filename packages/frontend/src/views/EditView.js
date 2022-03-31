import { AccountForm } from '../components/Form/AccountForm';
import { IconButton } from '../components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchDetail } from '../utils/hooks/useFetchDetail';
import { updateAccountDetail } from '../utils/helpers/updateAccountView';

export const EditView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const account = useFetchDetail(id);

  const handleSubmit = (data) => {
    const payload = {
      ...data,
      category: data.category.label,
    };
    updateAccountDetail(id, payload);
    navigate(`/detail/${id}`);
  };

  if (account) {
    return (
      <>
        <IconButton type="arrow" onClick={() => navigate(`/detail/${id}`)} />
        <AccountForm
          account={account}
          handleSubmit={handleSubmit}
          buttonText={'Zapisz'}
        />
      </>
    );
  }
  return null;
};
