"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function StoryBody({ body }: { body: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => (
          <p className="text-base leading-relaxed mb-5" style={{ color: "#C5B49A" }}>
            {children}
          </p>
        ),
        h2: ({ children }) => (
          <h2
            className="text-2xl font-bold mt-12 mb-4 leading-snug"
            style={{ fontFamily: "var(--font-source-serif)", color: "#E8E4DC" }}
          >
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3
            className="text-lg font-bold mt-8 mb-3"
            style={{ fontFamily: "var(--font-source-serif)", color: "#E8E4DC" }}
          >
            {children}
          </h3>
        ),
        strong: ({ children }) => (
          <strong style={{ color: "#E8E4DC", fontWeight: 600 }}>{children}</strong>
        ),
        em: ({ children }) => (
          <em style={{ color: "#C5B49A" }}>{children}</em>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-[#D4A853]"
            style={{ color: "#C5B49A" }}
          >
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote
            className="border-l-2 pl-5 my-6 italic"
            style={{ borderColor: "#D4A853", color: "#8B8B8B" }}
          >
            {children}
          </blockquote>
        ),
        hr: () => (
          <hr className="my-10" style={{ borderColor: "#2A3545" }} />
        ),
        ul: ({ children }) => (
          <ul className="mb-5 space-y-1.5 pl-5 list-disc" style={{ color: "#C5B49A" }}>
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-5 space-y-1.5 pl-5 list-decimal" style={{ color: "#C5B49A" }}>
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="text-base leading-relaxed">{children}</li>
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse" style={{ color: "#C5B49A" }}>
              {children}
            </table>
          </div>
        ),
        th: ({ children }) => (
          <th
            className="text-left px-4 py-2 border-b font-semibold text-xs tracking-widest uppercase"
            style={{ borderColor: "#2A3545", color: "#8B8B8B", fontFamily: "var(--font-jetbrains-mono)" }}
          >
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-4 py-2.5 border-b" style={{ borderColor: "#2A3545" }}>
            {children}
          </td>
        ),
        code: ({ children }) => (
          <code
            className="px-1.5 py-0.5 rounded text-xs"
            style={{ backgroundColor: "#1A2535", color: "#D4A853", fontFamily: "var(--font-jetbrains-mono)" }}
          >
            {children}
          </code>
        ),
      }}
    >
      {body}
    </ReactMarkdown>
  );
}
