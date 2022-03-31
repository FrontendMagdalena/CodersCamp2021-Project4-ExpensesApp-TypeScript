import { useState, useEffect } from 'react';
import { AccountsItem } from './AccountsItem';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from './AccountsList.styles';
import PropTypes from 'prop-types';
import { deleteAccountDetail } from '../../utils/helpers/deleteAccountDetail';

export const AccountsList = ({ list, dispatch }) => {
  const lastFive = list.slice(Math.max(list.length - 5, 0)).reverse();
  const navigate = useNavigate();
  const [accountList, setAccountList] = useState(lastFive);
  useEffect(() => {
    setAccountList(lastFive);
  }, [list]);

  return (
    <div>
      {accountList.map((item) => (
        <AccountsItem
          key={item._id}
          item={item}
          odDeleteClick={(e) => {
            deleteAccountDetail(item._id).then(() =>
              dispatch({ type: 'deleteAccount', payload: { id: item._id } }),
            );
            e.stopPropagation();
          }}
          onEditClick={(e) => {
            navigate(`/detail/${item._id}/edit`);
            e.stopPropagation();
          }}
          onClick={() => navigate(`/detail/${item._id}`)}
        />
      ))}
      {accountList.length === list.length ? null : (
        <StyledButton
          onClick={() =>
            setAccountList(
              list
                .slice(Math.max(list.length - (accountList.length + 5), 0))
                .reverse(),
            )
          }
        >
          Pokaż więcej
        </StyledButton>
      )}
    </div>
  );
};

AccountsList.propTypes = {
  list: PropTypes.array.isRequired,
  dispatch: PropTypes.func,
};
