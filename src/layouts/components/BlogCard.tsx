import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import dateFormat from "@/lib/utils/dateFormat";
import { slugify } from "@/lib/utils/textConverter";
import type { Post } from "@/types";

const BlogCard = ({ data }: { data: Post }) => {
  const { blog_folder } = config.settings;
  const { title, image, author, date } = data.frontmatter;
  const authorContentPath = `/authors/${slugify(author)}.md`;
  const authorData = getListPage(authorContentPath) as any;

  return (
    <div className="bg-body dark:bg-body">
      <ul className="mb-5 flex items-center gap-3">
        <li className="inline-block">
          <p className="flex items-center gap-2 text-text-dark">
            <img
              src={authorData?.frontmatter?.image || "/images/placeholder.png"}
              className="mr-1 object-cover rounded-full size-6"
              width={30}
              height={30}
              alt={author}
            />
            <span className="text-base">{author}</span>
          </p>
        </li>
        <li className="text-sm">|</li>
        {date && <li className="inline-block">{dateFormat(date)}</li>}
      </ul>

      {image && (
        <img
          className="mb-6 w-full rounded-xl"
          src={image}
          width={445}
          height={260}
          alt={title}
        />
      )}

      <h4 className="mb-3 font-medium text-h5">
        <a href={`/${blog_folder}/${data.slug}`}>{title}</a>
      </h4>
    </div>
  );
};

export default BlogCard;
