import styled from "styled-components";

export const ItemBox = styled.div`
    display: flex;
    justify-content: space-around; 
    width: 100%;
    height: 43px;
    margin-top: 10px; 
    margin-bottom: 10px;
    // TODO Add colors depending on category  
    background-color: #A7C97C; 
    border-radius: 15px;
    cursor: pointer;

    &:hover{
      background-color: #91BD59;
      box-shadow: 0px 0px 6px 1px black;
    }
`;
export const FirstColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 55%;
`;
export const SecondColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    padding-right: 10px;
`;
export const ThirdColumn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const StyledText = styled.p`
    display: flex;
    align-self: flex-start; 
    font-size: 13px;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800; 
    color: #6A5F5F; 
    padding-left: 20px;
`;
export const StyledText2 = styled.p`
    display: flex;
    align-self: flex-start; 
    align-self: center;
    font-size: 13px;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800; 
    color: #6A5F5F;
`;
export const StyledTitle = styled.p`
    font-size: 13px;
    font-family: 'Baloo 2', sans-serif;
    color: #6A5F5F;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 90%;
    padding-left: 20px;
`;
export const StyledAmount = styled.p`
    display: flex;
    font-size: 15px;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 600; 
    color: ${(props) => (props.isExpense ? '#F4600C' : '#05510D')};
    align-self: center;
`;
export const StyledIcon = styled.img`
    margin-right: 8px;
    cursor: pointer;
    border-radius: 50%;
    &:hover{
      box-shadow: 0px 0px 5px 0px black;
    }
`;