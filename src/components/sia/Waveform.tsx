import { useEffect, useRef } from "react";

/**
 * Sound-frequency waveform: thin layered lines drifting like a voice on an oscilloscope.
 * Quiet at rest; swells (and one line turns red-orange) while `active` is true.
 */
export function Waveform({ active, className = "" }: { active: boolean; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let level = 0.28; // eased amplitude
    let t = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    // Re-measure whenever the canvas's laid-out size changes (fonts/CSS loading, rotation, resize).
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const lines = [
      { f: 1.6, s: 0.9, p: 0, a: 1, w: 1.1, c: "rgba(239,233,220,0.85)" },
      { f: 2.3, s: 1.3, p: 1.7, a: 0.7, w: 1, c: "rgba(239,233,220,0.45)" },
      { f: 3.1, s: 0.7, p: 3.1, a: 0.55, w: 1, c: "rgba(239,233,220,0.28)" },
      { f: 1.2, s: 1.7, p: 4.4, a: 0.85, w: 1.2, c: "red" },
    ];

    const draw = () => {
      const { width: W, height: H } = canvas.getBoundingClientRect();
      const target = activeRef.current ? 1 : 0.28;
      level += (target - level) * 0.04;
      t += reduce ? 0 : 0.016;
      ctx.clearRect(0, 0, W, H);
      const mid = H / 2;
      for (const ln of lines) {
        const isRed = ln.c === "red";
        const alpha = isRed ? Math.max(0, (level - 0.3) / 0.7) : 1;
        if (alpha <= 0.01) continue;
        ctx.beginPath();
        ctx.lineWidth = ln.w;
        ctx.strokeStyle = isRed ? `rgba(255,74,28,${0.9 * alpha})` : ln.c;
        for (let x = 0; x <= W; x += 2) {
          const u = x / W;
          // taper to flat at both ends, like a recorded phrase
          const env = Math.pow(Math.sin(Math.PI * u), 1.6);
          const y =
            Math.sin(u * Math.PI * 2 * ln.f * 3 + t * ln.s * 3 + ln.p) * 0.6 +
            Math.sin(u * Math.PI * 2 * ln.f * 7.3 - t * ln.s * 4.1 + ln.p * 2) * 0.3 +
            Math.sin(u * Math.PI * 2 * 17 + t * 6 + ln.p) * 0.1 * level;
          const py = mid + y * env * ln.a * level * (H * 0.46);
          if (x === 0) ctx.moveTo(x, py);
          else ctx.lineTo(x, py);
        }
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={`sia-wave ${className}`} aria-hidden="true" />;
}
