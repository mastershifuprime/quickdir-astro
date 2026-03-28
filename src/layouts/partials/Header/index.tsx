import Logo from "@/layouts/components/Logo";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import { HeaderActions } from "./HeaderActions";
import { NavbarToggle } from "./NavbarToggle";
import { NavigationMenu } from "./NavigationMenu";

const Header = ({ pathname }: { pathname?: string }) => {
  const settings = config.settings;

  return (
    <header
      className={`header z-30 border-b border-b-border/50 ${settings.sticky_header ? "sticky top-0" : ""}`}
    >
      <nav className="navbar container">
        <div className="order-0 grid place-items-center">
          <Logo />
        </div>
        <NavbarToggle />
        <NavigationMenu
          main={menu.main}
          navigationButton={config.navigation_button}
          pathname={pathname}
        />
        <HeaderActions
          settings={settings}
          navigationButton={config.navigation_button}
        />
      </nav>
    </header>
  );
};

export default Header;
