"use client";

import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";

export default function AllgemeinSection() {
  const { markSectionComplete } = useMerkblatt();
  const sectionId = "allgemein";

  const flipCards = [
    {
      title: "Zweck der NRL",
      description:
        "Regelt den sicheren Umgang mit IKT-Systemen, gestützt auf kantonale und eidgenössische Rechtsgrundlagen.",
    },
    {
      title: "Geltungsbereich",
      description:
        "Gilt für alle: Lernende, Lehrpersonen, Schulleitung, Verwaltung und Gäste.",
    },
    {
      title: "Auswertung von Logdaten",
      description:
        "Logdaten werden anonymisiert ausgewertet. Bei Missbrauchsverdacht sind personenbezogene Auswertungen möglich.",
    },
  ];

  return (
    <SectionCard chapterLabel="Kapitel 1" title="Allgemeines">
      <p className="text-gray-700 leading-relaxed">
        Die NRL regelt den Umgang mit den{" "}
        <InfoTerm>IKT-Systemen</InfoTerm> der BBW.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {flipCards.map((card, index) => (
          <FlipCard
            key={index}
            title={card.title}
            description={card.description}
            index={index}
            total={flipCards.length}
            sectionId={sectionId}
            onAllFlipped={() => markSectionComplete(sectionId)}
          />
        ))}
      </div>
    </SectionCard>
  );
}
