import { useEffect, useRef } from "react";

/**
 * Audio frequency display: dense, mirrored bars (like a voice memo / spectrum analyzer)
 * over a thin carrier line. Breathes quietly at rest; surges, and runs hotter in the
 * centre (red-orange), while `active` is true.
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
    let level = 0.45; // eased loudness
    let t = 0;
    let smooth: number[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      const { width: W, height: H } = canvas.getBoundingClientRect();
      const target = activeRef.current ? 1 : 0.45;
      level += (target - level) * 0.05;
      t += reduce ? 0 : 0.016;
      ctx.clearRect(0, 0, W, H);
      const mid = H / 2;

      // bars
      const gap = 4;
      const n = Math.max(8, Math.floor(W / gap));
      if (smooth.length !== n) smooth = new Array(n).fill(0);
      for (let i = 0; i < n; i++) {
        const u = i / (n - 1);
        const env = Math.pow(Math.sin(Math.PI * u), 1.3); // taper at both ends
        // layered "frequencies": a slow phrase, a mid pulse and a fast shimmer
        const raw =
          0.5 + 0.5 * Math.sin(u * 9 + t * 2.1) * Math.sin(u * 23 - t * 3.3) +
          0.35 * Math.abs(Math.sin(u * 61 + t * 7.7)) +
          0.25 * Math.abs(Math.sin(u * 137 - t * 11.3 + Math.sin(t * 1.3)));
        const v = Math.min(1, raw * 0.62) * env;
        const prev = smooth[i] ?? 0;
        const sv = prev + (v - prev) * 0.35;
        smooth[i] = sv;
        const h = Math.max(1, sv * level * (H * 0.48));
        const x = i * gap + 1;
        const hot = activeRef.current ? Math.max(0, 1 - Math.abs(u - 0.5) * 3.2) * (level - 0.45) / 0.55 : 0;
        ctx.fillStyle =
          hot > 0.05
            ? `rgba(255,74,28,${0.45 + 0.5 * hot})`
            : `rgba(239,233,220,${0.28 + 0.5 * sv})`;
        ctx.fillRect(x, mid - h, 1.5, h * 2);
      }

      // carrier line
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(239,233,220,0.35)";
      for (let x = 0; x <= W; x += 2) {
        const u = x / W;
        const env = Math.pow(Math.sin(Math.PI * u), 1.6);
        const y = mid + Math.sin(u * Math.PI * 2 * 14 + t * 5) * env * level * H * 0.12;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

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
