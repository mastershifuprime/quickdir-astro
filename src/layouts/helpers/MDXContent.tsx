import { marked } from "marked";

const MDXContent = ({ content }: { content: any }) => {
  if (!content) return null;

  const htmlContent = typeof content === "string" ? marked.parse(content) : "";

  return <div dangerouslySetInnerHTML={{ __html: htmlContent as string }} />;
};

export default MDXContent;
