"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BookOpen,
  Heart,
  Settings,
} from "lucide-react";

export function MobileBottomNav() {
  const pathname = usePathname();

  const links = [
    {
      href: "/",
      label: "Home",
      icon: Home,
    },
    {
      href: "/stories",
      label: "Stories",
      icon: BookOpen,
    },
    {
      href: "/bookmarks",
      label: "Bookmarks",
      icon: Heart,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  return (
    <nav
      className="
        md:hidden
        fixed
        bottom-0
        left-0
        right-0
        z-50
        border-t
        bg-background/95
        backdrop-blur
      "
    >
      <div className="grid grid-cols-4">
        {links.map((link) => {
          const Icon = link.icon;

          const active =
            pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className="
                flex
                flex-col
                items-center
                justify-center
                py-3
                text-xs
              "
            >
              <Icon
                className={`h-5 w-5 mb-1 ${
                  active
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              />

              <span
                className={
                  active
                    ? "text-primary"
                    : "text-muted-foreground"
                }
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}