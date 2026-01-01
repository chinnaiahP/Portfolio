import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'chinnaiahpandiselvam@gmail.com',
      href: 'mailto:chinnaiahpandiselvam@gmail.com',
      color: 'primary',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6369068451',
      href: 'tel:+916369068451',
      color: 'secondary',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu',
      href: null,
      color: 'primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/chinnaiah-pandiselvam-71b7a4235/',
      color: 'secondary',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-transparent to-card/20">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-glow-purple"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <span className="text-secondary">&lt;</span>
            GET IN TOUCH
            <span className="text-secondary">/&gt;</span>
          </h2>
          
          <p className="text-center text-muted-foreground font-mono mb-16 text-lg">
            Let's collaborate on building robust and scalable systems
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const isPrimary = method.color === 'primary';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card 
                    className={`bg-card/50 backdrop-blur-sm border-2 p-6 transition-all duration-300 ${
                      isPrimary 
                        ? 'border-primary/30 hover:border-primary/60 box-glow-purple' 
                        : 'border-secondary/30 hover:border-secondary/60 box-glow-cyan'
                    }`}
                  >
                    {method.href ? (
                      <a 
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4 group"
                      >
                        <div className={`p-3 rounded-lg border-2 ${
                          isPrimary 
                            ? 'bg-primary/10 border-primary/30' 
                            : 'bg-secondary/10 border-secondary/30'
                        }`}>
                          <Icon 
                            className={`${isPrimary ? 'text-primary' : 'text-secondary'} group-hover:animate-glow-pulse`} 
                            size={24} 
                          />
                        </div>
                        <div>
                          <h3 className={`text-sm font-semibold mb-1 ${
                            isPrimary ? 'text-primary' : 'text-secondary'
                          }`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            {method.label}
                          </h3>
                          <p className="text-foreground font-mono text-sm group-hover:text-primary transition-colors">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg border-2 ${
                          isPrimary 
                            ? 'bg-primary/10 border-primary/30' 
                            : 'bg-secondary/10 border-secondary/30'
                        }`}>
                          <Icon 
                            className={isPrimary ? 'text-primary' : 'text-secondary'} 
                            size={24} 
                          />
                        </div>
                        <div>
                          <h3 className={`text-sm font-semibold mb-1 ${
                            isPrimary ? 'text-primary' : 'text-secondary'
                          }`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            {method.label}
                          </h3>
                          <p className="text-foreground font-mono text-sm">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-black font-bold border-2 border-transparent hover:border-primary box-glow-purple text-lg px-8 font-mono"
              asChild
            >
              <a href="mailto:chinnaiahpandiselvam@gmail.com">
                <Send className="mr-2" size={20} />
                Send me a message
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
