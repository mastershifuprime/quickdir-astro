import DynamicIcon from "@/helpers/DynamicIcon";

export interface ISocial {
  name: string;
  icon: any;
  link: string;
}

const Social = ({
  source,
  className,
}: {
  source: ISocial[];
  className: string;
}) => {
  return (
    <ul className={className}>
      {source.map((social) => (
        <li
          key={social.name}
          className="hover:translate-y-0.5 transition-transform duration-200"
        >
          <a
            aria-label={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <span className="sr-only">{social.name}</span>
            <DynamicIcon className="inline-block" icon={social.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
