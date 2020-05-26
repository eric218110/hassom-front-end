import styled from "styled-components";

interface IImageProps {
  urlImage: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  width: ${(props) => props.theme.size.container};
`;

export const ContainerPanel = styled.div`
  border-radius: ${(props) => props.theme.style.borderRadius};
  display: flex;
  height: auto;
  justify-content: center;
  background-color: ${(props) => props.theme.color.background.default};
  flex-wrap: wrap;
  flex-direction: row;
`;

export const ContainerTabList = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li p {
    z-index: 1;
    border-radius: ${(props) => props.theme.style.borderRadius};
    padding: 5px 40px;
    text-transform: uppercase;
    font-size: 14px;
    :hover {
      cursor: pointer;
    }
  }

  ul .selected {
    z-index: 1;
    border-bottom: ${(props) => props.theme.color.primary} 2.5px solid;
  }

  ul .selected p {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const Divider = styled.div`
  height: 3px;
  width: 100%;
  margin: auto;
  background-color: ${(props) => props.theme.color.background.hover};
  margin-top: -2.5px;
`;

export const TitlePanel = styled.p`
  margin-top: -17px;
  margin-bottom: 15px;
  width: 30%;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.primary};
`;

export const ContentPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 17%;
  height: 20rem;
  border-radius: ${(props) => props.theme.style.borderRadius};
  background-color: ${(props) => props.theme.color.background.default};
  margin: 10px;
  box-shadow: 0 1px 2px ${(props) => props.theme.color.background.paper},
    0 1px 2px ${(props) => props.theme.color.background.paper};
  :hover {
    box-shadow: 0 10px 20px ${(props) => props.theme.color.background.paper},
      0 1px 2px ${(props) => props.theme.color.background.paper};
  }
`;
export const PanelImage = styled.img<IImageProps>`
  flex: 1;
  background-image: url(${(props) => props.urlImage});
  background-position: center;
  background-size: cover;
`;

export const DividerPanel = styled.div`
  height: 3px;
  width: 100%;
  margin: auto;
  background-color: ${(props) => props.theme.color.background.default};
`;

export const BottomPanel = styled.div`
  width: 100%;
  padding: 20px;
`;

export const ContainerPrice = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
`;

export const Real = styled.h1`
  font-size: 20px;
  align-self: baseline;
`;

export const Cents = styled.h4`
  font-size: 10px;
  margin-top: 0.2rem;
`;

export const SubtitlePrice = styled.h6``;

export const DescriptionPanel = styled.p`
  margin-top: 20px;
  font-size: 12px;
`;
