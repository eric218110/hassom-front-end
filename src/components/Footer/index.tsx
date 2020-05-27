import * as React from "react";
import {
  Container,
  FooterBottom,
  FooterTop,
  ItemsColunms,
  TitleName,
  Title,
  Text,
  ItemLeftContainer,
  SocialActionsContainer,
  ItemRightContainer,
  ImageRight,
  TextRight,
  SubTitleRight,
  ItemFooterBottom,
} from "./styles";
import { Divider } from "../Tabs/styles";
import { Link } from "react-router-dom";
import { data } from "./data";
import { FiInstagram } from "react-icons/fi";
import { MdHeadset } from "react-icons/md";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { IconButton } from "../library/Button/styles";

export const Footer: React.FC = () => {
  return (
    <Container>
      <FooterTop>
        <ItemLeftContainer>
          <ItemsColunms>
            <TitleName>Hasssom</TitleName>
            <Text center>
              Hassom is the world’s leading community for creatives to share,
              grow, and get hired.
            </Text>
            <SocialActionsContainer>
              <IconButton>
                <MdHeadset />
              </IconButton>
              <IconButton>
                <FaTwitter />
              </IconButton>
              <IconButton>
                <AiFillFacebook />
              </IconButton>
              <IconButton>
                <FiInstagram />
              </IconButton>
              <IconButton>
                <RiGithubLine />
              </IconButton>
            </SocialActionsContainer>
          </ItemsColunms>
        </ItemLeftContainer>
        {data.map((items) => (
          <ItemsColunms>
            <Title>{items.title}</Title>
            {items.items.map((item) => (
              <Link to={item.link}>
                <Text>{item.name}</Text>
              </Link>
            ))}
          </ItemsColunms>
        ))}
        <ItemRightContainer>
          <ImageRight
            url={
              "https://images.pexels.com/photos/2111856/pexels-photo-2111856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=320&w=100"
            }
          />
          <TextRight>Somos apaioxados por música assim como vc</TextRight>
          <SubTitleRight href={"https://github.com/eric218110/"}>
            Veja nosso trabalho
          </SubTitleRight>
        </ItemRightContainer>
      </FooterTop>
      <Divider />
      <FooterBottom>
        <ItemFooterBottom>
          © {new Date().getFullYear()} Hassom. All rights reserved.
        </ItemFooterBottom>
        <ItemFooterBottom>Made with ♥ remotely from Brazil</ItemFooterBottom>
        <ItemFooterBottom>
          <SubTitleRight>11,619,204 shots dribbbled</SubTitleRight>
          <MdHeadset size={18} />
        </ItemFooterBottom>
      </FooterBottom>
    </Container>
  );
};
