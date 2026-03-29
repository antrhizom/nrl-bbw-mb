"use client";

import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from "react";

export const SECTION_IDS = [
  "welcome",
  "allgemein",
  "nutzung-it",
  "datensicherheit-1",
  "datensicherheit-2",
  "datensicherheit-3",
  "datenschutz-1",
  "datenschutz-2",
  "datenschutz-3",
  "urheberrecht-1",
  "urheberrecht-2",
  "verstoesse",
  "abschluss",
] as const;

type SectionId = (typeof SECTION_IDS)[number];

interface MerkblattContextType {
  currentIndex: number;
  currentSectionId: SectionId;
  totalSections: number;
  progress: number;
  completedSections: Set<SectionId>;
  canProceed: boolean;
  isFullyCompleted: boolean;
  goNext: () => void;
  goPrev: () => void;
  goTo: (index: number) => void;
  markComplete: (sectionId: string, part: "flipcards" | "glossary") => void;
  isPartComplete: (sectionId: string, part: "flipcards" | "glossary") => boolean;
}

const MerkblattContext = createContext<MerkblattContextType | null>(null);

export function MerkblattProvider({ children }: { children: ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completions, setCompletions] = useState<Record<string, Set<string>>>({});

  const currentSectionId = SECTION_IDS[currentIndex];
  const totalSections = SECTION_IDS.length;

  const completableIds = SECTION_IDS.filter((id) => id !== "welcome" && id !== "abschluss");

  const isSectionComplete = useCallback(
    (sectionId: string) => {
      const parts = completions[sectionId];
      if (!parts) return false;
      return parts.has("flipcards") && parts.has("glossary");
    },
    [completions]
  );

  const completedSections = useMemo(() => {
    const set = new Set<SectionId>();
    for (const id of SECTION_IDS) {
      if (isSectionComplete(id)) set.add(id);
    }
    return set;
  }, [isSectionComplete]);

  const completedCount = completableIds.filter((id) => completedSections.has(id)).length;
  const progress = Math.round((completedCount / completableIds.length) * 100);
  const isFullyCompleted = completedCount === completableIds.length;

  const canProceed = useMemo(() => {
    const sid = SECTION_IDS[currentIndex];
    if (sid === "welcome" || sid === "abschluss") return true;
    return isSectionComplete(sid);
  }, [currentIndex, isSectionComplete]);

  const markComplete = useCallback((sectionId: string, part: "flipcards" | "glossary") => {
    setCompletions((prev) => {
      const parts = new Set(prev[sectionId] || []);
      parts.add(part);
      return { ...prev, [sectionId]: parts };
    });
  }, []);

  const isPartComplete = useCallback(
    (sectionId: string, part: "flipcards" | "glossary") => {
      return completions[sectionId]?.has(part) ?? false;
    },
    [completions]
  );

  const goNext = useCallback(() => {
    setCurrentIndex((i) => Math.min(i + 1, totalSections - 1));
  }, [totalSections]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSections) setCurrentIndex(index);
    },
    [totalSections]
  );

  const value: MerkblattContextType = {
    currentIndex,
    currentSectionId,
    totalSections,
    progress,
    completedSections,
    canProceed,
    isFullyCompleted,
    goNext,
    goPrev,
    goTo,
    markComplete,
    isPartComplete,
  };

  return <MerkblattContext.Provider value={value}>{children}</MerkblattContext.Provider>;
}

export function useMerkblatt() {
  const ctx = useContext(MerkblattContext);
  if (!ctx) throw new Error("useMerkblatt must be used within MerkblattProvider");
  return ctx;
}
