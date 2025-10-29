'use client'
import { TextAnimate } from "@/components/ui/text-animate"
import { Button } from "@/components/ui/button"
import { h1, h5, p, section } from "motion/react-client";
import { Skeleton } from "@/components/skeleton"
import { useState, useEffect } from "react";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasikan loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 detik loading

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="relative overflow-hidden bg-neutral-50">
        <div className="mx-auto max-w-7xl px-8 md:px-36 py-36 md:flex-row items-center md:items-start justify-between gap-12">
          {/* Skeleton untuk text content */}
          <div className="flex-1 text-left">
            <Skeleton className="h-12 md:h-16 w-3/4 mb-4" />
            <Skeleton className="h-12 md:h-16 w-2/3 mb-4" />
            <Skeleton className="h-12 md:h-16 w-1/2 mb-6" />
            
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-5/6 mb-2" />
            <Skeleton className="h-6 w-4/6 mb-6" />
            
            <Skeleton className="h-12 w-64" />
          </div>

          {/* Skeleton untuk gambar */}
          <div className="w-full mt-8">
            <Skeleton className="w-full h-64 md:h-80" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-neutral-50">
      <div className="mx-auto max-w-7xl px-8 md:px-36 py-36 md:flex-row items-center md:items-start justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 text-left">
          <TextAnimate delay={0.5} animation="blurInUp" by="word" as={h1} className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-tight font-satoshi">
            Teknologi yang Tumbuh Bersama 
            Tujuan dan Arah Perusahaan Anda.
          </TextAnimate>

          <TextAnimate delay={1} animation="blurInUp" by="word" as={p} className="mt-6 text-lg text-neutral-600 max-w-xl leading-relaxed font-satoshi">
            Kami membantu bisnis membangun sistem dengan arah yang jelas — dari
            fondasi, efisiensi, hingga inovasi
          </TextAnimate>
          

          <div className="mt-8 flex items-center gap-0">
            <Button variant="outline">
              Pelajari bagaimana kami bekerja →
            </Button>
            
          </div>
        </div>

        {/* Right: Mockup / Image Placeholder */}
        <div className="w-full mt-8">
          <img src="/3layer.svg" alt="3 layer illustration" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}