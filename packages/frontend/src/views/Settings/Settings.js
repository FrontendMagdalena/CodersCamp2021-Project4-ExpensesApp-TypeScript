import { IconButton, PrimaryButton } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import {
  StyledSettingsPage,
  StyledChangePassword,
  StyledValidation,
  StyledMessage,
} from './Settings.styles';
import { Input } from '../../components/Input/Input';
import { useForm } from 'react-hook-form';
import { serverURL } from '../../utils/serverURL';
import { useState } from 'react';

export default function Settings() {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({});
  const [title, setTitle] = useState('Zmień hasło:');

  const onSubmit = (data) => {
    if (data.newPassword === data.lastPassword) {
      setError('newPassword', {
        type: 'manual',
        message: 'Nowe hasło musi być inne niż stare',
      });
      return;
    }

    if (data.newPassword !== data.repeatedPassword) {
      setError('newPassword', {
        type: 'manual',
        message: 'Podane hasła muszą być identyczne',
      });
      setError('repeatedPassword', {
        type: 'manual',
        message: 'Podane hasła muszą być identyczne',
      });
      return;
    }

    const userID = JSON.parse(localStorage.getItem('user')).id;

    fetch(`${serverURL}/api/v1/users/update-password`, {
      method: 'PATCH',
      body: JSON.stringify({
        userID: userID,
        password: data.lastPassword,
        newPassword: data.newPassword,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((userData) => {
        console.log(userData.code);
        if (userData.code === 0) {
          setError('lastPassword', {
            type: 'manual',
            message: 'Nieprawidłowe hasło',
          });
        } else if (userData.code === 1) {
          setTitle('Hasło zmienione!');
          reset();
        }
      });
  };

  return (
    <StyledSettingsPage>
      <IconButton type="arrow" onClick={() => navigate(`/main`)} />
      <StyledChangePassword>{title}</StyledChangePassword>
      <form>
        <StyledValidation>
          <Input
            type="password"
            name="lastPassword"
            inputLabel="Bieżące hasło:"
            {...register('lastPassword', {
              required: 'Wpisz hasło, minimum 7 znaków',
              minLength: {
                value: 7,
                message: 'Minimum 7 znaków',
              },
            })}
          />
          <StyledMessage>{errors.lastPassword?.message}</StyledMessage>
        </StyledValidation>
        <StyledValidation>
          <Input
            name="newPassword"
            type="password"
            inputLabel="Nowe hasło:"
            {...register('newPassword', {
              required: 'Pole wymagane',
              minLength: {
                value: 7,
                message: 'Minimum 7 znaków',
              },
            })}
          />
          <StyledMessage>{errors.newPassword?.message}</StyledMessage>
        </StyledValidation>
        <StyledValidation>
          <Input
            name="repeatedPassword"
            type="password"
            inputLabel="Powtórz nowe hasło:"
            {...register('repeatedPassword', {
              required: 'Pole wymagane',
              minLength: {
                value: 7,
                message: 'Minimum 7 znaków',
              },
            })}
          />
          <StyledMessage>{errors.repeatedPassword?.message}</StyledMessage>
        </StyledValidation>
        <PrimaryButton
          onClick={handleSubmit(onSubmit)}
          text="Potwierdź"
          isActive={true}
        />
      </form>
    </StyledSettingsPage>
  );
}
