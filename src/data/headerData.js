import logo from "@/images/logo.png";
import logo2 from "@/images/logo.png";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    // subNavItems: [
    //   {
    //     id: 1,
    //     name: "Home One",
    //     href: "/",
    //   },
    //   {
    //     id: 2,
    //     name: "Home Two",
    //     href: "/home2",
    //   },
    //   {
    //     id: 3,
    //     name: "Header Styles",
    //     href: "/",
    //     subItems: [
    //       {
    //         id: 1,
    //         name: "Header One",
    //         href: "",
    //       },
    //       { id: 2, name: "Header Two", href: "" },
    //     ],
    //   },
    // ],
  },
  // {
  //   id: 2,
  //   name: "Destinations",
  //   href: "/destinations",
  //   subNavItems: [
  //     { id: 1, name: "Destinations", href: "/destinations" },
  //     { id: 2, name: "Destinations Detail", href: "/destinations-details" },
  //   ],
  // },
  {
    id: 3,
    name: "Tours",
    href: "/tours-list",
    subNavItems: [
      {
        id: 1,
        name: "Mostar, Blagaj Dervish House, Počitelj & Konjic - Day Tour from Sarajevo",
        href: "/tours-list",
      },
      { id: 2, name: "Jajce", href: "/jajce" },
      { id: 3, name: "InstaSarajevo", href: "/tour-details", new: true },
    ],
  },
  {
    id: 4,
    name: "Pages",
    href: "",
    subNavItems: [{ id: 1, name: "About", href: "/about" }],
  },
  // {
  //   id: 5,
  //   name: "News",
  //   href: "/news",
  //   subNavItems: [
  //     { id: 1, name: "News", href: "/news" },
  //     { id: 2, name: "News Details", href: "/news-details" },
  //   ],
  // },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  {
    icon: "fa-facebook-square",
    link: "https://www.facebook.com/AdventureInBosnia",
  },
  {
    icon: "fa-instagram",
    link: "https://www.instagram.com/adventureinbosnia/",
  },
  {
    icon: "fa-tripadvisor",
    link: "https://www.tripadvisor.com/Attraction_Review-g294450-d17640175-Reviews-or100-Adventure_in_Bosnia_Tours-Sarajevo_Sarajevo_Canton_Federation_of_Bosnia_an.html",
  },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+387 62 521 792",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "info@adventureinbosnia.ba",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;
