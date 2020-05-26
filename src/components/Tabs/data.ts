export interface IProducts {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  interest: boolean;
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
            id: "1",
            name: "Product 1",
            price: 10.0,
            description: "Product description 1",
            imageUrl:
              "https://media.fanaticguitars.com/2016/05/alhambra-4p-1.jpg",
            interest: false,
          },
          {
            id: "2",
            name: "Product 12",
            price: 120.0,
            description: "Product description 2",
            imageUrl:
              "https://media.fanaticguitars.com/2016/05/alhambra-4p-1.jpg",
            interest: true,
          },
          {
            id: "3",
            name: "Product 13",
            price: 130.0,
            description: "Product description 3",
            imageUrl:
              "https://media.fanaticguitars.com/2016/05/alhambra-4p-1.jpg",
            interest: true,
          },
          {
            id: "4",
            name: "Product 14",
            price: 140.0,
            description: "Product description 4",
            imageUrl:
              "https://media.fanaticguitars.com/2016/05/alhambra-4p-1.jpg",
            interest: false,
          },
          {
            id: "5",
            name: "Product 15",
            price: 150.0,
            description: "Product description 5",
            imageUrl:
              "https://media.fanaticguitars.com/2016/05/alhambra-4p-1.jpg",
            interest: false,
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
            id: "7",
            name: "Product 2",
            price: 20.0,
            description: "Product description 2",
            imageUrl:
              "https://media.fanaticguitars.com/2016/05/alhambra-4p-1.jpg",
            interest: false,
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
            id: "8",
            name: "Product 3",
            price: 30.0,
            description: "Product description 3",
            imageUrl:
              "https://media.fanaticguitars.com/2016/05/alhambra-4p-1.jpg",
            interest: false,
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
            id: "9",
            name: "Product 4",
            price: 40.0,
            description: "Product description 4",
            imageUrl:
              "https://media.fanaticguitars.com/2016/05/alhambra-4p-1.jpg",
            interest: false,
          },
        ],
      },
    ],
  },
];
