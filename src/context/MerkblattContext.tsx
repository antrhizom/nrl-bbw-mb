"use client";

import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from "react";

export const SECTION_IDS = [
  "welcome",
  "allgemein",
  "datensicherheit",
  "kommunikation",
  "datenschutz",
  "urheberrecht",
  "abschluss",
] as const;

type SectionId = (typeof SECTION_IDS)[number];

interface MerkblattContextType {
  currentIndex: number;
  currentSectionId: SectionId;
  totalSections: number;
  progress: number;
  completedSections: Set<SectionId>;
  interactiveCompleted: Record<string, boolean>;
  quizPassed: Record<string, boolean>;
  canProceed: boolean;
  isFullyCompleted: boolean;
  goNext: () => void;
  goPrev: () => void;
  goTo: (index: number) => void;
  markInteractiveComplete: (sectionId: string) => void;
  markQuizPassed: (sectionId: string) => void;
}

const MerkblattContext = createContext<MerkblattContextType | null>(null);

export function MerkblattProvider({ children }: { children: ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedSections, setCompletedSections] = useState<Set<SectionId>>(new Set());
  const [interactiveCompleted, setInteractiveCompleted] = useState<Record<string, boolean>>({});
  const [quizPassed, setQuizPassed] = useState<Record<string, boolean>>({});

  const currentSectionId = SECTION_IDS[currentIndex];
  const totalSections = SECTION_IDS.length;

  const completableIds = SECTION_IDS.filter((id) => id !== "welcome" && id !== "abschluss");
  const completableCount = completableIds.length;
  const completedCount = completableIds.filter((id) => completedSections.has(id)).length;
  const progress = Math.round((completedCount / completableCount) * 100);

  const isFullyCompleted = completedCount === completableCount;

  const canProceed = useMemo(() => {
    const sid = SECTION_IDS[currentIndex];
    if (sid === "welcome" || sid === "abschluss") return true;
    return !!interactiveCompleted[sid] && !!quizPassed[sid];
  }, [currentIndex, interactiveCompleted, quizPassed]);

  const markInteractiveComplete = useCallback((sectionId: string) => {
    setInteractiveCompleted((prev) => ({ ...prev, [sectionId]: true }));
  }, []);

  const markQuizPassed = useCallback(
    (sectionId: string) => {
      setQuizPassed((prev) => ({ ...prev, [sectionId]: true }));
      setCompletedSections((prev) => {
        const next = new Set(prev);
        next.add(sectionId as SectionId);
        return next;
      });
    },
    []
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
    interactiveCompleted,
    quizPassed,
    canProceed,
    isFullyCompleted,
    goNext,
    goPrev,
    goTo,
    markInteractiveComplete,
    markQuizPassed,
  };

  return <MerkblattContext.Provider value={value}>{children}</MerkblattContext.Provider>;
}

export function useMerkblatt() {
  const ctx = useContext(MerkblattContext);
  if (!ctx) throw new Error("useMerkblatt must be used within MerkblattProvider");
  return ctx;
}
