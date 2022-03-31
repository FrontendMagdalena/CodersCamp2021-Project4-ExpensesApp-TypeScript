import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input/Input';
import { PrimaryButton } from '../../components/Button/Button';
import { IconButton } from '../../components/Button/Button';
import {
  StyledReset,
  StyledMessage,
  StyledTitle,
  StyledText,
  StyledValidation,
} from '../ResetPasswordPage/ResetPasswordPage.styles';
import { serverURL } from '../../utils/serverURL';

const ResetPasswordByIDPage = () => {
  const { id } = useParams();
  const [password, setPassword] = useState('');
  const [messageTitle, setMessageTitle] = useState('Ustaw nowe hasło');
  const [showLoginButton, setShowLoginButton] = useState(false);
  const [showResetButton, setShowResetButton] = useState(true);
  const [userMessage, setUserMessage] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    if (data.password === data.passwordSecond) {
      const form = event.target;

      setPassword(data.password);
      fetch(`${serverURL}/api/v1/users/reset-password/${id}`, {
        method: 'POST',
        body: JSON.stringify({ password: data.password }),
        headers: {
          'Content-type': 'application/json',
        },
      });
      form.reset();
      setMessageTitle('Hasło zmienione');
      setShowLoginButton(true);
      setShowResetButton(false);
    } else setUserMessage('Podane hasła muszą być identyczne');
  };

  const onClickHandler = () => {
    navigate('/login');
  };

  return (
    <StyledReset>
      <IconButton type="arrow" onClick={() => navigate(-1)} />
      <StyledTitle>{messageTitle}</StyledTitle>
      {!password ? (
        <StyledText>
          Podaj nowe hasło, którym chcesz się od teraz logować do aplikacji.
        </StyledText>
      ) : (
        <StyledText>
          Hasło zostalo zmienione! Możesz się teraz nim zalogować.
        </StyledText>
      )}
      {showResetButton && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledValidation>
            <Input
              type="password"
              name="password"
              inputLabel="hasło:"
              {...register('password', {
                required: 'Wpisz hasło, minimum 7 znaków',
                minLength: {
                  value: 7,
                  message: 'Minimum 7 znaków',
                },
              })}
            />
            <StyledMessage>{errors.password?.message}</StyledMessage>
          </StyledValidation>
          <StyledValidation>
            <Input
              name="passwordSecond"
              type="password"
              inputLabel="powtórz hasło:"
              {...register('passwordSecond', {
                required: 'Powtórz hasło',
                minLength: {
                  value: 7,
                  message: 'Minimum 7 znaków',
                },
              })}
            />
            <StyledMessage>{errors.passwordSecond?.message}</StyledMessage>
            <StyledMessage>{userMessage}</StyledMessage>
          </StyledValidation>
          <PrimaryButton
            className="xxx"
            text="Zresetuj"
            isActive={true}
            type="submit"
          />
        </form>
      )}
      {showLoginButton && (
        <PrimaryButton
          className="xxx"
          text="Zaloguj się ponownie"
          isActive={true}
          type="submit"
          onClick={onClickHandler}
        />
      )}
    </StyledReset>
  );
};

export default ResetPasswordByIDPage;
