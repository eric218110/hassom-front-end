interface item {
  link: string;
  name: string;
}

export interface Columns {
  title: string;
  items: item[];
}

export const data: Columns[] = [
  {
    title: "For designers",
    items: [
      {
        link: "pro",
        name: "Go Pro!",
      },
      {
        link: "",
        name: "Explore design work",
      },
      {
        link: "",
        name: "Design blog",
      },
      {
        link: "",
        name: "Overtime podcast",
      },
      {
        link: "",
        name: "Dribbble meetups",
      },
      {
        link: "",
        name: "Playoffs",
      },
      {
        link: "",
        name: "Code of conduct",
      },
    ],
  },
  {
    title: "Hire designers",
    items: [
      {
        link: "",
        name: "Post a job opening",
      },
      {
        link: "",
        name: "Search for designers",
      },
      {
        link: "",
        name: "Brands",
      },
      {
        link: "",
        name: "Advertise with us",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        link: "",
        name: "About",
      },
      {
        link: "",
        name: "Careers",
      },
      {
        link: "",
        name: "Support",
      },
      {
        link: "",
        name: "Media kit",
      },
      {
        link: "",
        name: "Dribbble shop",
      },
      {
        link: "",
        name: "Testimonials",
      },
      {
        link: "",
        name: "Terms of service",
      },
      {
        link: "",
        name: "Privacy policy",
      },
    ],
  },
  {
    title: "Directories",
    items: [
      {
        link: "",
        name: "Top designers",
      },
      {
        link: "",
        name: "Top design teams",
      },
      {
        link: "",
        name: "Design jobs",
      },
      {
        link: "",
        name: "Tags",
      },
      {
        link: "",
        name: "Places",
      },
      {
        link: "",
        name: "Design assets",
      },
      {
        link: "",
        name: "Shop Creative Market",
      },
    ],
  },
];
