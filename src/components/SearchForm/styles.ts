import styled from "styled-components";

export const SearchContainer = styled.section`
  width: 100%;
  margin-bottom: 3rem;
`;

export const SearchContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    height: 50px;
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme["base-text"]};
    line-height: 1.6;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme["blue"]};
    }
  }
`;

export const SearchHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-subtitle"]};
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
    line-height: 1.6;
  }
`;
