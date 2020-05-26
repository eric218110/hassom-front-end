import * as React from "react";
import {
  Container,
  ImageContainer,
  Image,
  BotoomCarrousel,
  ContainerText,
  Text,
  Subtitle,
  Actions,
} from "./styles";
import Carousel from "nuka-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RiExternalLinkLine } from "react-icons/ri";
import { IconButton, MotionIcon } from "../library/Button/styles";
import { data as dataItems } from "./data";

interface IState {
  slideIndex: number;
}

export const SliderHeader: React.FC = () => {
  const [slide, setSlide] = React.useState<IState>({ slideIndex: 0 });

  return (
    <React.Fragment>
      <Container>
        <Carousel
          slideIndex={slide.slideIndex}
          afterSlide={(slideIndex) => {
            setSlide({ slideIndex });
            if (slideIndex === 3) {
              setTimeout(() => {
                setSlide({ slideIndex: 0 });
              }, 3000);
            }
          }}
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
              <ContainerText>
                <Text>{content.text}</Text>
                <Subtitle>{content.subTitle}</Subtitle>
                <Actions>
                  <MotionIcon>
                    <IconButton solid>
                      <RiExternalLinkLine size={24} />
                    </IconButton>
                  </MotionIcon>
                </Actions>
              </ContainerText>
              <BotoomCarrousel />
            </ImageContainer>
          ))}
        </Carousel>
      </Container>
    </React.Fragment>
  );
};
