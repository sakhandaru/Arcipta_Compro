"use client"

import { useState, useEffect } from "react"
import type React from "react"

// Badge component for consistency
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

// Komponen khusus untuk setiap konten
function UnifiedSystemsContent() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="bg-blue-50 p-4 rounded-2xl mb-6">
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h6m0 0V3m0 4l4 4m8 6h-6m0 0v4m0-4l-4-4" />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
        Alur kerja lebih terarah, tim bergerak lebih cepat.
      </h3>

      <p className="text-gray-600 text-center leading-relaxed max-w-sm">
        Kami bantu menyatukan proses yang tersebar jadi satu alur yang rapi,
        sehingga semua divisi bekerja dengan ritme yang sama.
      </p>
    </div>
  )
}


function DataInsightsContent() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="bg-purple-50 p-4 rounded-2xl mb-6">
        <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M4 10h16M4 5h16M8 5v14M12 10v9M16 5v14" />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
        Keputusan lebih cepat dengan data yang terhubung.
      </h3>

      <p className="text-gray-600 text-center leading-relaxed max-w-sm">
        Integrasi data membuat tiap tim melihat sumber yang sama.
        Hasilnya: insight yang jelas dan keputusan yang lebih percaya diri.
      </p>
    </div>
  )
}


function CollaborationContent() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="bg-green-50 p-4 rounded-2xl mb-6">
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8a4 4 0 118 0 4 4 0 01-8 0zm12 10a6 6 0 10-12 0h12z" />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
        Kolaborasi yang lebih sinkron di seluruh tim.
      </h3>

      <p className="text-gray-600 text-center leading-relaxed max-w-sm">
        Semua orang bekerja dengan konteks yang sama. Informasi mengalir lebih cepat,
        dan tidak ada lagi miskomunikasi antar divisi.
      </p>
    </div>
  )
}


function AutomationContent() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="bg-orange-50 p-4 rounded-2xl mb-6">
        <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
        Automasi yang mengurangi beban kerja manual.
      </h3>

      <p className="text-gray-600 text-center leading-relaxed max-w-sm">
        Kami identifikasi proses yang makan waktu dan mengubahnya menjadi otomatis.
        Lebih cepat, lebih konsisten, dan hemat energi tim.
      </p>
    </div>
  )
}


export default function DocumentationSection() {
  const [activeCard, setActiveCard] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  const cards = [
    {
      title: "Alur kerja makin rumit?",
      description: "Data dan tugas tersebar di banyak tempat. Tim kewalahan ngatur prioritas.",
      component: <UnifiedSystemsContent />
    },
    {
      title: "Terlalu banyak tools yang nggak sinkron?",
      description: "Informasi penting nyangkut di tengah. Tiap divisi punya versinya sendiri.",
      component: <DataInsightsContent />
    },
    {
      title: "Kerjaan repetitif makan waktu?",
      description: "Tugas-tugas sederhana menyita energi yang harusnya untuk hal penting.",
      component: <CollaborationContent />
    },
    {
      title: "Bisnis berkembang, tapi arahnya belum jelas?",
      description: "Sulit menentukan prioritas digital mana yang paling berdampak.",
      component: <AutomationContent />
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
      setAnimationKey((prev) => prev + 1)
    }, 4000)

    return () => clearInterval(interval)
  }, [cards.length])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          <Badge
            icon={
              <div className="w-[10.50px] h-[10.50px] outline outline-[1.17px] outline-[#37322F] outline-offset-[-0.58px] rounded-full"></div>
            }
            text="Platform Features"
          />
          <div className="self-stretch text-center flex justify-center flex-col text-[#db6217] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Streamline your business operations
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Dengan arah yang jelas, sistem Anda menjadi lebih sederhana, 
            <br />
            otomatis, dan mendukung pertumbuhan yang berkelanjutan.
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="self-stretch px-4 md:px-9 overflow-hidden flex justify-start items-center">
        <div className="flex-1 py-8 md:py-11 flex flex-col md:flex-row justify-start items-center gap-6 md:gap-12">
          {/* Left Column - Feature Cards */}
          <div className="w-full md:w-auto md:max-w-[400px] flex flex-col justify-center items-center gap-4 order-2 md:order-1">
            {cards.map((card, index) => {
              const isActive = index === activeCard

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-full overflow-hidden flex flex-col justify-start items-start transition-all duration-300 cursor-pointer rounded-lg ${
                    isActive
                      ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset] border border-[rgba(55,50,47,0.12)]"
                      : "border border-[rgba(2,6,23,0.08)]"
                  }`}
                >
                  <div
                    className={`w-full h-0.5 bg-[rgba(50,45,43,0.08)] overflow-hidden ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    <div
                      key={animationKey}
                      className="h-0.5 bg-[#322D2B] animate-[progressBar_4s_linear_forwards] will-change-transform"
                    />
                  </div>
                  <div className="px-6 py-5 w-full flex flex-col gap-2">
                    <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm font-semibold leading-6 font-sans">
                      {card.title}
                    </div>
                    <div className="self-stretch text-[#605A57] text-[13px] font-normal leading-[22px] font-sans whitespace-pre-line">
                      {card.description}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column - Dynamic Content */}
          <div className="w-full md:w-auto rounded-lg flex flex-col justify-center items-center gap-2 order-1 md:order-2 md:px-0 px-[00]">
            <div className="w-full md:w-[580px] h-[300px] md:h-[525px] bg-white shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] overflow-hidden rounded-lg flex flex-col justify-start items-start">
              <div
                className={`w-full h-full transition-all duration-500 ease-in-out ${
                  activeCard === 0
                    ? "bg-gradient-to-br from-gray-50 to-gray-200"
                    : activeCard === 1
                      ? "bg-gradient-to-br from-purple-50 to-purple-100"
                      : activeCard === 2
                        ? "bg-gradient-to-br from-green-50 to-green-100"
                        : "bg-gradient-to-br from-orange-50 to-orange-100"
                }`}
              >
                {cards[activeCard].component}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  )
}