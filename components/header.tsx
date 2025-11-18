"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[88%] md:w-[70%]
        rounded-full px-4 py-2 flex items-center justify-between
        backdrop-blur-xl bg-white/10

        border border-[rgba(55,50,47,0.12)]
        shadow-[0_0_0_1px_white_inset]
      "
    >
      {/* Left Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/asset/logo.png"
          alt="Arcipta Logo"
          width={18}
          height={18}
          className="object-contain"
        />
        <span className="font-semibold tracking-tight text-[#db6217] text-sm">
          arcipta.com
        </span>
      </Link>

      {/* Middle Menu */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link href="#services" className="hover:opacity-80 transition">Services</Link>
        <Link href="#workflow" className="hover:opacity-80 transition">Workflow</Link>
        <Link href="#projects" className="hover:opacity-80 transition">Projects</Link>
        <Link href="#pricing" className="hover:opacity-80 transition">Pricing</Link>
        <Link href="#about" className="hover:opacity-80 transition">About</Link>
      </div>

      {/* CTA */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
        <Button className="rounded-full px-4 py-1.5 text-sm">
          Try Consult
        </Button>
      </motion.div>
    </motion.nav>
  );
}
