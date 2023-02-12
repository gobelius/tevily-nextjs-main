import logo from "@/images/logo.png";

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

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "Tevily",
  about:
    "Welcome to our Trip and Tour Agency. Lorem simply text amet cing elit.",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "+387 62 521 792",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "info@adventureinbosnia.ba",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "Kovači 25, Sarajevo 71000",
    },
  ],
  companies: [
    { id: 1, link: "/about", title: "About Us" },
    { id: 2, link: "#", title: "Community Blog" },
    { id: 3, link: "#", title: "Rewards" },
    { id: 4, link: "#", title: "Work with Us" },
    { id: 5, link: "#", title: "Meet the Team" },
  ],
  explore: [
    { id: 1, link: "#", title: "Account" },
    { id: 2, link: "#", title: "Legal" },
    { id: 3, link: "#", title: "Contact" },
    { id: 4, link: "#", title: "Affilitate Program" },
    { id: 5, link: "#", title: "Privacy Policy" },
  ],
};

export default footerData;
