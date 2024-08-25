import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { Skills, Projects, Grafito, Experience } from '../components/Work';
import { Footer, Contact } from '../components/Footer';
import { about, contact, intro, navigation, projects, SEO, work, grafito, experience } from '../config/config';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />
      <About
        title={about.title}
        description={about.description}
      />
      <Skills
        title={work.title}
        cards={work.cards}
      />
      <Projects
        title={projects.title}
        cards={projects.cards}
      />
      <Grafito
        title={grafito.title}
        icons={grafito.icons}
        image={grafito.image}
        description={grafito.description}
      />
      <Experience
        title={experience.title}
        cardsExperience={experience.cards}
      />
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      <Footer />
    </Fragment>
  );
}
