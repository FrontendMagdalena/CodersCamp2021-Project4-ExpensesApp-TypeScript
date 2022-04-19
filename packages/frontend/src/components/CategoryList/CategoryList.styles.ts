import styled from 'styled-components';

export const StyledList = styled.div`
  display: flex;
  padding: 20px 0;
  overflow-x: scroll;
  //FF browser
  scrollbar-width: auto;
  scrollbar-color: #638e2b transparent;
  gap: 10px;
  align-items: center;
  
  //other browsers
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track{
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #638e2b;
    border-radius: 10px;
  }
`;
