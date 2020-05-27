import styled from "styled-components";
interface IPropsText {
  center?: boolean;
}

interface IPropsImageRight {
  url: string;
}

export const Container = styled.div`
  display: flex;
  height: 33rem;
  flex-direction: column;
  width: ${(props) => props.theme.size.container};
  align-items: flex-start;
  justify-content: space-between;
  margin: auto;
`;

export const FooterTop = styled.div`
  padding: 3rem 0 3rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 90%;
  width: ${(props) => props.theme.size.container};
`;

export const Text = styled.h6<IPropsText>`
  color: ${(props) => props.theme.color.text.primary};
  font-size: 14px;
  margin: 0.5rem 0 0.5rem 0;
  font-stretch: narrower;
  width: 100%;
  text-align: ${(props) => (props.center ? "center" : "start")};
`;

export const TitleName = styled.h1`
  top: 0;
  align-self: center;
  color: ${(props) => props.theme.color.primary};
  margin-bottom: 1rem;
`;

export const Title = styled.h4`
  color: ${(props) => props.theme.color.text.strong};
  font-weight: bold;
  font-size: 15px;
  margin: 0 0 0.8rem 0;
`;

export const ItemsColunms = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20%;
  width: ${(props) => props.theme.size.container};
`;

export const ItemFooterBottom = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.text.secundary};
  margin: 20px;
  :hover {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const ItemLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  justify-items: center;
  max-width: 15%;
  max-height: 60%;
`;

export const SocialActionsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const ItemRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 10%;
  max-height: 60%;
`;

export const ImageRight = styled.div<IPropsImageRight>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
`;

export const TextRight = styled.p`
  margin-top: 10px;
  letter-spacing: 1px;
`;

export const SubTitleRight = styled.a`
  font-size: 13px;
  margin: 10px 0 10px 0;
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.primary};
  }
`;
