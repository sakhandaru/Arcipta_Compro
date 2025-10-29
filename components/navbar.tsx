"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-36 py-3 flex items-center justify-between">
        {/* Left side - Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-6 w-6 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-xs">A</span>
          </div>
          <span className="font-medium tracking-tight text-gray-100">
            Arcipta
          </span>
        </Link>

        {/* Center - Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
          <Link href="/product" className="hover:text-white transition-colors">
            Product
          </Link>
          <Link href="/resources" className="hover:text-white transition-colors">
            Resources
          </Link>
          <Link href="/pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/customers" className="hover:text-white transition-colors">
            Customers
          </Link>
          <Link href="/now" className="hover:text-white transition-colors">
            Now
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-4">
          
          <Link
            href="/signup"
            className="text-sm bg-white text-black px-4 py-1.5 rounded-xl font-medium hover:bg-gray-100 transition-colors"
          >
            Compass
          </Link>
        </div>
      </div>
    </header>
  );
}
