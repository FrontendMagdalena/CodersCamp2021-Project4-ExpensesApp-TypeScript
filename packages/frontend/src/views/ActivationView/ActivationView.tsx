import { useParams, useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components/Button/Button';
import {
  StyledDiv,
  StyledHeading,
  StyledParagraph,
  StyledWaitingHeading,
} from './ActivationView.styles';
import { serverURL } from '../../utils/serverURL';
import { useEffect, useState } from 'react';

interface ActivationView {
  id: string;
}

const ActivationView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activationState, setActivationState] = useState<string>('loading');
    

  useEffect(() => {
    setActivationState('loading');

    fetch(`${serverURL}/api/v1/users/verify`, {
      method: 'POST',
      body: JSON.stringify({ userID: id }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code) setActivationState('success');
        else setActivationState('error');
      })
      .catch((error) => {
        console.log('Error:', error);
        setActivationState('serverError');
      });
  }, []);

  return (
    <StyledDiv>
      {activationState === 'loading' ? (
        <StyledWaitingHeading>Weryfikowanie..</StyledWaitingHeading>
      ) : (
        <>
          <StyledHeading success={activationState}>
            {activationState === 'success'
              ? 'Konto zostało aktywowane!'
              : activationState === 'error'
              ? 'Brak konta wymagającego aktywacji'
              : 'Problem z serwerem :('}
          </StyledHeading>
          <StyledParagraph>
            {activationState === 'success'
              ? 'Teraz już możesz zalogować się na swoje konto i zacząć kontrolować wydatki.'
              : activationState === 'error'
              ? 'Takie konto nie istnieje lub zostało już aktywowane.'
              : 'Wykryto problem podczas łączenia z serwerem, sprobój ponownie później.'}
          </StyledParagraph>
          <PrimaryButton
            className="xxx"
            text="Przejdź do logowania"
            isActive={true}
            onClick={() => navigate(`/login`)}
          />
        </>
      )}
    </StyledDiv>
  );
};

export default ActivationView;
