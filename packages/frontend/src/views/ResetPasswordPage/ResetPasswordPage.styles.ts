import styled from 'styled-components';

export const StyledReset = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & button:nth-child(2n) {
    display: block;
    margin: 0 auto;
  }

  & form > button {
    display: block;
    margin: 0 auto;
  }
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

export const StyledTitle = styled.h2`
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: 600;
  font-size: 30px;
  color: #6a5f5f;
`;

export const StyledText = styled.p`
  margin-bottom: 25px;
  font-weight: 600;
  font-size: 20px;
  color: #6a5f5f;
  text-align: justify;
`;
