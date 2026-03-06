import { Link } from "react-router-dom";

/* Inline SVG for a flat-top hexagon */
function Hex({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 87" className={className} fill="currentColor">
      <polygon points="25,0 75,0 100,43.5 75,87 25,87 0,43.5" />
    </svg>
  );
}

const steps = [
  { num: "1", title: "準備", desc: "GitとGitHubアカウントを用意" },
  { num: "2", title: "フォーク", desc: "プロジェクトを自分のアカウントにコピー" },
  { num: "3", title: "イシュー", desc: "やりたいことを宣言" },
  { num: "4", title: "作業", desc: "ハチの巣に自分のセルを追加" },
  { num: "5", title: "PR", desc: "変更をプロジェクトに送信" },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ─── Hero ─── */}
      <section className="relative bg-gradient-to-b from-amber-50 via-hunny-50 to-hunny-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-950 pt-16 pb-24 md:pt-24 md:pb-32">
        {/* Decorative hexagons */}
        <Hex className="absolute top-8 left-[8%] w-16 text-amber-200/40 dark:text-amber-800/20 rotate-12" />
        <Hex className="absolute top-24 right-[10%] w-24 text-amber-300/30 dark:text-amber-700/15 -rotate-6" />
        <Hex className="absolute bottom-12 left-[15%] w-12 text-amber-200/30 dark:text-amber-800/15 rotate-45" />
        <Hex className="absolute bottom-20 right-[20%] w-20 text-amber-100/50 dark:text-amber-900/20 rotate-12" />
        <Hex className="absolute top-40 left-[45%] w-10 text-amber-200/20 dark:text-amber-800/10 -rotate-12" />

        <div className="relative max-w-4xl mx-auto text-center px-4">
          {/* Mascot placeholder */}
          <div className="mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 dark:from-amber-600 dark:to-amber-800 flex items-center justify-center shadow-xl shadow-amber-300/30 dark:shadow-amber-900/30">
            <span className="text-6xl md:text-7xl select-none" role="img" aria-label="bee">
              {/* Placeholder: replace with mascot image */}
              <img
                src="/general/hunny-oss-logo.png"
                alt="Hunny mascot"
                className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-md"
              />
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-hunny-700 dark:text-amber-300 mb-4">
            ハニー
          </h1>
          <p className="text-lg md:text-xl text-amber-800/70 dark:text-amber-200/60 max-w-lg mx-auto mb-10 leading-relaxed">
            はじめての共同開発、失敗し放題。<br className="hidden md:inline" />
            ハチの巣をみんなで作りながら、OSSの世界へ飛び込もう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/tutorial/intro"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-hunny-500 hover:bg-hunny-600 text-hunny-800 font-bold rounded-2xl text-base shadow-lg shadow-amber-400/30 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all"
            >
              チュートリアルを開始
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/honeycomb"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white dark:bg-gray-800 border-2 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 font-semibold rounded-2xl text-base hover:border-amber-400 dark:hover:border-amber-500 hover:-translate-y-0.5 transition-all"
            >
              ハチの巣をみる
            </Link>
          </div>
        </div>
      </section>

      {/* ─── What is Hunny ─── */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-wide mb-4">
              ABOUT
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              OSS開発を、もっと身近に。
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-md shadow-amber-300/30">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                ),
                title: "誰でも参加OK",
                desc: "経験・年齢・スキル不問。GitHubアカウントがあれば今日から始められます。",
              },
              {
                icon: (
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-md shadow-emerald-300/30">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                ),
                title: "失敗しても安全",
                desc: "練習用のプロジェクトだから何度でもやり直せます。壊す心配はゼロ。",
              },
              {
                icon: (
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-violet-500 flex items-center justify-center shadow-md shadow-violet-300/30">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                ),
                title: "すぐ終わる",
                desc: "最短30分のチュートリアル。ハチの巣にあなたのセルが追加されたら完了！",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-amber-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:shadow-amber-100/50 dark:hover:shadow-gray-900/50 transition-shadow"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">{card.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How it works (Steps) ─── */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-hunny-50 to-amber-50/50 dark:from-gray-950 dark:to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-wide mb-4">
              HOW IT WORKS
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              5つのステップで完了
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-amber-200 dark:bg-amber-800/40 -translate-x-1/2" />

            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-1 md:gap-0">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className={`relative md:flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content side */}
                  <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-amber-100 dark:border-gray-800 shadow-sm">
                      <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1">
                        STEP {step.num}
                      </div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-gray-100">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-16 justify-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-amber-300/30 z-10">
                      {step.num}
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Viewer Preview ─── */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-wide mb-4">
            PREVIEW
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            みんなのハチの巣
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
            参加者が増えるたびにセルが埋まっていきます。あなたのセルはどこに？
          </p>
          {/* Placeholder for honeycomb preview image */}
          <div className="relative rounded-2xl overflow-hidden bg-hunny-800 aspect-video max-w-2xl mx-auto shadow-2xl shadow-amber-900/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-3 opacity-40">
                  {[...Array(5)].map((_, i) => (
                    <Hex key={i} className="w-10 text-amber-500" />
                  ))}
                </div>
                <div className="flex justify-center gap-1 mb-3 opacity-40 ml-5">
                  {[...Array(5)].map((_, i) => (
                    <Hex key={i} className="w-10 text-amber-400" />
                  ))}
                </div>
                <div className="flex justify-center gap-1 opacity-40">
                  {[...Array(5)].map((_, i) => (
                    <Hex key={i} className="w-10 text-amber-600" />
                  ))}
                </div>
                <p className="text-amber-200/50 text-sm mt-4 font-medium">
                  &#91; プレビュー画像 &#93;
                </p>
              </div>
            </div>
          </div>
          <Link
            to="/honeycomb"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-hunny-700 dark:bg-amber-800 text-amber-100 font-semibold rounded-2xl hover:bg-hunny-600 dark:hover:bg-amber-700 transition-colors"
          >
            ハチの巣をみる
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-amber-800 to-amber-950 dark:from-amber-950 dark:to-gray-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-50 mb-4">
            さあ、はじめよう。
          </h2>
          <p className="text-amber-200/70 mb-8">
            OSS の世界への第一歩。<br />
            ハチの巣に、あなただけのセルを刻みましょう。
          </p>
          <Link
            to="/tutorial/intro"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-hunny-500 hover:bg-hunny-600 text-hunny-800 font-bold rounded-2xl text-lg shadow-lg shadow-amber-400/30 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all"
          >
            チュートリアルを開始
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
