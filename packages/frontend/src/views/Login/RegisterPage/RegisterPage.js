/* eslint-disable */
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AccountsContext } from '../../../reducers/accounts.reducer';
import { PrimaryButton } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';
import {
  StyledRegisterPage,
  StyledLogo,
  StyledIcon,
  StyledTitle,
  StyledText,
  StyledValidation,
  StyledTextSpan,
} from './RegisterPage.styles';
import icon from '../../../assets/Icon.png';
import { EMAIL_VERIFICATION_REGEX } from '../../../utils/helpers/validation.helpers';
import { StyledMessage } from '../LoginPage/LoginPage.styles';
import { useContext, useState } from 'react';
import { serverURL } from '../../../utils/serverURL';

export default function LoginPage() {
  const { users } = useContext(AccountsContext);
  const navigate = useNavigate();
  const [userMessage, setUserMessage] = useState('');
  const [registerState, setRegisterState] = useState({
    show: false,
    state: false,
    msg: '',
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (userData, event) => {
    const form = event.target;
    if (userData.password === userData.passwordSecond) {
      fetch(`${serverURL}/api/v1/users/register`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code) {
            form.reset()
            setRegisterState({
              show: true,
              state: true,
              msg: 'Na podany adres email został wysłany link do aktywacji konta.',
            });
          } else {
            form.reset()
            setRegisterState({
              show: true,
              state: false,
              msg: 'Konto z takim adresem email już istnieje.',
            });
          }
        })
        .catch((error) => {
          form.reset()
          console.log('Error:', error);
          setRegisterState({
            show: true,
            state: false,
            msg: 'Wykryto problem podczas łączenia z serwerem, sprobój ponownie później.',
          });
        });

      // navigate('/main');
    } else {
      setUserMessage('Podane hasła muszą być identyczne');
    }
  };

  return (
    <StyledRegisterPage>
      <StyledLogo>
        <StyledIcon src={icon} />
        <StyledTitle>crooge</StyledTitle>
      </StyledLogo>
      <StyledText>
        Rejestracja:{' '}
        {registerState.show ? (
          <StyledTextSpan state={registerState.state}>
            {registerState.msg}
          </StyledTextSpan>
        ) : null}
      </StyledText>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledValidation>
          <Input
            type="text"
            name="email"
            inputLabel="e-mail:"
            {...register('email', {
              required: 'Adres e-mail jest wymagany',
              pattern: {
                value: EMAIL_VERIFICATION_REGEX,
                message: 'Adres e-mail jest wymagany',
              },
            })}
          />
          <StyledMessage>{errors.email?.message}</StyledMessage>
        </StyledValidation>
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
        <PrimaryButton className="xxx" text="Rejestracja" isActive={true} />
      </form>
    </StyledRegisterPage>
  );
}
