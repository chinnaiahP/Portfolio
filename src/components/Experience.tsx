import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    title: 'BMS (Bearer Management Service)',
    period: 'September 2024 – Present',
    highlights: [
      'Developed 4G and 5G bearer management protocols, enabling seamless data exchange between MCX servers and telecom networks',
      'Integrated N5 interface (5G) via HTTP/2 and RX interface (4G) via TCP (Diameter Protocol) in Node.js, reducing latency and improving system efficiency',
      'Optimized network message parsing, leading to a 25% improvement in processing efficiency',
      'Spearheaded debugging and log-based issue resolution via GitHub, minimizing system downtime and ensuring 99.9% uptime',
    ],
    tech: ['Node.js', 'HTTP/2', 'Diameter Protocol', '4G/5G', 'TCP', 'GitHub'],
  },
  {
    title: 'TRCP',
    period: 'January 2024 – Present',
    highlights: [
      'Designed and implemented TCP/UDP socket-level communication in C++, ensuring real-time, fail-safe data exchange for railway signaling operations',
      'Implemented the frontend using Java, delivering an intuitive and responsive interface for operational monitoring and control',
      'Debugged issues using GitHub logs, increasing system reliability by 40% and reducing post-launch issues by 20%',
      'Collaborated with cross-functional teams, ensuring all reported issues were resolved efficiently and documented for future improvements',
    ],
    tech: ['C++', 'Java', 'TCP/UDP', 'Railway Signaling', 'GitHub'],
  },
  {
    title: 'MCX-RCP-TRCP',
    period: 'July 2023 – December 2023',
    highlights: [
      'Developed an embedded UI using Qt C++ for mission-critical railway control systems, enhancing usability and real-time responsiveness',
      'Engineered backend services in Node.js, ensuring seamless communication between the UI and system components',
      'Managed GitHub issue tracking and debugging workflows, improving bug resolution time by 30%',
      'Optimized version control processes, resulting in 20% faster issue resolution and improved team collaboration',
    ],
    tech: ['Qt C++', 'Node.js', 'Embedded Systems', 'GitHub'],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-transparent to-card/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-glow-cyan"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <span className="text-primary">&lt;</span>
            WORK EXPERIENCE
            <span className="text-primary">/&gt;</span>
          </h2>
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-foreground font-mono text-lg">
              <Building2 className="text-secondary" size={24} />
              <span className="text-secondary font-semibold">PM SQUARE SOFT SERVICE PVT LTD</span>
              <span className="text-muted-foreground">•</span>
              <span>Coimbatore</span>
            </div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-2 border-secondary/30 p-6 md:p-8 hover:border-secondary/60 box-glow-cyan transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                    <h3 className="text-2xl font-bold text-secondary text-glow" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground font-mono">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex gap-3 text-foreground font-mono">
                        <span className="text-primary mt-1 flex-shrink-0">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, tIndex) => (
                      <Badge 
                        key={tIndex}
                        variant="outline"
                        className="border-primary/50 text-primary hover:bg-primary/20 font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
