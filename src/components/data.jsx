//TODO: nahrat projekty na github
import defaultImage from "../../public/coding.png";
import image1 from "../../public/Green-Deal-Web-1.png";
import image2 from "../../public/PC-Pohotovost-Web.png";
import image3 from "../../public/informationboard.png";
import image4 from "../../public/Netolismus-web.png"

const allProjects = [
  {
    // TODO! přidat link
    id: 1,
    image: image1,
    title: "Green Deal",
    description:
      "Simple website on the topic of green deal, which I won in competition for students.",
    link: "https://www.tomas-suchanek.com/#projects",
  },
  // {
  //   // TODO! přidat link
  //   id: 2,
  //   image: image3,
  //   title: "Information Board",
  //   description:
  //     "This advanced school project based on Symfony and Tailwindcss.",
  //   link: "https://www.tomas-suchanek.com/#projects",
  // },
  {
    id: 2,
    image: image2,
    title: "PC Pohotovost Karviná",
    description:
      "One of my first project. This project was created only in HTML and CSS.",
    link: "https://1-pc-pohotovost.cz/",
  },
  {
    id: 3,
    image: image4,
    title: "Netolismus web",
    description: "Website about the topic of netolism, which i created it in a one student competition.",
    link: "https://github.com/suchanek-tom/Netolismus-Web/tree/master/web-netolismus",
  },
];
export default allProjects;
