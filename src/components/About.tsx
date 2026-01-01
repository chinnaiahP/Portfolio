import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-glow-purple"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <span className="text-secondary">&lt;</span>
            CAREER SUMMARY
            <span className="text-secondary">/&gt;</span>
          </h2>

          <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 p-8 box-glow-purple hover:border-primary/60 transition-all duration-300">
            <motion.p 
              className="text-lg text-foreground leading-relaxed font-mono"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              As a result of working extensively on <span className="text-primary font-semibold">mission-critical applications</span>, 
              I have built expertise in <span className="text-secondary font-semibold">backend development</span>, 
              network protocols, and real-time communication systems. With <span className="text-primary font-semibold">2 years of experience</span>, 
              I specialize in <span className="text-secondary">C++, Node.js, TCP/UDP, HTTP/2, and Diameter Protocol</span>, 
              focusing on scalability, performance optimization, and system reliability.
            </motion.p>

            <motion.p 
              className="text-lg text-foreground leading-relaxed mt-6 font-mono"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              My work in <span className="text-primary font-semibold">railway signaling and telecom systems</span> involves 
              protocol implementation, network optimization, and efficient data handling to ensure 
              <span className="text-secondary font-semibold"> low-latency, high-availability communication</span>. 
              I have contributed to troubleshooting large-scale distributed applications, managing 
              GitHub-based debugging workflows, and collaborating with cross-functional teams to improve 
              system resilience and software efficiency.
            </motion.p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
