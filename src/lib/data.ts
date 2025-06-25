import Project1 from "../../public/images/howItWorks.jpg";
import Project2 from "../../public/images/speed.jpg";
import Project3 from "../../public/images/faqii.jpg";

export const projects = [
  {
    src: Project3,
    title: "Taco Bell Redesign",
    description:
      "This project is a redesign of Taco Bell's website. This is a full stack project similar to 'Elite Retreat Rentals', since it has an admin panel where menu items can be created, updated and deleted. Users can see menu items and reach out via a fully functional contact form.",
    category: "Online Store",
    href: "https://www.livemas.dev/",
    github: "https://github.com/ChristianWare/Tacobell-ii",
  },
  {
    src: Project1,
    title: "Elite Retreat Rentals",
    description:
      "This project is a redesign of Taco Bell's website. This is a full stack project similar to 'Elite Retreat Rentals', since it has an admin panel where menu items can be created, updated and deleted. Users can see menu items and reach out via a fully functional contact form.",
    category: "Online Store",
    href: "https://www.eliteretreatrentals.com/",
    github: "https://github.com/ChristianWare/Case-Study-One",
  },
  {
    src: Project2,
    title: "Nier Transportaion",
    description:
      "This project is a redesign of Taco Bell's website. This is a full stack project similar to 'Elite Retreat Rentals', since it has an admin panel where menu items can be created, updated and deleted. Users can see menu items and reach out via a fully functional contact form.",
    category: "Online Store",
    href: "https://www.niertransportation.com/",
    github: "https://github.com/ChristianWare/Nier-Transport-Redesign",
  },
] as const;
