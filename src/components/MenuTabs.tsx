"use client";

import { useState } from "react";

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

  const activeCategory = categories.find((c) => c.id === activeTab);

  return (
    <div>
      {/* Tabs — wrap on mobile so all are always visible */}
      <div className="flex flex-wrap gap-2 pb-3">
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

      {/* Items */}
      <div className="mt-4 space-y-0">
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
