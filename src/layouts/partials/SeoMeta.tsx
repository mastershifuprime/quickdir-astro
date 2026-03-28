// SEO meta is handled in Base.astro layout
// This component exists for import compatibility

const SeoMeta = (_props: {
  title?: string;
  meta_title?: string;
  image?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}) => {
  return null;
};

export default SeoMeta;
