import ThemeSwitcher from "@/layouts/components/ThemeSwitcher";
import { Button } from "@/layouts/components/ui/button";
import { Search } from "lucide-react";

interface HeaderActionsProps {
  settings: {
    search: boolean;
    sticky_header: boolean;
    theme_switcher: boolean;
    default_theme: string;
    pagination: number;
    blog_folder: string;
  };
  navigationButton: {
    enable: boolean;
    label: string;
    link: string;
  };
}

export function HeaderActions({
  settings,
  navigationButton,
}: HeaderActionsProps) {
  return (
    <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
      {settings.search && (
        <a
          className="mr-5 inline-block border-r border-border pr-5 text-xl text-text-dark hover:text-primary"
          href="/search"
          aria-label="search"
        >
          <Search />
        </a>
      )}
      <ThemeSwitcher />
      {navigationButton.enable && (
        <Button asChild className="ml-2 h-auto text-white">
          <a
            href={navigationButton.link}
            target={
              navigationButton.link.startsWith("http") ? "_blank" : "_self"
            }
          >
            {navigationButton.label}
          </a>
        </Button>
      )}
    </div>
  );
}
