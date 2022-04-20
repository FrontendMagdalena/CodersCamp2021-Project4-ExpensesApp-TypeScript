import {createContext} from 'react';

export const initialData = [
    {
        id: '1',
        amount: 520,
        category: 'Remont',
        title: 'Farby i kleje',
        date: '2022-01-10',
        attachment: null,
        type: 'Wydatek',
    },
    {
        id: '2',
        amount: 1000,
        category: 'Prezent',
        title: 'Prezent urodzinowy z okazji czterdziestych urodzin w restauracji',
        date: '2022-01-17',
        attachment: null,
        type: 'Przychód',
    },
    {
        id: '3',
        amount: 350,
        category: 'Ubrania',
        title: 'Spodnie i buty zimowe',
        date: '2022-01-05',
        attachment: null,
        type: 'Wydatek',
    },
    {
        id: '4',
        amount: 2000,
        category: 'Prezent',
        title: 'Wynagrodzenie za pracę - miesiąc styczeń',
        date: '2022-01-28',
        attachment: null,
        type: 'Przychód',
    },
    {
        id: '5',
        amount: 120,
        category: 'Leczenie',
        title: 'Wizyta u alergologa',
        date: '2022-01-04',
        attachment: null,
        type: 'Wydatek',
    },
    {
        id: '6',
        amount: 200,
        category: 'Remont',
        title: '(lastone) Panele',
        date: '2022-01-15',
        attachment: null,
        type: 'Wydatek',
    },
];

export const users = [
    {
        id: 1,
        email: 'admin@scrooge.com',
        password: 'pass1234',
    },
];

export interface IAccount {
    _id: string,
    amount: string,
    category: string,
    title: string,
    date: string,
    attachment: null,
    type: 'Wydatek' | 'Przychód',
}

export interface IAccountsAction {
    type: 'setInitialAccount' | 'addNewAccount' | 'deleteAccount',
    payload?: {
        id: string
    }
}

export interface ILimit {
    list: {
        [category: string]: {
            value: number,
            reached: boolean
        },
    },
    lastReachedLimit?: {
        label: string,
        closed: boolean,
    },
}

interface ILimitAction {
    type: 'addLimit' | 'reachedLimit' | 'closeLastLimit',
    payload?: {
       category: string,
        amount: string
    }
}

export interface IAccountState {
    accountsState: [
        list: IAccount[],
        dispatch: ({type, payload}: {type: string, payload?: {}}) => void],
    limitsState: [
        limits: ILimit,
        dispatch: ({type, payload}: {type: string, payload?: {category: string}} ) => void],
}

export const AccountsContext = createContext<IAccountState>({
    accountsState: [[], () => null],
    limitsState: [{list: {}}, () => null]
});

export const accountsReducer = (state: IAccount[], action: IAccountsAction) : IAccount[]  => {
    let newValue;

    switch (action.type) {
        case 'setInitialAccount':
            return action.payload as any;
        case 'addNewAccount':
            newValue = [...state, action.payload];
            return newValue as any;
        case 'deleteAccount':
            return state.filter((item) => item._id !== action.payload?.id);
        default:
            return state;
    }
};

export const limitsReducer = (state: ILimit, action: ILimitAction) : ILimit => {
    let newValue;

    switch (action.type) {
        case 'addLimit':
            newValue = {
                ...state,
                list: {
                    ...state.list,
                    [action.payload!.category]: {
                        value: parseInt(action.payload!.amount, 10),
                        reached: false,
                    },
                },
            };
            localStorage.setItem('limits', JSON.stringify(newValue));
            return newValue;
        case 'reachedLimit':
            newValue = {
                ...state,
                list: {
                    ...state.list,
                    [action.payload!.category]: {
                        value: state.list![action.payload!.category].value,
                        reached: true,
                    },
                },
                lastReachedLimit: {
                    label: action.payload!.category,
                    closed: false,
                },
            };
            localStorage.setItem('limits', JSON.stringify(newValue));
            return newValue;
        case 'closeLastLimit':
            newValue = {
                ...state,
                lastReachedLimit: {
                    label: state.lastReachedLimit?.label,
                    closed: true,
                },
            };
            localStorage.setItem('limits', JSON.stringify(newValue));
            return newValue as any;
        default:
            return state;
    }
};
