import AnimatedBackground from '@/components/AnimatedBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <AnimatedBackground>
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-border/30 py-8 text-center">
        <p className="text-muted-foreground font-mono text-sm">
          © 2024 Chinnaiah P. Built with React & Tailwind CSS
        </p>
        <p className="text-muted-foreground font-mono text-xs mt-2">
          <span className="text-primary">&lt;</span>
          Code. Debug. Deploy.
          <span className="text-primary">/&gt;</span>
        </p>
      </footer>
    </AnimatedBackground>
  );
};

export default Index;
