import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Code2, Network, Database, Cpu, GitBranch, Users } from 'lucide-react';

const technicalSkills = [
  { category: 'Languages', icon: Code2, skills: ['C++', 'Java', 'Node.js', 'Shell Scripting'] },
  { category: 'Embedded Systems', icon: Cpu, skills: ['Qt C++', 'Serial UART'] },
  { category: 'Network Protocols', icon: Network, skills: ['TCP/UDP', 'HTTP/2', 'Diameter Protocol', 'OPC UA', 'SNMP'] },
  { category: 'Database', icon: Database, skills: ['MySQL'] },
  { category: 'Tools', icon: GitBranch, skills: ['GitHub', 'Version Control'] },
];

const softSkills = [
  'Debugging and troubleshooting complex network and embedded system issues',
  'Collaborating with cross-functional teams to optimize system performance',
  'Managing project timelines and prioritizing critical bug fixes',
  'Adapting to new protocols and technologies in embedded and network systems',
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow-purple"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <span className="text-secondary">&lt;</span>
            SKILLS
            <span className="text-secondary">/&gt;</span>
          </h2>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-secondary mb-8 flex items-center gap-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <Code2 className="text-secondary" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 p-6 h-full hover:border-primary/60 box-glow-purple transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="text-primary" size={24} />
                        <h4 className="text-lg font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                          {category.category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, sIndex) => (
                          <span 
                            key={sIndex}
                            className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-sm font-mono text-foreground hover:bg-primary/20 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-secondary mb-8 flex items-center gap-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <Users className="text-secondary" />
              Soft Skills
            </h3>
            <Card className="bg-card/50 backdrop-blur-sm border-2 border-secondary/30 p-8 box-glow-cyan">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <li key={index} className="flex gap-3 text-foreground font-mono">
                    <span className="text-secondary mt-1 flex-shrink-0">▹</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
