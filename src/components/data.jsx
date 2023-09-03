//TODO: nahrat projekty na github
import defaultImage from "../../public/coding.png";
import image1 from "../../public/Green-Deal-Web-1.png";
import image2 from "../../public/PC-Pohotovost-Web.png";
import image3 from "../../public/informationboard.png";

const allProjects = [
  {
    id: 1,
    image: image1,
    title: "Green Deal",
    description:
      "Simple website on the topic of green deal, which I won in competition for students.",
    link: "https://daisyui.com/docs/themes/",
  },
  {
    id: 2,
    image: image3,
    title: "Information Board",
    description:
      "This advanced school project based on Symfony and Tailwindcss.",
    link: "https://daisyui.com/docs/themes/",
  },
  {
    id: 3,
    image: image2,
    title: "PC Pohotovost Karviná",
    description:
      "One of my first project. This project was created only in HTML and CSS.",
    link: "https://1-pc-pohotovost.cz/",
  },
  // TODO: Přidat projekty
  {
    id: 4,
    image: defaultImage,
    title: "Sample project",
    description: "sample text",
    link: "",
  },
];
export default allProjects;
