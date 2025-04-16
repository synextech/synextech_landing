"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

export default function NavbarDemo() {
  const { setTheme } = useTheme();
  const navItems = [
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Templates",
      link: "#template",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="top-2 fixed">
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems />
        <div className="flex items-center">
          {/* <NavbarButton variant="secondary"><ModeToggle/></NavbarButton> */}
          <NavbarButton variant="secondary" className="dark:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme("dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            </Button>
          </NavbarButton>
          <NavbarButton variant="secondary" className="hidden dark:flex">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme("light")}
            >
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </NavbarButton>
          <Link href={"https://cal.com/synextech"} target="_blank">
          <Button className="cursor-pointer" >Book a call</Button></Link>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader className="relative">
          <NavbarLogo />
          
          <NavbarButton variant="secondary" className="dark:hidden absolute right-5">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme("dark")}
              className="h-[1.8rem] w-[1.8rem]"
            >
              <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            </Button>
          </NavbarButton>
          <NavbarButton variant="secondary" className="hidden dark:flex absolute right-5">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme("light")}
              className="h-[1.8rem] w-[1.8rem]"
            >
              <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </NavbarButton>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}
          <div className="flex w-full flex-col gap-4">
            {/* <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              Drop Message
            </NavbarButton> */}
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
              href="https://cal.com/synextech"
              target="_blank"
            >
              Book a call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
