import styled from "styled-components";

interface IProps {}

export const Container = styled.div<IProps>`
  width: ${(props) => props.theme.color.primary};
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.primary};
`;
