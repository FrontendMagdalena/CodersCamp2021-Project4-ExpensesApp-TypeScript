import styled from 'styled-components';

export const StyledHomepage = styled.main`
  min-height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const StyledHeader = styled.div`
  & > img {
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 40px;
  }

  & > h1 {
    margin-bottom: 20px;
    font-size: 26px;
    line-height: 41px;
    color: #6a5f5f;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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

export const ButtonsGroup = styled.div`
  & > p {
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 24px;
    line-height: 38px;
    color: #6a5f5f;
  }
`;
