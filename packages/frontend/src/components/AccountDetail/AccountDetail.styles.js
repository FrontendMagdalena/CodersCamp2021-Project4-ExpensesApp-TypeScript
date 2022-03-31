import styled from "styled-components";

export const DetailContainer = styled.div`
    min-width: 260px;
    margin-top: 35px;
    margin-bottom: 100px;
    padding: 25px 19px 45px 22px;
    border: 3px solid #6a5f5f;
    border-radius: 20px;
`;

export const NameOfExpense = styled.div`
    font-size: 26px;
    font-family: 'Baloo 2', sans-serif;
    color: #6A5F5F;
    padding-bottom: 19px;
    text-align: center;
`;

export const ColumnContainer = styled.div`
    font-family: 'Baloo 2', sans-serif;
    color: #6A5F5F;
    line-height: 1.4; 
`;

export const BoldText = styled.p`
    font-size: 16px;
    font-weight: 800; 
    line-height: 2; 
`;

export const PropsRow = styled.p`
    font-size: 18px;
`;

export const StyledAmountColor = styled.p` 
    color: ${(props) => (props.isExpense ? '#F4600C' : '#05510D')};
    font-weight: 600; 
    font-size: 20px;
`;

export const ConfirmationStyle = styled.div`
    font-size: 18px;
    color: #83BEF5;
    text-decoration: underline;
`;

export const IconsContainer = styled.div`
    display: flex; 
    justify-content: center;
    column-gap: 70px;
    padding-top: 20px;
`;

export const StyledImg = styled.img`
  cursor: pointer;
`;

