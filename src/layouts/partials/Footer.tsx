import config from "@/config/config.json";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import Logo from "../components/Logo";
import Social from "../components/Social";

const Footer = () => {
  const { copyright, footer_text } = config.params;

  return (
    <footer className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 2xl:pr-40 xl:pr-20">
            <Logo />
            <p
              className="text-slate-400 my-6"
              dangerouslySetInnerHTML={markdownify(footer_text)}
            />
          </div>
          {menu.footer.map((linkGroups) => (
            <div key={linkGroups.name} className="space-y-4">
              <h3 className="text-lg font-semibold mb-2">{linkGroups.name}</h3>
              <ul className="space-y-2">
                {linkGroups.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p
            className="[&>a]:hover:underline"
            dangerouslySetInnerHTML={markdownify(copyright)}
          />
          <Social source={social.main} className="social-icons" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
