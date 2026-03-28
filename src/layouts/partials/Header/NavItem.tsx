import { cn } from "@/lib/utils/shadcn";
import { cva } from "class-variance-authority";

interface NavItemProps {
  children: React.ReactNode;
  variant?: "default" | "dropdown";
  className?: string;
}

const navItemVariants = cva("nav-item", {
  variants: {
    variant: {
      default: "",
      dropdown: "nav-dropdown group relative",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default function NavItem({
  children,
  variant,
  className,
}: NavItemProps) {
  return (
    <li className={cn(navItemVariants({ variant }), className)}>{children}</li>
  );
}
