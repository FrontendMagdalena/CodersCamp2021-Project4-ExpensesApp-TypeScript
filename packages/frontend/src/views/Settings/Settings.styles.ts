import styled from 'styled-components';

export const StyledSettingsPage = styled.div`
  display: flex;
  flex-direction: column;
  color: #6a5f5f;

  & button {
    display: block;
    margin: 0 auto;
    margin-top: 45px;
  }

  & button[type='arrow'] {
    margin-left: 0;
  }
`;

export const StyledChangePassword = styled.h2`
  margin-top: 24px;
  margin-bottom: 35px;
  font-weight: 600;
  font-size: 29px;
  line-height: 47px;
`;

export const StyledValidation = styled.div`
  position: relative;
`;

export const StyledMessage = styled.span`
  position: absolute;
  bottom: -20px;
  font-size: 16px;
  color: tomato;
`;
