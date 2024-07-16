import styled from "styled-components";

export const ProfileContainer = styled.header`
  width: 100%;

  margin-top: -5.5rem;
  margin-bottom: 4.5rem;
`;

export const ProfileContent = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 2rem 2.5rem;

  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;

  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

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

export const ProfileInfo = styled.div`
  flex: 1;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-title"]};
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }
  > p {
    color: ${(props) => props.theme["base-text"]};
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

export const ProfileSummary = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["base-subtitle"]};
    line-height: 1.6;
  }

  svg {
    color: ${(props) => props.theme["base-label"]};
  }
`;
