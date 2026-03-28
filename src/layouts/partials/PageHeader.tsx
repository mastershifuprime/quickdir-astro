import HeroBg from "../components/HeroBg";
import Search from "../components/Search";

const PageHeader = ({
  title,
  description,
  enableSearch = false,
}: {
  title: string;
  description?: string;
  enableSearch?: boolean;
}) => {
  return (
    <section className="relative section before:absolute before:left-0 before:bottom-0 before:w-full before:h-[60px] before:bg-gradient-to-t before:from-background before:to-transparent before:z-0 overflow-hidden">
      <HeroBg />
      <div className="container text-center">
        <div className="lg:w-8/12 mx-auto">
          <h1 className="font-semibold mb-6">{title}</h1>
          <p className="text-lg leading-8 mb-8">{description ?? ""}</p>
          {enableSearch && <Search isHome={true} />}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
