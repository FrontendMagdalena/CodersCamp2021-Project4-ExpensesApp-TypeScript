import styled, {css} from 'styled-components';

export const StyledRegisterPage = styled.main`
  display: flex;
  flex-direction: column;

  & button {
    display: block;
    margin: 0 auto;
    margin-top: 45px;
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
  position: relative;
  margin-bottom: 25px;
  font-weight: 600;
  font-size: 30px;
  color: #6a5f5f;
`;

export const StyledTextSpan = styled.span<{state: any}>`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-weight: normal;
  font-size: 20px;
  color: red;

  ${props => props.state === true && css`
    color: green;
  `}
`;

export const StyledMessage = styled.span`
  position: absolute;
  bottom: -20px;
  font-size: 16px;
  color: tomato;
`;

export const StyledValidation = styled.div`
  position: relative;
`;
