import  styled  from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: ${(prpos) => prpos.theme.size.max};
  height: 6rem;
  margin: auto;
  align-items: center;
`;
