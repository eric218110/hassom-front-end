import * as React from "react";
import { Tabs as TabReact, TabList, TabPanel, Tab } from "react-tabs";
import {
  Container,
  ContainerTabList,
  Divider,
  TitlePanel,
  ContainerPanel,
  ContentPanel,
  PanelImage,
  DividerPanel,
  Real,
  Cents,
  SubtitlePrice,
  DescriptionPanel,
  ContainerPrice,
  BottomPanel,
} from "./styles";
import { TextButton } from "../library/Button";
import { items } from "./data";

interface IState {
  index: number;
}

export const Tabs: React.FC = () => {
  const [indexTab, setIndexTab] = React.useState<IState>({ index: 0 });
  const xPrice: number = 12;

  return (
    <Container>
      <TabReact
        selectedTabClassName={"selected"}
        defaultFocus={false}
        selectedIndex={indexTab.index}
        onSelect={(index: number) => {
          setIndexTab({
            index,
          });
        }}
      >
        <ContainerTabList>
          <TabList>
            {items.map(({ tabs }) =>
              tabs.map((tab) => (
                <Tab key={tab.key}>
                  <TextButton isElevation={false}>
                    <p>{tab.title}</p>
                  </TextButton>
                </Tab>
              ))
            )}
          </TabList>
        </ContainerTabList>
        <Divider></Divider>
        {items.map(({ panels }) =>
          panels.map((panel) => (
            <>
              <TabPanel key={panel.key}>
                <TitlePanel>{panel.title}</TitlePanel>
                <ContainerPanel>
                  {panel.products.map((product) => (
                    <ContentPanel key={product.id}>
                      <PanelImage urlImage={product.imageUrl} />
                      {console.log(product.imageUrl)}
                      <DividerPanel />
                      <BottomPanel>
                        <ContainerPrice>
                          <Real>
                            R$ {product.price.toFixed(2).split(".")[0]}
                          </Real>
                          <Cents>
                            {product.price.toFixed(2).split(".")[1]}
                          </Cents>
                        </ContainerPrice>
                        <SubtitlePrice>{`${xPrice.toString()}x R$ ${(
                          product.price / xPrice
                        ).toFixed(2)} ${
                          product.interest ? "Sem juros" : ""
                        }`}
                        </SubtitlePrice>
                        <DescriptionPanel>
                          {product.description}
                        </DescriptionPanel>
                      </BottomPanel>
                    </ContentPanel>
                  ))}
                </ContainerPanel>
              </TabPanel>
            </>
          ))
        )}
      </TabReact>
    </Container>
  );
};
