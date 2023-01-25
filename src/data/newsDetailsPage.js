import image2 from "@/images/blog/author-1-1.jpg";
import image from "@/images/blog/news-details-img-1.jpg";

const text1 =
  " Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem Ipsum. Proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. vulputate cursus a sit amet mauris. Morbi accumsan ipsum veliam nec tellus a odio tincidunt auctor.";

const text2 =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some injected or words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.";

const text3 =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.";

const text4 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into unchanged. Lorem Ipsum passages publishing.";

const newsDetailsPage = {
  image,
  date: "28 Aug",
  author: "Admin",
  totalComments: 2,
  title: "Things to See and Do When Visiting Japan",
  texts: [text1, text2, text3, text4],
  tags: ["Traveling", "Adventure"],
  socials: [
    {
      id: 1,
      icon: "fab fa-twitter",
      href: "#",
    },
    {
      id: 2,
      icon: "fab fa-facebook",
      href: "#",
    },
    {
      id: 3,
      icon: "fab fa-instagram",
      href: "#",
    },
    {
      id: 4,
      icon: "fab fa-dribbble",
      href: "#",
    },
  ],
  authorData: {
    image: image2,
    name: "Christine Eve",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged. It was popularised in the sheets containing.",
  },
  comments: [
    {
      id: 1,
      image: "comment-1-1.png",
      name: "Kevin Martin",
      message:
        "It has survived not only five centuries, but also the leap into electronic typesetting unchanged. It was popularised in the sheets containing lorem ipsum is simply free text available in the martket to use now.",
    },
    {
      id: 2,
      image: "comment-1-2.png",
      name: "Sarah Albert",
      message:
        "It has survived not only five centuries, but also the leap into electronic typesetting unchanged. It was popularised in the sheets containing lorem ipsum is simply free text available in the martket to use now.",
    },
  ],
};

export const sidebar = {
  posts: [
    {
      id: 1,
      image: "lp-1-1.jpg",
      comments: 2,
      title: "Travel Most Beautiful Places in the World",
    },
    {
      id: 2,
      image: "lp-1-2.jpg",
      comments: 2,
      title: "Travel Most Beautiful Places in the World",
    },
    {
      id: 3,
      image: "lp-1-3.jpg",
      comments: 2,
      title: "Travel Most Beautiful Places in the World",
    },
  ],
  categories: [
    "Trip & Tours",
    "Traveling",
    "Adventures",
    "National Parks",
    "Beaches and Sea",
  ],
  tags: ["Traveling", "Adventure", "Beach", "Parks", "Museum", "Tourisms"],
};

export default newsDetailsPage;
