import styled from "styled-components";

export const StyledNav = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 0 36px;
  background-color: #F8D478;
  z-index: 6;

  @media screen and (min-width: 1280px){
    position: static;
    padding: 0;
    width: auto;
  }
`;

export const StyledLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: #6A5F5F;
  border-radius: 25px;

  @media screen and (min-width: 1280px){
    display: none;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  padding: 10px 0 26px;
  flex-direction: column;

  @media screen and (min-width: 1280px){
    flex-direction: row;
    justify-content: flex-end;
    padding: 0;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  padding: 14px;
  align-items: center;
  cursor: pointer;

  &:hover{
    background-color: #eecc74;
  }
`;

export const StyledIcon = styled.img`
  display: block;
  margin-right: 24px;
  width: 45px;

  @media screen and (min-width: 1280px){
    width: 38px;
    margin-right: 18px;
  }
`;

export const StyledName = styled.p`
  font-size: 30px;

  @media screen and (min-width: 1280px){
    font-size: 24px;
    /* display: none; */
  }
`;