"use client";

import { usePathname } from "next/navigation";
import { useEffect, useCallback } from "react";

function scrollToHash() {
  const hash = window.location.hash;
  if (!hash) return;
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  requestAnimationFrame(() => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

export default function ScrollToHash() {
  const pathname = usePathname();

  const handleHashChange = useCallback(scrollToHash, []);

  useEffect(() => {
    scrollToHash();
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [handleHashChange]);

  return null;
}
