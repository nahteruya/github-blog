import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme["base-post"]};
  padding: 2rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    line-clamp: 4;
    -webkit-box-orient: vertical;

    color: ${(props) => props.theme["base-text"]};
  }
`;

export const CardHeader = styled.header`
  display: flex;
  gap: 1rem;
  align-items: center;

  h3 {
    flex: 1;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.6;
    color: ${(props) => props.theme["base-title"]};
  }

  time {
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${(props) => props.theme["base-span"]};
  }
`;
