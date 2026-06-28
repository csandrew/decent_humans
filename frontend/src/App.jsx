// frontend/src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Import all page components as sections
import HomeSection from './pages/Home';
import AboutSection from './pages/About';
import ProgramsSection from './pages/Programs';
import GetInvolvedSection from './pages/GetInvolved'; // Changed from Blog + Involve
import ContactSection from './pages/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const sections = [
    { id: 'home', Component: HomeSection, props: { scrollToSection } },
    { id: 'about', Component: AboutSection },
    { id: 'programs', Component: ProgramsSection },
    { id: 'get-involved', Component: GetInvolvedSection },
    { id: 'contact', Component: ContactSection },
  ];

  return (
    <div className="flex min-h-screen flex-col">

      <Header scrollToSection={scrollToSection} activeSection={activeSection} />
      <main className="flex-grow">
        {sections.map(({ id, Component, props }) => (
          <section key={id} id={id} className="scroll-mt-20">
            <Component {...props} />
          </section>
        ))}
      </main>
      <WhatsAppFloat />
      <Footer />
    </div>
  );
}

export default App;