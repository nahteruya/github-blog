import styled from "styled-components";

export const PostPageContainer = styled.main`
  width: 100%;
  padding: 0 1.5rem;
  max-width: 864px;
  margin: 0 auto;
`;

export const PostContent = styled.div`
  width: 100%;
  padding: 2.5rem 2rem;

  color: ${(props) => props.theme["base-text"]};
  line-height: 1.6;

  p {
    margin-bottom: 1rem;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme["blue"]};
  }

  pre {
    padding: 1rem;
    background: ${(props) => props.theme["base-post"]};
    border-radius: 2px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
