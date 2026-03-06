import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/tutorial/intro", label: "チュートリアル", match: "/tutorial" },
  { to: "/git", label: "Git知識", match: "/git" },
  { to: "/develop", label: "共同開発", match: "/develop" },
  { to: "/honeycomb", label: "ハチの巣", match: "/honeycomb" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-hunny-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Header — full bleed, no max-width constraint */}
      <header className="sticky top-0 z-50 border-b border-amber-200/60 dark:border-gray-800 bg-hunny-50/80 dark:bg-gray-950/80 backdrop-blur-md">
        <div className="flex items-center h-14 px-6 lg:px-10 gap-2">
          <Link to="/" className="flex-shrink-0">
            <img className="h-8 w-auto" src="/general/hunny-oss-logo.png" alt="Hunny" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 ml-6">
            {navItems.map((item) => {
              const active = location.pathname.startsWith(item.match);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
                    ${active
                      ? "bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-300"
                      : "text-gray-600 dark:text-gray-400 hover:bg-amber-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center ml-auto">
            <a
              href="https://x.com/rubydogjp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
            >
              困ったらXで質問
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden ml-auto p-1.5 rounded-lg hover:bg-amber-50 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden border-t border-amber-200/60 dark:border-gray-800 bg-hunny-50 dark:bg-gray-950 px-4 py-3 space-y-1">
            {navItems.map((item) => {
              const active = location.pathname.startsWith(item.match);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${active
                      ? "bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-300"
                      : "text-gray-600 dark:text-gray-400 hover:bg-amber-50 dark:hover:bg-gray-800"
                    }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="https://x.com/rubydogjp"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-sm text-gray-500 dark:text-gray-400"
            >
              困ったらXで質問
            </a>
          </nav>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-amber-100 via-amber-50 to-hunny-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-950 border-t border-amber-200/60 dark:border-gray-800 mt-auto">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
            {/* Brand column */}
            <div>
              <img className="h-10 w-auto mb-3" src="/general/hunny-oss-logo.png" alt="Hunny" />
              <p className="text-sm text-amber-700/50 dark:text-amber-400/50 leading-relaxed">
                はじめての共同開発、失敗し放題。<br />
                ハチの巣をみんなで作ろう。
              </p>
            </div>

            {/* Shortcuts */}
            <div>
              <h4 className="text-amber-900 dark:text-amber-300 text-sm font-semibold mb-3">ショートカット</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-sm text-amber-700/70 dark:text-amber-400/70 hover:text-amber-900 dark:hover:text-amber-200 transition-colors">ホーム画面</Link></li>
                <li><Link to="/tutorial/intro" className="text-sm text-amber-700/70 dark:text-amber-400/70 hover:text-amber-900 dark:hover:text-amber-200 transition-colors">チュートリアル</Link></li>
                <li><Link to="/tutorial/q-suspend-restart" className="text-sm text-amber-700/70 dark:text-amber-400/70 hover:text-amber-900 dark:hover:text-amber-200 transition-colors">再開/中断</Link></li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-amber-900 dark:text-amber-300 text-sm font-semibold mb-3">関連リンク</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://x.com/rubydogjp" target="_blank" rel="noopener noreferrer" className="text-sm text-amber-700/70 dark:text-amber-400/70 hover:text-amber-900 dark:hover:text-amber-200 transition-colors">
                    X (@rubydogjp)
                  </a>
                </li>
                <li><Link to="/honeycomb" className="text-sm text-amber-700/70 dark:text-amber-400/70 hover:text-amber-900 dark:hover:text-amber-200 transition-colors">ハチの巣</Link></li>
                <li>
                  <a href="https://github.com/rubydogjp/hunny" target="_blank" rel="noopener noreferrer" className="text-sm text-amber-700/70 dark:text-amber-400/70 hover:text-amber-900 dark:hover:text-amber-200 transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-200/40 dark:border-gray-800 text-center py-4 text-xs text-amber-600/40 dark:text-amber-500/30">
          &copy; 2023 Rubydog JP.
        </div>
      </footer>
    </div>
  );
}
