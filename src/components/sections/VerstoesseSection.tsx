"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";
import GlossaryCards from "@/components/GlossaryCards";
import { GLOSSARY } from "@/lib/glossary";

export default function VerstoesseSection() {
  const { markComplete } = useMerkblatt();
  const sectionId = "verstoesse";

  const flipCards = [
    {
      title: "Massnahmen bei Verstössen",
      description:
        "Bei Verstössen gegen die NRL wird zuerst ein klärendes Gespräch gesucht. Massnahmen reichen von mündlicher Ermahnung über schriftliche Rüge bis zu disziplinarischen Massnahmen. Bei Lernenden können Eltern/Erziehungsberechtigte und Lehrbetriebe informiert werden.",
    },
    {
      title: "Haftungsausschluss",
      description:
        "Die Schule schliesst die Haftung für Schäden aus, die durch Handlungen der Nutzerinnen und Nutzer entstehen. Die Schule behält sich Schadenersatzansprüche und Meldung an Behörden bei schweren Verstössen vor.",
    },
    {
      title: "Rechtliche Grundlagen",
      description:
        "Die BBW hat vom Kanton den Auftrag, eine Nutzungsrichtlinie einzuführen. Diese wird gemäss der rechtlichen Stellung der Schule autonom vollzogen und stützt sich auf die gesetzlichen Grundlagen des Bundes und des Kantons (IDG, Personalgesetz, Disziplinarreglement, AISR, BISR u.a.).",
    },
  ];

  const glossaryTerms = ["TIKT", "PIKT"];

  return (
    <SectionCard chapterLabel="Kapitel 6" title="Verstösse, Haftung & Rechtliches">
      <p className="text-gray-700 mb-6">
        Bei Verstössen gegen die Nutzungsrichtlinie greifen abgestufte Massnahmen. Die{" "}
        <InfoTerm>TIKT</InfoTerm> und <InfoTerm>PIKT</InfoTerm> spielen dabei eine wichtige Rolle
        bei der Umsetzung und Überwachung.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {flipCards.map((card, index) => (
          <FlipCard
            key={index}
            title={card.title}
            description={card.description}
            index={index}
            total={flipCards.length}
            sectionId={sectionId}
            onAllFlipped={() => markComplete(sectionId, "flipcards")}
          />
        ))}
      </div>

      <GlossaryCards
        terms={glossaryTerms}
        glossary={GLOSSARY}
        sectionId={sectionId}
        onAllLearned={() => markComplete(sectionId, "glossary")}
      />
    </SectionCard>
  );
}
