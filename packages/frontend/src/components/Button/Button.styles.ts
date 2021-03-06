import styled, {css} from 'styled-components';
import Arrow from '../../assets/arrow.png';
import ArrowD from '../../assets/arrowd.png';
import Add from '../../assets/add.png';
import Glass from '../../assets/mglass.png';
import Edit from '../../assets/edit.png';
import Delete from '../../assets/delete.png';

export const PrimaryStyledButton = styled.button<{
    isActive: boolean,
    onClick?: () => void,
    alert?: boolean,
}>`
  padding: 12px 10px;
  margin: 15px auto 30px;
  width: 271px;
  height: 64px;
  background-color: ${(props) => (props.isActive ? '#638e2b' : '#8B8484')};
  color: #ffffff;
  border: none;
  border-radius: 30px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 26px;
  
  ${(props) =>
          props.alert &&
          css`
            margin: 0;
            min-width: unset;
            width: 100%;

            @media screen and (min-width: 1280px) {
              max-width: 271px;
            }
          `}
`;

export const ExpensesStyledButton = styled.button.attrs((props) => ({
    text: props.className,
}))<{isActive: boolean}>`
  background-color: ${(props: any) => (props.isActive ? '#F4600C' : '#FFFFFF')};
  color: ${(props: any) => (props.isActive ? '#FFFFFF' : '#F4600C')};
  border: ${(props: any) => (props.isActive ? 'none' : '3px solid #8B8484')};
  padding: 5px 10px;
  min-width: 122px;
  height: 36px;
  border-radius: 30px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 15px;
  //align-items: center;
  margin-top: 15px;
`;

export const IncomeStyledButton = styled(ExpensesStyledButton).attrs({
    text: 'Przychody',
})`
  background-color: ${(props) => (props.isActive ? '#638E2B' : '#FFFFFF')};
  color: ${(props) => (props.isActive ? '#FFFFFF' : '#638E2B')};
  border: ${(props) => (props.isActive ? 'none' : '3px solid #8B8484')};
`;

export const StyledIconButton = styled.button<any>`
  width: 45px;
  height: 45px;

  ${({type}) =>
          type === 'arrow' &&
          `
        background-image: url('${Arrow}');
        background-size: 45px 45px;
        background-repeat: no-repeat;
        margin-top: 5px;
        margin-left: -20px;    
  `};
  ${({type}) =>
          type === 'arrowd' &&
          `
        background-image: url('${ArrowD}');
        background-size: 45px 45px;
        background-repeat: no-repeat;
  `}
  ${({type}) =>
          type === 'add' &&
          `
        background-image: url('${Add}');
        background-size: 45px 45px;
        background-repeat: no-repeat;
  `}
  ${({type}) =>
          type === 'glass' &&
          `
        background-image: url('${Glass}');
        background-size: 22px 22px;
        background-repeat: no-repeat;
  `}
  ${({type}) =>
          type === 'edit' &&
          `
        background-image: url('${Edit}');
        background-size: 42px 42px;
        background-repeat: no-repeat;
  `}
  ${({type}) =>
          type === 'delete' &&
          `
        background-image: url('${Delete}');
        background-size: 42px 42px;
        background-repeat: no-repeat;
  `}
`;

export const StyledIconButtonWrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px;
`;

export const StyledIconButtonText = styled.p`
  margin-right: 10px;
  font-size: 30px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 600;
`;

export const StyledIconAddButton = styled.img<{isSmall: boolean}>`
  width: 36px;
  height: 36px;
`;
