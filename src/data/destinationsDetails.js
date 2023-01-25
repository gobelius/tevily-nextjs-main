import image from "@/images/resources/destinations-details-img-1.jpg";
import image2 from "@/images/resources/destinations-details__discount-img.jpg";

const text1 =
  "Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem Ipsum. Proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. vulputate cursus a sit amet mauris. Morbi accumsan ipsum veliam nec tellus a odio tincidunt auctor.";
const text2 =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some injected or words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,";

export const destinationsDetailsLeft = {
  image,
  discoverTitle: "Discover Spain",
  texts: [text1, text2],
  overviewTitle: "Overview",
  overviews: [
    {
      id: 1,
      left: "Country",
      right: "Americas",
    },
    {
      id: 2,
      left: "Visa Requirements",
      right: "Personal Documents Requied",
    },
    {
      id: 3,
      left: "Languages Spoken",
      right: "English",
    },
    {
      id: 4,
      left: "Currency Used",
      right: "USD",
    },
    {
      id: 5,
      left: "Area (km2)",
      right: "88.000 km2",
    },
  ],
  faqs: [
    {
      id: 1,
      question: "Why are your Tours so Expensive?",
      answer:
        "There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.",
    },
    {
      id: 2,
      question: "Why are your Tours so Expensive?",
      answer:
        "There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.",
    },
    {
      id: 3,
      question: "Why are your Tours so Expensive?",
      answer:
        "There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.",
    },
  ],
};

export const destinationsDetailsRight = {
  title: "Last Minute",
  lists: [
    {
      id: 1,
      image: "td-img-1.jpg",
      price: "380",
      title: "Africa 2 Days Tour",
      subtitle: "Los Angeles",
    },
    {
      id: 2,
      image: "td-img-2.jpg",
      price: "380",
      title: "Africa 2 Days Tour",
      subtitle: "Los Angeles",
    },
    {
      id: 3,
      image: "td-img-3.jpg",
      price: "380",
      title: "Africa 2 Days Tour",
      subtitle: "Los Angeles",
    },
  ],
  discount: {
    image: image2,
    percent: "30%",
    title: "Discount on Spain \n Tours",
  },
};
