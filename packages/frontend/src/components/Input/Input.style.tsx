import styled from 'styled-components';
import glass from '../../assets/magnifying-glass.png';
import ArrowD from '../../assets/arrowd.png';
import Attach from '../../assets/attach.png';
import CreatableSelect from 'react-select/creatable';

export const StyledInput = styled.input`
  width: 100%;
  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  color: #6a5f5f;

  ${({ type }) =>
    type === 'search' &&
    `
      display: flex;
      width: 95%;
      font-size: 18px;
      
      &::placeholder {
        color: #6A5F5F;
      }
    `}

  &::-webkit-calendar-picker-indicator {
    margin: 0;
  } ;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 2px;
  margin-left: 10px;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  color: #6a5f5f;
`;

export const StyledInputGroup = styled.div<{icon: boolean}>`
  padding: 5px 10px;
  border: 2px solid #6a5f5f;
  border-radius: 15px;
  color: #6a5f5f;

  ${({ icon }) =>
    icon &&
    `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;

    & > button {
      background-image: url('${glass}');
      width: 22px;
      height: 22px;
    }
  `};
`;

// export const StyledInputGroupCategory = styled.div`
//   min-width: 158px;
//   padding: 2px 10px;
//   border: 2px solid #6a5f5f;
//   border-radius: 15px;
//
//   ${({ icon }) =>
//     icon &&
//     `
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 22px;
//
//     & > button {
//       background-image: url('${ArrowD}');
//       width: 33px;
//       height: 33px;
//     }
//   `};
// `;

export const StyledInputAttachment = styled.input`
  width: 100%;
  color: #6a5f5f;
  padding: 10px -50px;

  ${({ type }) =>
    type === 'file' &&
    `
      visibility: hidden;
    
    `}
`;
export const StyledInputGroupAttachment = styled.div<{icon: boolean}>`
  min-width: 158px;
  min-height: 50px;
  border: 2px solid #6a5f5f;
  border-radius: 15px;
  background-color: #e5e5e5;

  ${({ icon }) =>
    icon &&
    `
    position: relative;
    margin-bottom: 20px;
    background-image: url('${Attach}');
    background-repeat: no-repeat;
    background-position:center;
  `};
`;

export const StyledInputSelect = styled(CreatableSelect)`
  min-width: 158px;
  padding: 5px 10px;
  border: 2px solid #6a5f5f;
  border-radius: 15px;
  margin-bottom: 22px;
  color: #6a5f5f;
`;
