import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EMAIL_VERIFICATION_REGEX } from '../../../utils/helpers/validation.helpers';
import { Input } from '../../../components/Input/Input';
import { PrimaryButton } from '../../../components/Button/Button';
import {
  StyledLoginPage,
  StyledLogo,
  StyledIcon,
  StyledTitle,
  StyledText,
  StyledMessage,
  StyledValidation,
  StyledUserNotExists,
  StyledResetText,
} from './LoginPage.styles';
import icon from '../../../assets/Icon.png';
import { serverURL } from '../../../utils/serverURL';

export default function LoginPage() {
  const navigate = useNavigate();
  const [userMessage, setUserMessage] = useState('');

  type FormInputs = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onClick = (page: string) => {
    navigate(`/${page}`);
  };

  const onSubmit: SubmitHandler<FormInputs> = (userData, event) => {
    const form = event?.target;

    fetch(`${serverURL}/api/v1/users/login`, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code) {
          const user = {
            email: data.userExist.email,
            id: data.userExist._id,
            token: data.token,
          };
          localStorage.setItem('userLogged', 'true');
          localStorage.setItem('user', JSON.stringify(user));
          navigate('/main');
        } else {
          setUserMessage('E-mail lub hasło są nieprawidłowe.');
          form.reset();
        }
      })
      .catch((error) => {
        form.reset();
        console.log('Error:', error);
        setUserMessage(
          'Wykryto problem podczas łączenia z serwerem. Spróbuj ponownie później.',
        );
        form.reset();
      });
  };

  return (
    <StyledLoginPage>
      <StyledLogo>
        <StyledIcon src={icon} />
        <StyledTitle>crooge</StyledTitle>
      </StyledLogo>
      <StyledText>Logowanie:</StyledText>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledValidation>
          <Input
            type="email"
            // name="email"
            inputLabel="e-mail:"
            {...register('email', {
              required: 'Adres e-mail jest wymagany',
              pattern: {
                value: EMAIL_VERIFICATION_REGEX,
                message: 'Adres e-mail nie poprawny',
              },
            })}
          />
          <StyledMessage>{errors.email?.message}</StyledMessage>
        </StyledValidation>
        <StyledValidation>
          <Input
            type="password"
            inputLabel="hasło:"
            // name="password"
            {...register('password', {
              required: 'Wpisz hasło, minimum 7 znaków',
              minLength: {
                value: 7,
                message: 'Wpisz hasło, minimum 7 znaków',
              },
            })}
          />
          <StyledMessage>{errors.password?.message}</StyledMessage>
        </StyledValidation>
        <PrimaryButton
          className="xxx"
          text="Logowanie"
          isActive={true}
          type="submit"
        />
      </form>
      {userMessage && (
        <>
          <StyledUserNotExists>{userMessage}</StyledUserNotExists>
          <Link to="/reset-password">
            <StyledResetText>Nie pamiętam hasła.</StyledResetText>
          </Link>
          <PrimaryButton
            className="xxx"
            text="Rejestracja"
            isActive={true}
            onClick={() => onClick('register')}
          />
        </>
      )}
    </StyledLoginPage>
  );
}
