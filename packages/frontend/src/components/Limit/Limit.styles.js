import styled from 'styled-components';

export const StyledLimit = styled.div`
  position: absolute;
  top: 235px;
  left: 30px;
  right: 30px;
  margin-bottom: 21px;
  padding: 10px 32px 10px 37px;
  border: 3px solid #f4600c;
  border-radius: 20px;
  background-color: #fff;
  z-index: 1;

  @media screen and (min-width: 911px){
    left: auto;
    right: auto;
    width: 852px;
  }


  @media screen and (min-width: 1280px){
    top: 245px;
  }
`;

export const StyledIcon = styled.svg`
  position: absolute;
  content: '';
  top: 200px;
  right: 20px;
  cursor: pointer;

  @media screen and (min-width: 918px){
    left: auto;
    right: auto;
    transform: translateX(830px);
  }

  @media screen and (min-width: 1280px){
    top: 210px;
  }
`;

export const StyledText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #f4600c;
  text-align: center;
`;
