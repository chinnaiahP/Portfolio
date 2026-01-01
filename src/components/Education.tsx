import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-card/20 to-transparent">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow-cyan"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <span className="text-primary">&lt;</span>
            EDUCATION
            <span className="text-primary">/&gt;</span>
          </h2>

          <Card className="bg-card/50 backdrop-blur-sm border-2 border-secondary/30 p-8 box-glow-cyan hover:border-secondary/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg border-2 border-secondary/30 box-glow-cyan">
                <GraduationCap className="text-secondary" size={32} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-secondary mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  B.E Mechanical Engineering
                </h3>
                
                <p className="text-lg text-foreground font-semibold mb-4 font-mono">
                  Sethu Institute of Technology (Anna University)
                </p>
                
                <div className="flex flex-wrap gap-4 text-muted-foreground font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-secondary" />
                    <span>July 2018 - May 2022</span>
                  </div>
                  <span className="text-border">|</span>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-secondary" />
                    <span>Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
