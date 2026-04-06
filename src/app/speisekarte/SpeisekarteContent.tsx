"use client";

import { useEffect, useState } from "react";
import MenuTabs from "@/components/MenuTabs";
import menuData from "../../../content/menu.json";

export default function SpeisekarteContent() {
  const [defaultTab, setDefaultTab] = useState<string | undefined>(undefined);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) setDefaultTab(hash);
  }, []);

  return <MenuTabs key={defaultTab ?? "default"} categories={menuData.speisekarte} defaultTab={defaultTab} />;
}
