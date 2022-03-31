import { AccountDetail } from '../components/AccountDetail/AccountDetail';
import { useParams } from 'react-router-dom';
import { IconButton } from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useFetchDetail } from '../utils/hooks/useFetchDetail';
import { deleteAccountDetail } from '../utils/helpers/deleteAccountDetail';

export const AccountDetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const account = useFetchDetail(id);

  if (account) {
    return (
      <>
        <IconButton type="arrow" onClick={() => navigate(`/main`)} />
        <AccountDetail
          item={account}
          odDeleteClick={async () => {
            await deleteAccountDetail(id);
            navigate(`/main`);
          }}
          onEditClick={() => navigate(`/detail/${id}/edit`)}
        />
      </>
    );
  }
  return null;
};
