"use client";

import { useInView } from "react-intersection-observer";
import { Skeleton } from "@/components/skeleton"

const Section = ({ id, title, color }: { id: string; title: string; color: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // hanya sekali load
    threshold: 0.2, // aktif jika 20% area terlihat
  });

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen flex items-center justify-center border-b border-gray-200"
      style={{ backgroundColor: color }}
    >
      {inView ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-white text-lg font-satoshi">✅ Section ini sudah termuat (lazy loaded)</p>
        </div>
      ) : (
        <div className="w-full max-w-xl flex flex-col items-center gap-3">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      )}
    </section>
  );
};

export default function LazyTestPage() {
  return (
    <main className="min-h-screen">
      <header className="py-8 text-center border-b border-gray-300 bg-white sticky top-0 z-10">
        <h1 className="text-2xl font-semibold">cek</h1>
        <p className="text-gray-600 text-sm font-satoshi">well king</p>
      </header>

      <Section id="one" title="Section 1 — Hero" color="#4F46E5" />
      <Section id="two" title="Section 2 — About" color="#0EA5E9" />
      <Section id="three" title="Section 3 — Services" color="#10B981" />
      <Section id="four" title="Section 4 — Projects" color="#F59E0B" />
      <Section id="five" title="Section 5 — Contact" color="#EF4444" />

      <footer className="py-8 text-center text-sm text-gray-500 bg-white border-t">
        © 2025 Arcipta — Lazy Test Page
      </footer>
    </main>
  );
}
