
import profile from './profile.png';
import grafito_image from './grafito_3D.jpg'
import segob from './companies/segob_2.png'
import verizon from './companies/verizon_2.png'
import dotcms from './companies/dotcms.png'
import global from './companies/global_2.png'
import grupored from './companies/grupo_red_2.png'
import gtcarriers from './companies/gt_carriers_2.png'
import { faChrome, faGithub, faItchIo, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Edgar",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Grafito",
      link: "#grafito",
    },
    {
      title: "Experience",
      link: "#experience",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    {
      title: "Blog",
      link: "https://medium.com/@hashirshoaeb",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Edgar",
  description: "A Full-Stack Developer specializing in dynamic web solutions, scalable APIs, cybersecurity, and game development.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I am a passionate software engineer dedicated to creating innovative and efficient digital solutions. Throughout my career, I've developed a wide range of skills, from front-end and back-end development to API integration and platform optimization. My approach is always to understand the specific needs of each project to deliver solutions that not only meet the set objectives but also drive growth and efficiency.",
    "As a freelancer, I've had the opportunity to collaborate with various companies and startups, helping them transform their ideas into robust and scalable digital products. Each project is a new opportunity to apply my technical knowledge and creativity, ensuring the final result is of the highest quality. My commitment to excellence and continuous improvement has allowed me to build strong, successful working relationships with my clients.",
    "I am open to new opportunities, whether it's collaborating on projects as a freelance developer or joining a team in a more permanent role. I seek an environment where I can continue learning, face new challenges, and contribute to the success of meaningful projects. If you're looking for a committed and versatile developer who can add value both in the short and long term, I would love to discuss how I can help your organization achieve its goals.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Full-Stack Web Development",
      description: "I am dedicated to creating robust and scalable web applications using modern technologies such as React, Angular, Node.js, Java (with Spring Boot), PostgreSQL, MongoDB, among others. I have experience in both frontend and backend, which allows me to approach development in a comprehensive way.",
      icons: null,
    },
    {
      title: "Cybersecurity Analyst",
      description: "I assess and enhance security measures by identifying vulnerabilities and implementing solutions to protect applications and data from potential threats, ensuring robust and compliant security practices.",
      icons: null,
    },
    {
      title: "Game Development",
      description: "I create engaging and immersive game experiencies, specializing in narrative-driven games and mechanics for 2D and 3D that blend creativity with technical and design expertise",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Breakify",
      description: "Breakify is a simple web application that allows users to enter a first name and a last name, which will be displayed in a format inspired by the popular TV series Breaking Bad.",
      icons: [
        {
          icon: faChrome,
          link: "https://edgarpsda.github.io/breakify/",
        },
        {
          icon: faGithub,
          link: "https://github.com/EdgarPsda/breakify",
        },
      ]
    },
    {
      title: "Crypto Quotation",
      description: "Crypto-React is a simple application that allows users to check the exchange rates of various cryptocurrencies. The main focus of this project is the consumption of a cryptocurrency exchange rate API.",
      icons: [
        {
          icon: faChrome,
          link: "https://edgarpsda.github.io/crypto-react/",
        },
        {
          icon: faGithub,
          link: "https://github.com/EdgarPsda/crypto-react",
        },
      ]
    },
    {
      title: "Movie Pictures API",
      description: "This project is a REST API developed with Spring Boot 3, designed to manage movie images. It allows users to list movie images, vote on them, and view them grouped by their release year. It uses PostgreSQL as the database management system and Swagger for API documentation. Special emphasis has been placed on testing and custom error handling to ensure the application's robustness.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/EdgarPsda/movies-api",
        },
      ]
    },
    {
      title: "Expenses Planner",
      description: "Expenses Control APP is an application for managing personal expenses, allowing users to effectively track their financial activities. This app lets you start with an initial budget and then deduct expenses as they occur, making it easier to keep track of your finances.",
      icons: [
        {
          icon: faChrome,
          link: "https://steady-kitten-7f35c4.netlify.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/EdgarPsda/expense-control-app",
        },
      ]
    },
    {
      title: "Grafito 2D",
      description: "Grafito: Memories in Sketch is a 2D game that immerses you in a hand-drawn world where creativity and puzzle-solving are key to progressing. In this adventure, you'll guide Grafito, a character born from sketches and doodles, through levels filled with artistic challenges. With a unique visual style reminiscent of sketchbook drawings, Grafito combines immersive gameplay mechanics with a narrative that celebrates creativity and art.",
      icons: [
        {
          icon: faItchIo,
          link: "https://thedarkknightplayz.itch.io/grafito",
        },
      ]
    },
    {
      title: "Codemon Catcher",
      description: "Codemon Catcher is an interactive application designed for Pokémon enthusiasts, providing comprehensive access to all forms of each Pokémon, including their names and distinctive features. Users can create their own account to personalize their experience, allowing them to add Pokémon to a favorites list for quick and easy future reference. Additionally, the app facilitates Pokémon exploration with a pagination feature and a search tool by name, ensuring users can easily find their preferred Pokémon.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/EdgarPsda/codemon-catcher",
        },
      ]
    },
  ],
}

export const grafito = {
  title: "Grafito: Memories in Sketch",
  image: grafito_image,
  icons: [
    {
      icon: faTwitter,
      link: "https://x.com/PsdaDev",
    },
    {
      icon: faChrome,
      link: "#",
    },
  ],
  description: [
    "Grafito: Memories in Sketch is an adventure and exploration game that combines soulslike combat mechanics with a deep narrative and a unique visual style inspired by traditional art. In this game, you’ll step into the world of Grafito, a character born from sketches, as he navigates a universe where creativity and imagination are key. The demo focuses on Grafito's journey to solve the mystery of the Lost Painter, just one of the many quests that will shape his adventure.",
    "This project is currently in development, and I’m excited to share its progress with you. You can follow the devlogs and updates on my X account, YouTube channel, and the blog on my website. Join the community and be part of the creative process as we bring this artistic world to life.",
  ],
}

export const experience = {
  title: "I have had the privilege of working with these incredible companies",
  cards: [
    {
      title: "Gobierno de México",
      image: segob
    },
    {
      title: "Verizon",
      image: verizon
    },
    {
      title: "dotCMS",
      image: dotcms
    },
    {
      title: "Global Cybersec",
      image: global
    },
    {
      title: "Grupo Red Software Solutions",
      image: grupored
    },
    {
      title: "GT Carriers",
      image: gtcarriers
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at edgar.psda@gmail.com",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:edgar.psda@gmail.com",
      isPrimary: true,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Edgar Posada | Software Engineer | Cybersecurity Analyst | Game Developer",
  description: "A Full-Stack Developer specializing in dynamic web solutions, scalable APIs, cybersecurity, and game development.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@edgarpsda",
  description: "Software Engineer | Cybersecurity Analyst | Game Developer",
  cards: [
    {
      title: "My website",
      link: "#",
    },
    {
      title: "My X",
      link: "https://x.com/PsdaDev",
    },
    {
      title: "My GitHub",
      link: "https://github.com/edgarpsda/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/edgarposada/",
    },
    {
      title: "My Itch.io",
      link: "https://thedarkknightplayz.itch.io/",
    },
  ]
}