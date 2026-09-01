import { Link } from "@tanstack/react-router";
import { CALENDLY } from "@/lib/brand";

export function SiteShell({
  children,
  tone = "client",
}: {
  children: React.ReactNode;
  tone?: "client" | "student";
}) {
  const home = tone === "student" ? "/students" : "/";

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link to={home} className="font-display text-base tracking-tight">
            Steady with <span className="text-clay">Shane</span>
          </Link>
          {tone === "student" ? (
            <a href="#map" className="rounded-full bg-ink px-4 py-2 text-sm text-cream">
              Get the map
            </a>
          ) : (
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink px-4 py-2 text-sm text-cream"
            >
              Book 15 min
            </a>
          )}
        </div>
      </header>
      {children}
      <footer className="border-t border-line px-5 py-10 text-sm text-muted">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <p>Steady with Shane · Shane Ross Lao</p>
          <p>Founder-led · Philippines</p>
        </div>
      </footer>
    </div>
  );
}
