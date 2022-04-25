export const serverURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://scrooge-back-qd7rl.ondigitalocean.app';
console.log(`${process.env.NODE_ENV}`);
console.log(`Server URL: ${serverURL}`);

export const apiUrl = {
  balance: `${serverURL}/api/v1/balance`,
  transactions: `${serverURL}/api/v1/transactions`,
  categories: `${serverURL}/api/v1/categories`,
};

export const token = JSON.parse(localStorage.getItem('user') as string)?.token;
