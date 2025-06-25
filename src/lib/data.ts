import Project1 from "../../public/images/howItWorks.jpg";
import Project2 from "../../public/images/speed.jpg";
import Project3 from "../../public/images/faqii.jpg";

export const projects = [
  {
    src: Project3,
    title: "Taco Bell Redesign",
    description:
      "This project is a redesign of Taco Bell's website. This is a full stack project similar to 'Elite Retreat Rentals', since it has an admin panel where menu items can be created, updated and deleted. Users can see menu items and reach out via a fully functional contact form.",
    techStack: [
      {
        title: "CSS Modules",
      },
      {
        title: "Nodemailer",
      },
    ],

    href: "https://www.livemas.dev/",
    github: "https://github.com/ChristianWare/Tacobell-ii",
  },
  {
    src: Project1,
    title: "Elite Retreat Rentals",
    description:
      "Elite Retreat Rentals is a Phoenix, AZ based company that provides lodging services to travelers at an affordable price. This full stack project was built with an admin panel that allows the owner to create, update and delete properties. Each property listing shows details and images, and gives users the ability to book in advance with a fully functional booking engine. Stripe payment gateway was added, allowing users can pay in advance with any major credit card.",

    techStack: [
      {
        title: "Redux",
      },
      {
        title: "Stripe",
      },
    ],

    href: "https://www.eliteretreatrentals.com/",
    github: "https://github.com/ChristianWare/Case-Study-One",
  },
  // {
  //   src: Project4,
  //   title: "AZ Golf Whisperer",
  //   description:
  //     "Golf Guise/AZ Golf Whisperer is a front end project for a client of mine who sells Golf Stay-and-Play packages. The site showcases the details of each package offered, which golf courses they are partnered with, as well as information on golf club rentals. This was built with Next.Js, styled with CSS Modules and Nodemailer was used for the contact form for email notifications.",
  //   techStack: [
  //     {
  //       title: "Next.JS",
  //     },
  //     {
  //       title: "CSS Modules",
  //     },
  //     {
  //       title: "React Hook Form",
  //     },
  //     {
  //       title: "Node Mailer",
  //     },
  //   ],
  //   href: "https://golf-guise.vercel.app/",
  //   github: "https://github.com/ChristianWare/golf-guise",
  // },
  {
    src: Project2,
    title: "Nier Transportaion",
    description:
      "Nier Transportation is a luxury black car driving service based in Phoenix, AZ, specializing in airport transfers, and long distance drives. Users have the ability to communicate witht the owner via a fully functional contact form that sends messages directly to the owners email address. The blog was built using Makrkdown nadn MDX.",
    techStack: [
      {
        title: "React Hook Form",
      },
      {
        title: "Node Mailer",
      },
    ],

    href: "https://www.niertransportation.com/",
    github: "https://github.com/ChristianWare/Nier-Transport-Redesign",
  },
] as const;
