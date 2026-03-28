import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import type { CallToAction as CallToActionType } from "@/types";
import BgStars from "../components/BgStars";
import HeroBg from "../components/HeroBg";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: CallToActionType;
}

const CallToAction = () => {
  const ctaData = getListPage("sections/call-to-action.md") as PageData;

  return (
    <>
      {ctaData.frontmatter.enable && (
        <section className="section">
          <div className="container relative box-border">
            <div className="absolute inset-0 overflow-hidden mx-4 rounded-3xl -z-10">
              <BgStars />
            </div>
            <div className="text-center border border-border rounded-3xl bg-light/80 px-4 py-16 xl:p-20 relative isolate">
              <HeroBg />
              <h2
                dangerouslySetInnerHTML={markdownify(ctaData.frontmatter.title)}
                className="mb-5"
              />
              <p
                dangerouslySetInnerHTML={markdownify(
                  ctaData.frontmatter.description,
                )}
                className="mb-5 lg:col-8 lg:mx-auto text-h6"
              />
              {ctaData.frontmatter.button.enable && (
                <a
                  className="btn btn-primary"
                  href={ctaData.frontmatter.button.link}
                  target={
                    ctaData.frontmatter.button.link.startsWith("http")
                      ? "_blank"
                      : "_self"
                  }
                >
                  {ctaData.frontmatter.button.label}
                </a>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction;
