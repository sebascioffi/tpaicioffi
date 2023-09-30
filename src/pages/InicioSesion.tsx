import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import {homePageMeta} from '../data/data';
import ContactosPage from './seccionContactos';
import HeaderInicioSesion from './HeaderInicioSesion';

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <HeaderInicioSesion />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <ContactosPage />
      <Footer />
    </Page>
  );
});

export default Home;
