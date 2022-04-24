import styled from 'styled-components';

export const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;

  & button {
    display: block;
    margin: 0 auto;
    margin-top: 45px;
  }

  & button:nth-child(2n) {
    margin-top: 0;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const StyledIcon = styled.img`
  display: inline;
  width: 55px;
`;

export const StyledTitle = styled.h2`
  display: inline;
  font-family: Fredoka One;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  color: #efb82b;
`;

export const StyledText = styled.h3`
  margin-bottom: 25px;
  font-weight: 600;
  font-size: 30px;
  color: #6a5f5f;
`;

export const StyledMessage = styled.span`
  position: absolute;
  bottom: -20px;
  font-size: 16px;
  color: tomato;
`;

export const StyledResetText = styled.span`
  display: block;
  margin-top: 22px;
  margin-bottom: 10px;
  font-weight: 800;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #6a5f5f;
`;
export const StyledValidation = styled.div`
  position: relative;
`;

export const StyledUserNotExists = styled.span`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: tomato;
`;
