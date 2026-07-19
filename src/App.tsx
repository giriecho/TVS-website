import { Routes, Route } from 'react-router-dom';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import StorySubmission from '@/pages/StorySubmission';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <ScrollToTop />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/story-submission" element={<StorySubmission />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
