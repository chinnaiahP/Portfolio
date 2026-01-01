import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Terminal, Code2, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TerminalAnimation from './TerminalAnimation';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Floating icons - hidden on small screens */}
      <motion.div
        className="absolute top-20 left-10 text-primary opacity-20 hidden md:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Terminal size={40} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-20 text-secondary opacity-20 hidden md:block"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Code2 size={50} />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-40 text-neon-cyan opacity-20 hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Cpu size={35} />
      </motion.div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-hacker mb-4 text-glow-intense glitch-text px-2"
            data-text="CHINNAIAH P"
            animate={{ 
              textShadow: [
                '0 0 10px hsl(280 100% 95%), 0 0 20px hsl(280 100% 70%), 0 0 40px hsl(280 100% 70%), 0 0 80px hsl(280 100% 70%)',
                '0 0 15px hsl(280 100% 95%), 0 0 30px hsl(280 100% 70%), 0 0 60px hsl(280 100% 70%), 0 0 100px hsl(280 100% 70%)',
                '0 0 10px hsl(280 100% 95%), 0 0 20px hsl(280 100% 70%), 0 0 40px hsl(280 100% 70%), 0 0 80px hsl(280 100% 70%)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            CHINNAIAH P
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-hacker text-glow-cyan mb-2">
              Software Engineer
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-terminal tracking-wider px-4">
              Backend • Embedded Systems • Network Protocols
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 justify-center items-center mb-8 text-xs sm:text-sm md:text-base px-4"
          >
            <a 
              href="mailto:chinnaiahpandiselvam@gmail.com" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              <Mail size={16} className="group-hover:animate-glow-pulse flex-shrink-0" />
              <span className="font-mono text-xs sm:text-sm break-all">chinnaiahpandiselvam@gmail.com</span>
            </a>
            <span className="text-border hidden sm:inline">|</span>
            <a 
              href="tel:+916369068451" 
              className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors group"
            >
              <Phone size={16} className="group-hover:animate-glow-pulse flex-shrink-0" />
              <span className="font-mono">+91 6369068451</span>
            </a>
            <span className="text-border hidden sm:inline">|</span>
            <div className="flex items-center gap-2 text-foreground">
              <MapPin size={16} className="flex-shrink-0" />
              <span className="font-mono">Coimbatore</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground box-glow-purple transition-all duration-300 font-mono"
              asChild
            >
              <a href="https://www.linkedin.com/in/chinnaiah-pandiselvam-71b7a4235/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground box-glow-cyan transition-all duration-300 font-mono"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={20} />
                GitHub
              </a>
            </Button>
          </motion.div>

          {/* Terminal Animation */}
          <TerminalAnimation />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2 box-glow-purple">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
