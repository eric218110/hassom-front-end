import * as React from "react";
import { Tabs as TabReact, TabList, TabPanel, Tab } from "react-tabs";
import {
  Container,
  ContainerTabList,
  Divider,
  TitlePanel,
  ContainerPanel,
} from "./styles";
import { PanelItem } from "./Panel";
import { TextButton } from "../library/Button";

interface IState {
  index: number;
}

const items = [
  {
    tabs: [
      {
        key: 1,
        title: "Cordas",
      },
      {
        key: 2,
        title: "Teclas",
      },
      {
        key: 3,
        title: "Percusão",
      },
    ],
    panels: [
      {
        key: 4,
        title: "Cordas",
        products: [
          {
            name: "Guitarra",
            price: "R$ 1.200.00",
          },
          {
            name: "Violão",
            price: "R$ 1.200.00",
          },
          {
            name: "Contra baixo",
            price: "R$ 1.200.00",
          },
        ],
      },
      {
        key: 5,
        title: "Teclas",
        products: [
          {
            name: "Piano",
            price: "R$ 1.200.00",
          },
          {
            name: "Teclado",
            price: "R$ 1.200.00",
          },
          {
            name: "Sanfona",
            price: "R$ 1.200.00",
          },
        ],
      },
      {
        key: 6,
        title: "Percursão",
        products: [
          {
            name: "Bateria",
            price: "R$ 1.200.00",
          },
          {
            name: "Pandeiro",
            price: "R$ 1.200.00",
          },
          {
            name: "Surdo",
            price: "R$ 1.200.00",
          },
          {
            name: "Bateria",
            price: "R$ 1.200.00",
          },
          {
            name: "Pandeiro",
            price: "R$ 1.200.00",
          },
          {
            name: "Surdo",
            price: "R$ 1.200.00",
          },
        ],
      },
    ],
  },
];

export const Tabs: React.FC = () => {
  const [indexTab, setIndexTab] = React.useState<IState>({ index: 0 });

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
                    <PanelItem>{product.name}</PanelItem>
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
