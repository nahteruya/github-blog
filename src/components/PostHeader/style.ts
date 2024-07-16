import styled from "styled-components";

export const PostHeaderContainer = styled.header`
  width: 100%;

  margin-top: -5.5rem;

  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;

  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;

    margin-bottom: 0.5rem;
  }
`;

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.75rem;
    font-weight: bold;
    line-height: 1.6;
    color: ${(props) => props.theme["blue"]};

    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.3s;
  }

  a:hover {
    border-bottom: 1px solid ${(props) => props.theme["blue"]};
  }
`;

export const PostInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["base-span"]};
    line-height: 1.6;
  }

  svg {
    color: ${(props) => props.theme["base-label"]};
  }
`;
