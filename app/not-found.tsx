import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <p className="font-mono text-sm tracking-[0.3em] text-primary">404</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
        这一分判给谁？
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        你要找的页面出了界——像一记落点刁钻的小三角，接不到了。
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          回到首页
        </Link>
        <Link
          href="/glossary"
          className="rounded-full border px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
        >
          去翻翻词典
        </Link>
      </div>
    </div>
  );
}
