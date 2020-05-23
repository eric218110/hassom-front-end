import * as React from "react";
import {
  Container,
  ImageContainer,
  Image,
  BotoomCarrousel,
  ContainerText,
} from "./styles";
import Carousel from "nuka-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IconButton } from "../library/Button/styles";
import { data as dataItems } from "./data";

export const SliderHeader: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <Carousel
          autoplayInterval={5000}
          autoplayReverse
          scrollMode={"remainder"}
          enableKeyboardControls
          autoplay={true}
          transitionMode={"fade"}
          height={"100%"}
          defaultControlsConfig={{
            pagingDotsStyle: {
              paddingLeft: "5px",
            },
          }}
          renderCenterLeftControls={({ previousSlide }) => (
            <IconButton disabled onClick={previousSlide}>
              <AiOutlineLeft size={34} />
            </IconButton>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <IconButton onClick={nextSlide}>
              <AiOutlineRight size={34} />
            </IconButton>
          )}
        >
          {dataItems.map(({ id, content }) => (
            <ImageContainer key={id}>
              <Image src={content.imageUrl} />
              <ContainerText />
              <BotoomCarrousel />
            </ImageContainer>
          ))}
        </Carousel>
      </Container>
    </React.Fragment>
  );
};
