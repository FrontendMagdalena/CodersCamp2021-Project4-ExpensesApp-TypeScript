import React, { useState, useEffect } from 'react';
import { AccountsItem } from './AccountsItem';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from './AccountsList.styles';
import { deleteAccountDetail } from '../../utils/helpers/deleteAccountDetail';
import {IAccount} from "../../reducers/accounts.reducer";

interface IProps {
  list: IAccount[],
  dispatch: ({type, payload}: {type: string, payload?: {} | undefined}) => void
}

export const AccountsList = ({ list, dispatch }: IProps) => {
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

