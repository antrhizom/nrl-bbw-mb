"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";
import GlossaryCards from "@/components/GlossaryCards";
import { GLOSSARY } from "@/lib/glossary";

export default function Datenschutz1Section() {
  const { markComplete } = useMerkblatt();
  const sectionId = "datenschutz-1";

  const flipCards = [
    {
      title: "Gefahren bei Nichtbeachtung",
      description:
        "Ohne Beachtung des Datenschutzes entstehen Gefahren wie Identitätsdiebstahl, Diskriminierung und Vertrauensverlust. Die Einhaltung der Datenschutzprinzipien ist daher zwingend.",
    },
    {
      title: "Datenschutzprinzipien",
      description:
        "Die wichtigsten Datenschutzprinzipien sind: Datensparsamkeit (nur nötige Daten erheben), Zweckbindung (Daten nur für den erhobenen Zweck nutzen), Transparenz und Verhältnismässigkeit.",
    },
    {
      title: "Sensibilisierung der Lernenden",
      description:
        "Die Lernenden sind betreffend datenschutzrechtlichen Themen regelmässig zu sensibilisieren.",
    },
  ];

  const glossaryTerms = [
    "Datenschutz",
    "Datensparsamkeit",
    "Zweckbindung",
    "Transparenz",
    "Verhältnismässigkeit",
  ];

  return (
    <SectionCard chapterLabel="Kapitel 4.1" title="Datenschutz – Grundlagen & Prinzipien">
      <p className="text-gray-700 leading-relaxed">
        <InfoTerm>Datenschutz</InfoTerm> schützt
        Personen vor missbräuchlicher Datenverwendung. Zentrale Prinzipien sind{" "}
        <InfoTerm>Datensparsamkeit</InfoTerm>,{" "}
        <InfoTerm>Zweckbindung</InfoTerm>,{" "}
        <InfoTerm>Transparenz</InfoTerm> und{" "}
        <InfoTerm>Verhältnismässigkeit</InfoTerm>.
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
