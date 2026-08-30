import Link from "next/link";
import type { ReactNode } from "react";
import type { BlogBlock } from "@/lib/blogTypes";

/**
 * Renders inline [text](/href) links and **bold** spans inside block text.
 * Internal hrefs (starting with "/") use next/link; external open in a new tab.
 */
function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  // Split on links first, then bold within the remainder.
  const linkRe = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  const pushText = (chunk: string) => {
    const boldRe = /\*\*([^*]+)\*\*/g;
    let boldLast = 0;
    let boldMatch: RegExpExecArray | null;
    while ((boldMatch = boldRe.exec(chunk)) !== null) {
      if (boldMatch.index > boldLast) parts.push(chunk.slice(boldLast, boldMatch.index));
      parts.push(
        <strong key={`b${key++}`} className="text-secondary font-semibold">
          {boldMatch[1]}
        </strong>
      );
      boldLast = boldRe.lastIndex;
    }
    if (boldLast < chunk.length) parts.push(chunk.slice(boldLast));
  };

  while ((match = linkRe.exec(text)) !== null) {
    if (match.index > last) pushText(text.slice(last, match.index));
    const [, label, href] = match;
    parts.push(
      href.startsWith("/") ? (
        <Link key={`l${key++}`} href={href} className="text-primary font-medium hover:underline">
          {label}
        </Link>
      ) : (
        <a
          key={`l${key++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium hover:underline"
        >
          {label}
        </a>
      )
    );
    last = linkRe.lastIndex;
  }
  if (last < text.length) pushText(text.slice(last));
  return parts;
}

export default function ArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-5 md:space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="text-2xl md:text-3xl font-bold text-secondary font-heading pt-4"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="text-xl md:text-2xl font-bold text-secondary font-heading pt-2">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-base md:text-lg text-secondary-light leading-relaxed">
                {renderInline(block.text)}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2.5 ml-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-base md:text-lg text-secondary-light leading-relaxed">
                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-2.5 ml-1 list-none">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-base md:text-lg text-secondary-light leading-relaxed">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center mt-0.5">
                      {j + 1}
                    </span>
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <div
                key={i}
                className="bg-primary/5 border-l-4 border-primary rounded-r-xl px-5 py-4 my-2"
              >
                {block.title && (
                  <p className="font-semibold text-secondary mb-1">{block.title}</p>
                )}
                <p className="text-secondary-light leading-relaxed">{renderInline(block.text)}</p>
              </div>
            );
          case "stat":
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-soft px-6 py-5 text-center my-2"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary font-heading">
                  {block.value}
                </p>
                <p className="text-secondary-light mt-1">{block.label}</p>
                {block.sourceName &&
                  (block.sourceUrl ? (
                    <a
                      href={block.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary/70 hover:underline mt-1 inline-block"
                    >
                      Source: {block.sourceName}
                    </a>
                  ) : (
                    <p className="text-xs text-secondary-light/60 mt-1">
                      Source: {block.sourceName}
                    </p>
                  ))}
              </div>
            );
        }
      })}
    </div>
  );
}
