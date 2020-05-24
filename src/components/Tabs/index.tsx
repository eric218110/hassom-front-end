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
import { items } from "./data";

interface IState {
  index: number;
}

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
                    <PanelItem key={product.name}>{product.name}</PanelItem>
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
