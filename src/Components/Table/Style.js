import styled from "styled-components";

export const TableContainer = styled.div`
  overflow-x: auto;
  margin: 0.625rem 0;
  & table {
    width: 100%;
    min-width: 37.5rem;

    @media (max-width: 48rem) {
      min-width: 100%;
      font-size: 0.875rem;
      & th,
      & td {
        padding: 0.625rem;
      }
    }
  }
`;
