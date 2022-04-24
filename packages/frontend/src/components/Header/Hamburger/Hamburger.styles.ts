import styled, { css } from "styled-components";

export const StyledBurger = styled.div<{active: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
  width: 46px;
  height: 32px;
  cursor: pointer;

  ${(props) => props.active && css`
    position: relative;
    & > div {
      position: absolute;
      /* width: 90%; */
      top: 50%;
      left: 0;
      transform: translateY(-50%) rotate(45deg);
      &:last-child {
        transform: translateY(-50%) rotate(-45deg);
      }
    }
  `}
`;

export const StyledLine = styled.div`
  width: 100%;
  height: 6px;
  background-color: #6A5F5F;
  border-radius: 25px;
`;
