import { useEffect, useState } from "react";
import NavLink from "../NavLink";
import NavItem from "./NavItem";

interface NavigationMenuProps {
  main: Array<{
    name: string;
    url: string;
    hasChildren?: boolean;
    children?: Array<{
      name: string;
      url: string;
    }>;
  }>;
  navigationButton: {
    enable: boolean;
    label: string;
    link: string;
  };
  pathname?: string;
}

export function NavigationMenu({ main, pathname }: NavigationMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleDropdownClick = (index: number, e: React.MouseEvent) => {
    if (window.innerWidth < 1024) {
      e.preventDefault();
      toggleDropdown(index);
    }
  };

  useEffect(() => {
    setActiveDropdown(null);
    const navToggle = document.getElementById("nav-toggle") as HTMLInputElement;
    if (navToggle) {
      navToggle.checked = false;
    }
  }, [pathname]);

  return (
    <ul
      id="nav-menu"
      className="navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8"
    >
      {main.map((menu, i) => (
        <NavItem
          key={i}
          variant={menu.hasChildren ? "dropdown" : "default"}
          className={activeDropdown === i ? "active" : ""}
        >
          {menu.hasChildren && menu.children?.length ? (
            <>
              <span
                className="nav-link inline-flex items-center lg:cursor-default"
                onClick={(e) => handleDropdownClick(i, e)}
              >
                {menu.name}
                <svg
                  className={`h-4 w-4 fill-current ${activeDropdown === i ? "transform rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
              <ul className="nav-dropdown-list lg:group-hover:visible lg:group-hover:opacity-100">
                {menu.children?.map((child, j) => (
                  <NavItem variant="dropdown" key={j}>
                    <NavLink
                      href={child.url}
                      className="nav-dropdown-link block"
                      pathname={pathname}
                    >
                      {child.name}
                    </NavLink>
                  </NavItem>
                ))}
              </ul>
            </>
          ) : (
            <NavLink
              href={menu.url}
              className="nav-link inline-flex items-center"
              pathname={pathname}
            >
              {menu.name}
            </NavLink>
          )}
        </NavItem>
      ))}
    </ul>
  );
}
