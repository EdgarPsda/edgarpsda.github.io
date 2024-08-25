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
      <div className="d-flex flex-column justify-content-between bg-secondary min-vh-100">
        <div className="py-5 px-5 container text-center">
          <h1>Be patient, I'm working on this</h1>
        </div>
      </div>
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      <Footer />
    </Fragment>
  );
}