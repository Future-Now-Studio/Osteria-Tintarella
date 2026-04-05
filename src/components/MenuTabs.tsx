"use client";

import { useState, useRef, useEffect } from "react";

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  badge?: string;
}

interface Category {
  id: string;
  name: string;
  items: MenuItem[];
}

interface MenuTabsProps {
  categories: Category[];
}

export default function MenuTabs({ categories }: MenuTabsProps) {
  const [activeTab, setActiveTab] = useState(categories[0]?.id ?? "");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const activeCategory = categories.find((c) => c.id === activeTab);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollRight(el.scrollWidth - el.scrollLeft - el.clientWidth > 8);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div>
      {/* Tabs with scroll fade indicator */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-hide"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-colors flex-shrink-0 ${
                activeTab === cat.id
                  ? "bg-red text-white"
                  : "bg-white text-gold hover:text-navy"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        {/* Right fade gradient to hint at more tabs */}
        <div
          className={`absolute right-0 top-0 bottom-3 w-16 bg-gradient-to-l from-cream to-transparent pointer-events-none transition-opacity duration-300 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Category counter */}
      <div className="flex items-center justify-between mt-2 mb-4">
        <p className="text-xs text-gold/60 tracking-wide">
          {categories.findIndex((c) => c.id === activeTab) + 1} / {categories.length} Kategorien
        </p>
        {canScrollRight && (
          <p className="text-xs text-red/60 tracking-wide flex items-center gap-1 md:hidden">
            <span>Mehr</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </p>
        )}
      </div>

      {/* Items */}
      <div className="space-y-0">
        {activeCategory?.items.map((item, i) => (
          <div
            key={item.name}
            className={`py-4 ${
              i < (activeCategory.items.length - 1) ? "border-b border-navy/5" : ""
            }`}
          >
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold text-navy">{item.name}</h3>
              </div>
              {item.description && (
                <p className="text-sm text-gold mt-0.5">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
