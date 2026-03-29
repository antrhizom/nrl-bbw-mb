"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";
import GlossaryCards from "@/components/GlossaryCards";
import { GLOSSARY } from "@/lib/glossary";

export default function AllgemeinSection() {
  const { markComplete } = useMerkblatt();
  const sectionId = "allgemein";

  const flipCards = [
    {
      title: "Zweck der NRL",
      description:
        "Die NRL regelt den sicheren und verantwortungsvollen Umgang mit den IKT-Systemen der BBW und stützt sich auf kantonale und eidgenössische Rechtsgrundlagen.",
    },
    {
      title: "Geltungsbereich",
      description:
        "Die NRL gilt für alle Nutzenden der BBW-IKT-Systeme – Lernende, Lehrpersonen, Schulleitung, Verwaltung und Gäste.",
    },
    {
      title: "Auswertung von Logdaten",
      description:
        "Logdaten (z.B. Firewall, Server) werden gesammelt und regelmässig in anonymisierter Form ausgewertet. Bei konkretem Verdacht auf Missbrauch können personenbezogene Auswertungen erfolgen.",
    },
  ];

  const glossaryTerms = ["IKT-Systeme", "Logdaten"];

  return (
    <SectionCard chapterLabel="Kapitel 1" title="Allgemeine Bestimmungen">
      <p className="text-gray-700 leading-relaxed">
        Die Nutzungsrichtlinie IKT (NRL) regelt den Umgang mit den{" "}
        <InfoTerm>IKT-Systemen</InfoTerm> der BBW.{" "}
        <InfoTerm>Logdaten</InfoTerm> werden regelmässig ausgewertet.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
