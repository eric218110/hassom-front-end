export interface IDataCarrouselItem {
  text: string;
  textColor: string;
  imageUrl: string;
  subTitle: string;
}

export interface IDataCarrouselItems {
  id: string;
  content: IDataCarrouselItem;
}

export const data: IDataCarrouselItems[] = [
  {
    id: "1",
    content: {
      text: "Text 1",
      textColor: "color",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_960_720.jpg",
      subTitle: "subTitle 1",
    },
  },
  {
    id: "2",
    content: {
      text: "Text 2",
      textColor: "color",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/06/29/01/47/piano-3505109_960_720.jpg",
      subTitle: "subTitle 2",
    },
  },
  {
    id: "3",
    content: {
      text: "Text 3",
      textColor: "color",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_960_720.jpg",
      subTitle: "subTitle 3",
    },
  },
  {
    id: "4",
    content: {
      text: "Text 4",
      textColor: "color",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/22/19/15/dark-1850120_960_720.jpg",
      subTitle: "subTitle 4",
    },
  },
];
