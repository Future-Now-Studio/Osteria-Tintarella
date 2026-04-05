import siteData from "../../content/site.json";

export default function FloatingCallButton() {
  return (
    <a
      href={siteData.opentable.url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-red rounded-full flex items-center gap-2 shadow-lg shadow-red/30 hover:bg-red-dark active:scale-95 transition-all px-5 py-3.5 text-white font-bold text-xs tracking-widest uppercase"
      aria-label="Tisch reservieren"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
      <span className="hidden sm:inline">Reservieren</span>
    </a>
  );
}
