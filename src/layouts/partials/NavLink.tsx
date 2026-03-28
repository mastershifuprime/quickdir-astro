import { cn } from "@/lib/utils/shadcn";
import React from "react";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  activeClass?: string;
  className?: string;
  pathname?: string;
}

export default function NavLink({
  children,
  href,
  activeClass = "active",
  className,
  pathname = "",
}: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "nav-link block",
        className,
        (pathname === `${href}/` || pathname === href) && activeClass,
      )}
    >
      {children}
    </a>
  );
}
