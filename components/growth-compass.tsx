"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface BenefitItemProps {
  text: string;
}

interface CompassBlockProps {
  title: string;
  description: string;
  benefits: string[];
  step: number;
  isLast?: boolean;
}

export default function GrowthCompassVertical() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section - Konsisten dengan bagian lain */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3L4 1L7 3L10 1M1 7L4 5L7 7L10 5M1 11L4 9L7 11L10 9" stroke="#37322F" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
              Growth Compass
            </div>
          </div>
          <div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Peta arah yang bikin setiap langkah lebih terukur.
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
            Tiga tahap yang membantu Anda memahami posisi bisnis hari ini, 
            dan langkah apa yang paling tepat untuk naik ke tahap berikutnya.
          </div>
        </div>
      </div>

      {/* Main Content dengan Pattern Dekoratif - Sama seperti bagian lain */}
      <div className="self-stretch flex justify-center items-start">
        {/* Left Decorative Pattern */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 200 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="flex-1 grid grid-cols-1 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          
          {/* LaunchPad */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6"
          >
            <div className="flex items-start gap-4 sm:gap-6 w-full">
              {/* Step Indicator - Konsisten dengan style badge */}
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#37322F] text-white rounded-full flex items-center justify-center font-semibold text-sm sm:text-base">
                1
              </div>
              
              <div className="flex-1 flex flex-col gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                    LaunchPad
                  </h3>
                  <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                    Bangun fondasi yang siap berkembang. Kami bantu menyusun identitas digital dan kebutuhan awal supaya setiap langkah berikutnya lebih terarah.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Identitas digital yang jelas",
                    "Struktur awal yang rapi",
                    "Onboarding yang lebih mudah",
                    "Dokumentasi dasar yang solid",
                    "Proses kerja lebih terarah",
                    "Siap scale tanpa bottleneck",
                  ].map((benefit, idx) => (
                    <BenefitItem key={idx} text={benefit} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Operate */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6"
          >
            <div className="flex items-start gap-4 sm:gap-6 w-full">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#37322F] text-white rounded-full flex items-center justify-center font-semibold text-sm sm:text-base">
                2
              </div>
              
              <div className="flex-1 flex flex-col gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                    Operate
                  </h3>
                  <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                    Optimalkan proses dan hubungkan sistem. Kami memetakan alur kerja, menutup gap, dan menyambungkan tools biar tim bergerak lebih efisien.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Workflow lebih sinkron",
                    "Integrasi antar-tools yang halus",
                    "Reduksi pekerjaan berulang",
                    "Informasi lebih transparan",
                    "Efisiensi tim meningkat",
                    "Proses lebih mudah dipantau",
                  ].map((benefit, idx) => (
                    <BenefitItem key={idx} text={benefit} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Innovate */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6"
          >
            <div className="flex items-start gap-4 sm:gap-6 w-full">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#37322F] text-white rounded-full flex items-center justify-center font-semibold text-sm sm:text-base">
                3
              </div>
              
              <div className="flex-1 flex flex-col gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                    Innovate
                  </h3>
                  <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                    Kembangkan keunggulan baru dari data. Kami merancang arah inovasi berbasis insight nyata, termasuk peluang automasi dan pemanfaatan AI.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Insight data yang lebih jelas",
                    "Automasi proses repetitif",
                    "Prediksi & analitik lanjutan",
                    "Peluang AI lebih terbuka",
                    "Ide inovasi lebih terarah",
                    "Keunggulan kompetitif jangka panjang",
                  ].map((benefit, idx) => (
                    <BenefitItem key={idx} text={benefit} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Decorative Pattern */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 200 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- COMPONENTS ------------------------------- */

function BenefitItem({ text }: BenefitItemProps) {
  return (
    <div className="flex items-start gap-3 group">
      <div className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 bg-white border border-[rgba(55,50,47,0.15)] rounded flex items-center justify-center flex-shrink-0 group-hover:border-[#37322F] transition-colors duration-200">
        <Check className="w-3 h-3 text-[#37322F]" strokeWidth={2.5} />
      </div>
      <span className="text-[#605A57] text-sm leading-relaxed group-hover:text-[#37322F] transition-colors duration-200 font-sans">
        {text}
      </span>
    </div>
  );
}