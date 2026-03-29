"use client";

import { useState, useEffect, useRef } from "react";

interface GlossaryCardsProps {
  terms: string[];
  glossary: Record<string, string>;
  sectionId: string;
  onAllLearned: () => void;
}

export default function GlossaryCards({
  terms,
  glossary,
  sectionId,
  onAllLearned,
}: GlossaryCardsProps) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const completedRef = useRef(false);

  useEffect(() => {
    if (revealed.size === terms.length && !completedRef.current) {
      completedRef.current = true;
      onAllLearned();
    }
  }, [revealed, terms.length, onAllLearned]);

  const toggle = (index: number) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded bg-bbw-blue-100 flex items-center justify-center">
          <span className="text-bbw-blue-500 text-xs font-bold">i</span>
        </div>
        <h4 className="text-sm font-semibold text-gray-700">Fachbegriffe</h4>
        <span className="text-xs text-gray-400">
          {revealed.size}/{terms.length}
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {terms.map((term, i) => {
          const isRevealed = revealed.has(i);
          const definition = glossary[term] || "";
          return (
            <button
              key={`${sectionId}-${term}`}
              onClick={() => toggle(i)}
              className={`text-left rounded-lg border p-3 transition-all duration-200 cursor-pointer min-h-[60px] ${
                isRevealed
                  ? "border-bbw-blue-300 bg-bbw-blue-100"
                  : "border-gray-200 bg-gray-50 hover:border-bbw-blue-300"
              }`}
            >
              <p
                className={`text-sm font-semibold ${
                  isRevealed ? "text-bbw-blue-500" : "text-gray-800"
                }`}
              >
                {term}
              </p>
              {isRevealed && (
                <p className="mt-1 text-xs text-gray-600 leading-relaxed animate-fade-in">
                  {definition}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
