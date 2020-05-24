import styled from "styled-components";

interface IImageProps {
  src: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.color.ripple};
`;

export const BotoomCarrousel = styled.div`
  cursor: default;
  background-color: ${(props) => props.theme.color.primary};
  background: linear-gradient(
    104deg,
    ${(props) => props.theme.color.primary} 15%,
    ${(props) => props.theme.color.background.default} 100%
  );
  width: 100%;
  height: 100%;
  opacity: 20%;
  position: absolute;
  bottom: 0%;
`;

export const ContainerText = styled.div`
  position: absolute;
  height: 50%;
  width: 100%;
  bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  cursor: default;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 28rem;
`;

export const Image = styled.div<IImageProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
`;

export const Text = styled.h1`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => props.theme.color.text.secundary};
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${(prpos) => prpos.theme.color.text.secundary};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: inherit;
  font-style: italic;
  text-transform: lowercase;
  letter-spacing: 0.3rem;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
