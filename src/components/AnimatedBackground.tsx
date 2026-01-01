import { useEffect, useRef, ReactNode } from "react";

interface AnimatedBackgroundProps {
  children?: ReactNode;
}

// Purple Neon Matrix Rain Background
export default function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationId: number;

    const fontSize = 14;
    const columns = Math.floor(width / fontSize);

    // Each column has its own drop position
    const drops: number[] = [];
    const speeds: number[] = [];
    const brightness: number[] = [];
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
      speeds[i] = 0.5 + Math.random() * 1.5;
      brightness[i] = 0.3 + Math.random() * 0.7;
    }

    const draw = () => {
      // Semi-transparent black for trail effect
      ctx.fillStyle = "rgba(5, 0, 15, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Random binary character
        const char = Math.random() > 0.5 ? "1" : "0";
        
        // Bright glowing head character
        if (Math.random() > 0.95) {
          ctx.shadowBlur = 25;
          ctx.shadowColor = "rgba(200, 150, 255, 1)";
          ctx.fillStyle = "rgba(255, 230, 255, 1)";
        } else {
          // Regular purple with varying brightness
          const alpha = brightness[i] * (0.4 + Math.random() * 0.6);
          ctx.shadowBlur = 8;
          ctx.shadowColor = `rgba(147, 51, 234, ${alpha})`;
          ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
        }

        ctx.fillText(char, x, y);

        // Move drop down
        drops[i] += speeds[i];

        // Reset when off screen with randomization
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
          speeds[i] = 0.5 + Math.random() * 1.5;
          brightness[i] = 0.3 + Math.random() * 0.7;
        }
      }

      ctx.shadowBlur = 0;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      // Recalculate columns
      const newColumns = Math.floor(width / fontSize);
      for (let i = drops.length; i < newColumns; i++) {
        drops[i] = Math.random() * -100;
        speeds[i] = 0.5 + Math.random() * 1.5;
        brightness[i] = 0.3 + Math.random() * 0.7;
      }
    };

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(88, 28, 135, 0.25) 0%, rgba(10, 2, 20, 1) 70%, rgba(2, 0, 5, 1) 100%)'
        }}
      />
      {children}
    </div>
  );
}