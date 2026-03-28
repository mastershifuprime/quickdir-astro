import { markdownify } from "@/lib/utils/textConverter";
import type { Homepage } from "@/types";
import React from "react";
import AnimatedBadge from "../components/AnimatedBadge";
import HeroBg from "../components/HeroBg";
import Search from "../components/Search";

const HeroSection: React.FC<{
  heroData: Homepage["frontmatter"]["banner"];
}> = ({ heroData }) => {
  return (
    <section className="py-24 relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-[60px] before:bg-gradient-to-t before:from-background before:to-transparent before:z-0 overflow-hidden">
      <HeroBg />
      <div className="container text-center relative z-10">
        <div className="lg:col-8 mx-auto">
          <AnimatedBadge badgeTitle={heroData?.badge} />
          <h1
            className="hero-title-gradient mb-6"
            dangerouslySetInnerHTML={markdownify(heroData?.title)}
          />
          <p
            className="text-h6 mb-8"
            dangerouslySetInnerHTML={markdownify(heroData?.content)}
          />
          <Search isHome={true} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
