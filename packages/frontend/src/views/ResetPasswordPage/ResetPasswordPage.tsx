import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input/Input';
import { PrimaryButton } from '../../components/Button/Button';
import { IconButton } from '../../components/Button/Button';
import { EMAIL_VERIFICATION_REGEX } from '../../utils/helpers/validation.helpers';
import {
  StyledReset,
  StyledMessage,
  StyledTitle,
  StyledText,
  StyledValidation,
} from './ResetPasswordPage.styles';
import { serverURL } from '../../utils/serverURL';

export type FormInputs = {
  email: string;
  password: string;
  passwordSecond: string;
};
export default function ResetPasswordPage() {
  const [userEmail, setUserEmail] = useState('');
  const [messageTitle, setMessageTitle] = useState('Zapomniałeś hasła?');
  const [showLoginButton, setShowLoginButton] = useState(false);
  const [showResetButton, setShowResetButton] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data, event) => {
    const form = event?.target;

    setUserEmail(data.email);
    fetch(`${serverURL}/api/v1/users/reset-password`, {
      method: 'POST',
      body: JSON.stringify({ email: data.email }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    form.reset();
    setMessageTitle('Sprawdź swój e-mail');
    setShowLoginButton(true);
    setShowResetButton(false);
  };

  const onClickHandler = () => {
    navigate('/login');
  };

  return (
    <StyledReset>
      <IconButton type="arrow" onClick={() => navigate(-1)} />
      <StyledTitle>{messageTitle}</StyledTitle>
      {!userEmail ? (
        <StyledText>
          Podaj swój adres e-mail, a my wyślemy na niego e-mail z linkiem do
          ustawienia nowego hasła.
        </StyledText>
      ) : (
        <StyledText>
          Jeśli podany adres e-mail znajduje się w naszej bazie, to wysłaliśmy
          na niego wiadomość z linkiem do resetu hasła.
        </StyledText>
      )}
      {showResetButton && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledValidation>
            <Input
              type="email"
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
}
