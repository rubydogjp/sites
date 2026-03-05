import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export interface DocPage {
  slug: string;
  title: string;
  content: string;
}

interface Props {
  basePath: string;
  pages: DocPage[];
}

export default function DocsLayout({ basePath, pages }: Props) {
  const { slug } = useParams();
  const currentSlug = slug || pages[0]?.slug;
  const currentIndex = pages.findIndex((p) => p.slug === currentSlug);
  const current = pages[currentIndex];
  const prev = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const next = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  if (!current) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">ページが見つかりません</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto flex min-h-[calc(100vh-3.5rem-200px)]">
      {/* Sidebar */}
      <nav className="hidden md:block w-56 flex-shrink-0 border-r border-amber-200/40 dark:border-gray-800 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-6 px-3">
        <div className="space-y-0.5">
          {pages.map((page) => {
            const active = page.slug === currentSlug;
            return (
              <Link
                key={page.slug}
                to={`${basePath}/${page.slug}`}
                className={`block px-3 py-1.5 rounded-lg text-sm transition-colors
                  ${active
                    ? "bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-300 font-semibold"
                    : "text-gray-600 dark:text-gray-400 hover:bg-amber-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100"
                  }`}
              >
                {page.title}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Content */}
      <article className="flex-1 min-w-0 px-6 md:px-10 py-8 max-w-3xl">
        <div className="prose leading-relaxed">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {current.content}
          </ReactMarkdown>
        </div>

        <div className="flex justify-between mt-12 pt-6 border-t border-amber-200/40 dark:border-gray-800 gap-4">
          {prev ? (
            <Link
              to={`${basePath}/${prev.slug}`}
              className="group flex flex-col px-4 py-3 border border-amber-200/60 dark:border-gray-800 rounded-xl hover:border-amber-400 dark:hover:border-amber-600 transition-colors max-w-[45%]"
            >
              <span className="text-xs text-gray-400 uppercase tracking-wide">前へ</span>
              <span className="font-semibold text-sm text-gray-700 dark:text-gray-300 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">{prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link
              to={`${basePath}/${next.slug}`}
              className="group flex flex-col items-end px-4 py-3 border border-amber-200/60 dark:border-gray-800 rounded-xl hover:border-amber-400 dark:hover:border-amber-600 transition-colors max-w-[45%] ml-auto"
            >
              <span className="text-xs text-gray-400 uppercase tracking-wide">次へ</span>
              <span className="font-semibold text-sm text-gray-700 dark:text-gray-300 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">{next.title}</span>
            </Link>
          ) : <span />}
        </div>
      </article>
    </div>
  );
}
