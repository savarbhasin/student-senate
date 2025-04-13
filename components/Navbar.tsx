"use client";
import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { navigationItems } from "@/lib/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const getNavbarStyles = () => {
    if (isHomePage) {
      return isScrolled
        ? "bg-white/90 backdrop-blur-lg shadow-lg"
        : "bg-transparent";
    }
    return "bg-blue-900 shadow-lg";
  };

  const getLinkStyles = (active: boolean) => {
    if (isHomePage) {
      if (active) return "bg-white text-blue-900";
      return isScrolled
        ? "text-blue-900 hover:bg-blue-100"
        : "text-white hover:bg-white/10";
    }
    if (active) return "bg-white text-blue-900";
    return "text-white hover:bg-white/10";
  };

  const getLogoStyles = () => {
    if (isHomePage) {
      return isScrolled ? "text-blue-900" : "text-white";
    }
    return "text-white";
  };

  return (
    <>
      <nav className="fixed w-full top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`
            mx-auto
            ${getNavbarStyles()}
            rounded-full
            transition-all
            duration-300
            mt-4
          `}
          >
            <div className="flex items-center justify-between h-16 px-6">
              <Link href="/" className="flex items-center space-x-3">
                <GraduationCap className={`h-8 w-8 ${getLogoStyles()}`} />
                <span className={`text-xl font-bold ${getLogoStyles()}`}>
                  Student Senate
                </span>
              </Link>

              <div className="hidden md:block">
                <div className="flex items-baseline space-x-1">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`
                        px-4 py-2 rounded-full text-sm font-medium
                        transition-all duration-200
                        ${getLinkStyles(isActive(item.path))}
                      `}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-2 rounded-full transition-colors ${getLogoStyles()} hover:bg-white/10`}
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div
              className={`mx-4 p-4 rounded-2xl ${
                isHomePage ? "bg-white/90 backdrop-blur-lg" : "bg-blue-800"
              }`}
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`
                    block px-4 py-2 rounded-full text-base font-medium
                    transition-all duration-200 mb-1
                    ${getLinkStyles(isActive(item.path))}
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
