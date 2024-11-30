'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Icon } from "@iconify/react";

const navigationItems = [
  {
    name: "หน้าแรก",
    href: "/",
    icon: "material-symbols:home",
    external: false,
    mobileOnly: true
  },
  {
    name: "คอร์สเรียน",
    href: "/courses",
    icon: "material-symbols:school",
    external: false
  },
  {
    name: "ฟีเจอร์",
    href: "/features",
    icon: "material-symbols:featured-play-list",
    external: false
  },
  {
    name: "ราคา",
    href: "/pricing",
    icon: "material-symbols:shopping-cart",
    external: false
  }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <div className="bg-black/80 backdrop-blur-sm border-b border-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="h-16 flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="https://learn.wrikka.com/logo/logo.webp"
                  alt="Wrikka Course"
                  width={32}
                  height={32}
                  priority
                />
                <span className="text-white font-medium text-lg">Wrikka Learn</span>
              </Link>

              {/* Desktop Menu */}
              <div className="flex items-center gap-6">
                {navigationItems.filter(item => !item.mobileOnly).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      text-lg font-medium transition-colors
                      ${pathname === item.href ? 'text-white' : 'text-gray-300 hover:text-white'}
                    `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Top Logo */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="h-16 flex items-center justify-center">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="https://learn.wrikka.com/logo/logo.webp"
                  alt="Wrikka Course"
                  width={32}
                  height={32}
                  priority
                />
                <span className="text-white font-medium text-lg">Wrikka Learn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-t border-gray-800">
          <div className="w-full">
            <div className="grid grid-cols-4 h-16">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex flex-col items-center justify-center transition-colors group w-full
                    ${
                      pathname === item.href
                        ? 'text-purple-400'
                        : 'text-gray-400 hover:text-purple-400'
                    }
                  `}
                >
                  <Icon icon={item.icon} className={`
                    w-6 h-6 
                    ${pathname === item.href ? 'text-purple-400' : ''}
                  `} />
                  <span className="text-xl mt-1">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Padding for navigation */}
      <div className="h-16" />
    </>
  );
}
