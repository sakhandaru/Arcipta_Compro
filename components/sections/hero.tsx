export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-50">
      <div className="mx-auto max-w-7xl px-8 md:px-36 py-32 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-tight font-satoshi">
            Teknologi yang Tumbuh Bersama <br />
            Tujuan dan Arah Perusahaan Anda.
          </h1>

          <p className="mt-6 text-lg text-neutral-600 max-w-xl leading-relaxed font-satoshi">
            Kami membantu bisnis membangun sistem dengan arah yang jelas — dari
            fondasi, efisiensi, hingga inovasi.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button className="bg-neutral-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors">
              Mulai dengan Growth Compass
            </button>
            <button className="text-neutral-800 font-medium hover:underline flex items-center gap-2">
              Pelajari bagaimana kami bekerja →
            </button>
          </div>
        </div>

        {/* Right: Mockup / Image Placeholder */}
        {/* <div className="flex-1 relative">
          <div className="relative aspect-[4/3] w-full rounded-2xl shadow-2xl bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
              (Mockup Placeholder)
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
