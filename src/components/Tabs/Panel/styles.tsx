import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 30%;
  height: 25rem;
  border-radius: ${(props) => props.theme.style.borderRadius};
  background-color: yellow;
  margin: 10px;
`;
