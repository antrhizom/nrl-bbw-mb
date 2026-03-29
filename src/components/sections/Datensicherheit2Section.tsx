"use client";

import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";

export default function Datensicherheit2Section() {
  const { markSectionComplete } = useMerkblatt();
  const sectionId = "datensicherheit-2";

  const flipCards = [
    {
      title: "Offizielle Speicherorte",
      description:
        "Schulinformationen gehören auf die Speicherdienste der BBW. Eigenverantwortung auf anderen Systemen.",
    },
    {
      title: "Ausnahmen möglich",
      description:
        "Bestimmte Ausnahmen für externe Speicherung sind in der NRL geregelt.",
    },
    {
      title: "Meldepflicht",
      description:
        "Unbefugte Zugangsmöglichkeiten müssen sofort gemeldet werden.",
    },
    {
      title: "Drei Schutzstufen",
      description:
        "Sachdaten, Personendaten, besondere Personendaten – schulinterne Daten unterliegen dem Amtsgeheimnis.",
    },
    {
      title: "Clean-Desk / Clear-Screen",
      description:
        "Bildschirm sperren (Win+L), keine vertraulichen Unterlagen offen liegen lassen.",
    },
  ];

  return (
    <SectionCard
      chapterLabel="Kapitel 4"
      title="Datensicherheit – Speicherung & Schutz"
    >
      <p className="text-gray-700 leading-relaxed">
        Der Umgang mit <InfoTerm>Personendaten</InfoTerm> erfordert besondere
        Sorgfalt bei der Speicherung und beim Schutz.
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
