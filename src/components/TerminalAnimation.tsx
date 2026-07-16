import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const commands = [
  { prompt: "$ ./chinnaiah_profile.sh", output: "Initializing profile...", autoContinue: true },
  { prompt: "", output: "══════════════════════════════════════════════════\n👤 CHINNAIAH PANDISELVAM\n   Software Engineer | Backend & Embedded Systems\n══════════════════════════════════════════════════", autoContinue: false },
  { prompt: "", output: "📍 Location: Coimbatore, Tamil Nadu\n📧 Email: chinnaiahpandiselvam@gmail.com\n📞 Phone: +91 6369068451", autoContinue: false },
  { prompt: "", output: "[+] Loading career summary...", autoContinue: true },
  { prompt: "", output: "▸ 3+ years in mission-critical applications\n▸ Expertise: Backend dev, Network protocols, Real-time systems\n▸ Focus: Scalability, Performance, System reliability", autoContinue: false },
  { prompt: "", output: "[+] Scanning technical skills...", autoContinue: true },
  { prompt: "", output: "├── Languages:  C++ • Java • Node.js • Shell Scripting\n├── Embedded:   Qt C++ • Serial UART\n├── Protocols:  TCP/UDP • HTTP/2 • Diameter • OPC UA • SNMP\n├── Database:   MySQL\n└── Tools:      GitHub • Version Control", autoContinue: false },
  { prompt: "", output: "[+] Loading work experience...", autoContinue: true },
  { prompt: "", output: "┌─ PM SQUARE SOFT SERVICE PVT LTD ─────────────────┐", autoContinue: false },
  { prompt: "", output: "│ ▸ BMS (Bearer Management Service)               │\n│   Sep 2024 – Present                            │\n│   4G/5G bearer protocols • N5/RX interfaces     │\n│   HTTP/2 • Diameter Protocol • 99.9% uptime     │", autoContinue: false },
  { prompt: "", output: "│ ▸ TRCP (Train Radio Control Panel )               │\n│   Jan 2024 – Present                            │\n│   TCP/UDP socket communication • C++ backend    │\n│   Java frontend • 40% reliability improvement   │", autoContinue: false },
  { prompt: "", output: "│ ▸ MCX-RCP-TRCP                                  │\n│   Jul 2023 – Dec 2023                           │\n│   Qt C++ embedded UI • Node.js backend          │\n│   30% faster bug resolution                     │\n└──────────────────────────────────────────────────┘", autoContinue: false },
  { prompt: "", output: "[+] Loading education...", autoContinue: true },
  { prompt: "", output: "🎓 B.E Mechanical Engineering\n   Sethu Institute of Technology (Anna University)\n   July 2018 - May 2022 | Tamil Nadu, India", autoContinue: false },
  { prompt: "", output: "\n[✓] Profile loaded successfully!\n[i] Type 'exit' to close or scroll down to explore", autoContinue: false },
];

export default function TerminalAnimation() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [history, setHistory] = useState<{ prompt: string; output: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, showOutput]);

  // Typing effect - only runs when isTyping is true
  useEffect(() => {
    if (!isTyping || currentCommandIndex >= commands.length) return;

    const currentCommand = commands[currentCommandIndex];
    
    if (!showOutput) {
      // Type the command
      if (displayedText.length < currentCommand.prompt.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentCommand.prompt.slice(0, displayedText.length + 1));
        }, 50 + Math.random() * 80);
        return () => clearTimeout(timeout);
      } else {
        // Command fully typed, show output
        const timeout = setTimeout(() => {
          setShowOutput(true);
        }, 300);
        return () => clearTimeout(timeout);
      }
    } else {
      // Move to next command
      const timeout = setTimeout(() => {
        setHistory(prev => [...prev, currentCommand]);
        setCurrentCommandIndex(prev => prev + 1);
        setDisplayedText("");
        setShowOutput(false);
        // Auto-continue if this command has autoContinue flag
        if (currentCommand.autoContinue) {
          setIsTyping(true);
        } else {
          setIsTyping(false); // Stop and wait for next click
        }
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, showOutput, currentCommandIndex, isTyping]);

  const handleClick = () => {
    if (currentCommandIndex >= commands.length) {
      // Reset animation
      setHistory([]);
      setCurrentCommandIndex(0);
      setDisplayedText("");
      setShowOutput(false);
      setIsTyping(true);
    } else if (!isTyping) {
      setIsTyping(true);
    }
  };

  const currentCommand = commands[currentCommandIndex];
  const isComplete = currentCommandIndex >= commands.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="w-full max-w-2xl mx-auto mt-8 px-4"
    >
      <div 
        className="terminal-window rounded-lg overflow-hidden border border-primary/30 box-glow-purple cursor-pointer group"
        onClick={handleClick}
      >
        {/* Terminal header */}
        <div className="bg-background/80 px-4 py-2 flex items-center gap-2 border-b border-primary/20">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-xs font-terminal text-muted-foreground ml-2">chinnaiah@linux:~</span>
          <span className="text-xs text-primary/60 ml-auto group-hover:text-primary transition-colors">
            {isComplete ? "↻ ./restart.sh" : isTyping ? "executing..." : "▶ press ENTER"}
          </span>
        </div>
        
        {/* Terminal body */}
        <div 
          ref={terminalRef}
          className="bg-background/60 backdrop-blur-sm p-4 font-terminal text-xs sm:text-sm min-h-[200px] max-h-[350px] overflow-y-auto"
        >
          {/* Initial prompt if nothing started */}
          {history.length === 0 && currentCommandIndex === 0 && !isTyping && (
            <div className="text-muted-foreground animate-pulse">
              $ ./start.sh  [press ENTER to execute]
            </div>
          )}

          {/* Command history */}
          {history.map((cmd, index) => (
            <div key={index} className="mb-2">
              <div className="text-secondary">{cmd.prompt}</div>
              <pre className="text-foreground whitespace-pre-wrap text-xs">{cmd.output}</pre>
            </div>
          ))}
          
          {/* Current command being typed */}
          {isTyping && currentCommandIndex < commands.length && (
            <div>
              <span className="text-secondary">
                {displayedText}
                <span 
                  className={`inline-block w-2 h-4 bg-secondary ml-0.5 align-middle transition-opacity ${
                    cursorVisible && !showOutput ? 'opacity-100' : 'opacity-0'
                  }`}
                ></span>
              </span>
              
              {/* Output */}
              {showOutput && currentCommand && (
                <motion.pre
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-foreground whitespace-pre-wrap mt-1 text-xs"
                >
                  {currentCommand.output}
                </motion.pre>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
