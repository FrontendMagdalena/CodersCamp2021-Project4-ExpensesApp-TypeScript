import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  padding: 10px 16px;
  align-items: center;
  background-color: #f8d478;

  @media screen and (min-width: 1280px){
    justify-content: space-between;
  }
`;

export const StyledIcon = styled.img`
  display: block;
  margin-right: 12px;
  width: 34px;
`;

export const StyledName = styled.h1`
  font-family: 'Fredoka One', sans-serif;
  font-size: 30px;
  color: #638e2b;
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`;
