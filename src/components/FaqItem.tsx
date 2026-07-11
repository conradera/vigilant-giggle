"use client";

import { useState, useRef } from "react";

export default function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div
      className={`bg-white rounded-lg border border-deep-forest/5 overflow-hidden transition-all duration-300 shadow-sm ${
        open ? "ring-1 ring-leaf-green/30 border-leaf-green/30" : ""
      }`}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-10 text-left focus:outline-none cursor-pointer"
      >
        <span className="font-title-lg text-deep-forest tracking-tight text-xl">
          {question}
        </span>
        <span
          className={`material-symbols-outlined transition-transform duration-300 ${
            open ? "rotate-0" : "rotate-45"
          }`}
        >
          {open ? "remove" : "add"}
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: open ? contentRef.current?.scrollHeight : 0 }}
      >
        <div className="px-10 pb-10 text-on-surface-variant leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
