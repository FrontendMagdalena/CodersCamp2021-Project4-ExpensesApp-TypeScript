import styled from 'styled-components';

export const StyledLimitPage = styled.div`
  display: flex;
  flex-direction: column;
  color: #6a5f5f;

  & button {
    margin-top: 49px;
    margin-left: auto;
    margin-right: auto;
  }

  & button[type='arrow'] {
    margin-left: 0;
  }
`;

export const StyledLimitTitle = styled.h2`
  margin-top: 24px;
  margin-bottom: 35px;
  font-weight: 600;
  font-size: 29px;
  line-height: 47px;
`;

export const StyledLimitGroup = styled.div`
  margin-bottom: 30px;
`;

export const StyledLimitText = styled.p`
  font-size: 24px;
`;
