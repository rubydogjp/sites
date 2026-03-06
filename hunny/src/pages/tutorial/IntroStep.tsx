import { ImageFrame, Callout, PageNav } from "../../components/docs";

export default function IntroStep() {
  return (
    <>
      {/* Hero */}
      <div className="text-center mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-wide mb-4">
          TUTORIAL
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          はじめに
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          OSS共同開発を体験するチュートリアルです
        </p>
      </div>

      <ImageFrame src="/tutorial/welcome.gif" alt="ようこそ" />

      {/* About this project */}
      <div className="my-10 rounded-2xl bg-gradient-to-br from-amber-50 to-hunny-50 dark:from-gray-900 dark:to-gray-900/80 border border-amber-100 dark:border-gray-800 p-6 md:p-8">
        <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-medium mb-6">
          ハニー は <strong className="text-amber-700 dark:text-amber-300">OSS開発</strong> への参加を支援するために作られた日本のプロジェクトです。
        </p>

        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <span className="text-2xl">🎯</span>
          OSSコントリビューターを目指そう！
        </h3>

        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            <strong>OSS (オープン ソース ソフトウェア)</strong> とは、基本的に無料で誰でも自由に使えるソフトウェアのことです。
          </p>
          <p>
            世界中の開発者たちが協力し合いながら多くのプロジェクトが進んでおり、
            OSSコントリビューター <strong className="text-amber-700 dark:text-amber-300">(貢献者)</strong> は開発者にとって目指すべき目標のひとつです。
          </p>
          <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
            チュートリアルの後は、是非あなたの <strong className="text-amber-600 dark:text-amber-400">推しOSS</strong> へ参加してみませんか？
          </p>
        </div>
      </div>

      {/* What's next */}
      <div className="my-10 text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          これから共同開発のチュートリアルを始めていきます。
        </p>
      </div>

      <Callout variant="tip" title="画面サイズ">
        ここから先はパソコンで見ることをオススメします
      </Callout>

      <PageNav
        basePath="/tutorial"
        prev={null}
        next={{ slug: "setup", title: "手順1. 準備" }}
      />
    </>
  );
}
