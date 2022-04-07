import {AccountForm} from '../components/Form/AccountForm';
import {IconButton} from '../components/Button/Button';
import {useNavigate, useParams} from 'react-router-dom';
import {useFetchDetail} from '../utils/hooks/useFetchDetail';
import {updateAccountDetail} from '../utils/helpers/updateAccountView';
import {IAccount} from "../reducers/accounts.reducer";

interface IAccountFormData {
    amount: string | null,
    category: { value: string, label: string },
    title: string,
    date: string,
    type: 'Wydatek' | 'Przychód',
}

export const EditView = () => {
    const {id} = useParams() as { id: string };
    const navigate = useNavigate();

    const account: IAccount | null = useFetchDetail(id);

    const handleSubmit = (data: IAccountFormData) => {
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
                <IconButton type="arrow" onClick={() => navigate(`/detail/${id}`)}/>
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
