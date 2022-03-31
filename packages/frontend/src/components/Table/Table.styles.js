import styled from 'styled-components';

export const StyledTable = styled.table`
  min-width: 258px;
  width: 100%;
  margin: 25px auto;
  padding: 9px 15px;
  font-size: 24px;
  border: 2px solid #6a5f5f;
  border-radius: 15px;
  border-collapse: separate;
  border-spacing: 0;

  & tr:first-of-type > td {
    border-bottom: 1px solid #8b8484;
  }

  & tr:nth-child(even) {
    color: #f4600c;
  }

  & tr:nth-child(2n + 3),
  td:nth-child(2n + 3) {
    color: #638e2b;
  }

  & td:nth-child(1) {
    padding-top: 4px;
    padding-right: 10px;
    border-right: 1px solid #8b8484;
  }
  & td:nth-child(2) {
    padding-left: 8px;
  }
`;
