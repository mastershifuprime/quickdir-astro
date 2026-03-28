// Base frontmatter interface
export interface BaseFrontmatter {
  title: string;
  image?: string;
  description?: string;
  meta_title?: string;
  date?: string;
  draft?: boolean;
}

// Extended frontmatter types
export interface RegularPageFrontmatter extends BaseFrontmatter {
  layout?: string;
}

export interface PostFrontmatter extends BaseFrontmatter {
  categories: string[];
  author: string;
  tags: string[];
  date?: string;
}

export interface AuthorFrontmatter extends BaseFrontmatter {
  social: {
    name: string;
    icon: string;
    link: string;
  }[];
}

export interface ProductFrontmatter extends BaseFrontmatter {
  logo: string;
  keywords?: string;
  category: string;
  tags?: string[];
  github?: string;
  author: string;
  author_link?: string;
  price?: number;
  demo?: string;
}

// Content types
export interface RegularPage {
  frontmatter: RegularPageFrontmatter;
  content: string;
  slug?: string;
}

export interface Homepage {
  frontmatter: {
    title: string;
    description: string;
    meta_title: string;
    image: string;
    banner: {
      badge: string;
      title: string;
      content: string;
      image: string;
    };
    featured_products: string[];
    popular_products: string[];
    items_by_section: {
      title: string;
      subtitle: string;
    };
  };
}

export interface Post {
  frontmatter: PostFrontmatter;
  slug?: string;
  content?: string;
}

export interface Author {
  frontmatter: AuthorFrontmatter;
  content?: string;
  slug?: string;
}

export interface Button {
  enable: boolean;
  label: string;
  link: string;
}

export interface Benefits {
  title: string;
  content: string;
  image: string;
}

export interface Experience {
  title: string;
  benefits: Benefits[];
}

export interface Feature {
  title: string;
  content: string;
  icon: string;
}

export interface Features {
  title: string;
  features: Feature[];
}

export interface FeatureDetails {
  button: Button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
}

export interface Testimonial {
  name: string;
  designation: string;
  avatar: string;
  content: string;
}

export interface CallToAction {
  enable?: boolean;
  title: string;
  description: string;
  image: string;
  button: Button;
}

export interface Product {
  frontmatter: ProductFrontmatter;
  content?: string;
  slug: string;
}

export type Client = string;
