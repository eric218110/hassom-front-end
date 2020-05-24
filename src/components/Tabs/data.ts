export interface IProducts {
  name: string;
  price: string;
}

export interface ITab {
  key: string;
  title: string;
}

export interface IPanel {
  key: string;
  title: string;
  products: IProducts[];
}

export interface IItems {
  tabs: ITab[];
  panels: IPanel[];
}

export const items: IItems[] = [
  {
    tabs: [
      {
        key: "1",
        title: "Tab 1",
      },
    ],
    panels: [
      {
        key: "1",
        title: "Panel 1",
        products: [
          {
            name: "Product 1",
            price: "R$ 10.00",
          },
          {
            name: "Product 12",
            price: "R$ 120.00",
          },
          {
            name: "Product 13",
            price: "R$ 130.00",
          },
          {
            name: "Product 14",
            price: "R$ 140.00",
          },
          {
            name: "Product 15",
            price: "R$ 150.00",
          },
        ],
      },
    ],
  },
  {
    tabs: [
      {
        key: "2",
        title: "Tab 2",
      },
    ],
    panels: [
      {
        key: "2",
        title: "Panel 2",
        products: [
          {
            name: "Product 2",
            price: "R$ 20.00",
          },
        ],
      },
    ],
  },
  {
    tabs: [
      {
        key: "3",
        title: "Tab 3",
      },
    ],
    panels: [
      {
        key: "3",
        title: "Panel 3",
        products: [
          {
            name: "Product 3",
            price: "R$ 30.00",
          },
        ],
      },
    ],
  },
  {
    tabs: [
      {
        key: "4",
        title: "Tab 4",
      },
    ],
    panels: [
      {
        key: "4",
        title: "Panel 4",
        products: [
          {
            name: "Product 4",
            price: "R$ 40.00",
          },
        ],
      },
    ],
  },
];
