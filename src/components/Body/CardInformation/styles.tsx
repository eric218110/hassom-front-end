import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const Text = styled.p`
  text-transform: uppercase;
  margin-left: 5px;
  color: ${(prpos) => prpos.theme.color.text.default};
`;
