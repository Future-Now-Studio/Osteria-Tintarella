"use client";

import { useState } from "react";

interface MenuItem {
  name: string;
  description?: string;
  price: string;
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
      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-3 -mx-4 px-4">
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
      <div className="mt-6 space-y-0">
        {activeCategory?.items.map((item, i) => (
          <div
            key={item.name}
            className={`py-4 ${
              i < (activeCategory.items.length - 1) ? "border-b border-navy/5" : ""
            }`}
          >
            <div className="flex justify-between items-baseline gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-navy">{item.name}</h3>
                  {item.badge === "Empfehlung" && (
                    <span className="text-[10px] font-bold bg-red/10 text-red px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Empfehlung
                    </span>
                  )}
                  {item.badge === "Scharf" && (
                    <span className="text-[10px] font-bold text-red px-2 py-0.5 rounded-full border border-red/30 uppercase tracking-wider">
                      🌶 Scharf
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-sm text-gold mt-0.5">{item.description}</p>
                )}
              </div>
              <span className="text-red font-bold whitespace-nowrap flex-shrink-0">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
