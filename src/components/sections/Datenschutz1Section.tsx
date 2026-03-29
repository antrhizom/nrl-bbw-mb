"use client";

import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";
import RoleHint from "@/components/RoleHint";

export default function Datenschutz1Section() {
  const { markSectionComplete } = useMerkblatt();
  const sectionId = "datenschutz-1";

  const flipCards = [
    {
      title: "Gefahren bei Nichtbeachtung",
      description:
        "Identitätsdiebstahl, Diskriminierung und Vertrauensverlust sind mögliche Folgen.",
    },
    {
      title: "Datenschutzprinzipien",
      description:
        "Datensparsamkeit, Zweckbindung, Transparenz und Verhältnismässigkeit.",
    },
    {
      title: "Sensibilisierung",
      description:
        "Lernende sind regelmässig zu datenschutzrechtlichen Themen zu sensibilisieren.",
    },
  ];

  return (
    <SectionCard chapterLabel="Kapitel 6" title="Datenschutz">
      <p className="text-gray-700 leading-relaxed">
        <InfoTerm>Datenschutz</InfoTerm> basiert auf den Prinzipien{" "}
        <InfoTerm>Datensparsamkeit</InfoTerm>,{" "}
        <InfoTerm>Zweckbindung</InfoTerm>, <InfoTerm>Transparenz</InfoTerm> und{" "}
        <InfoTerm>Verhältnismässigkeit</InfoTerm>.
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

      <RoleHint role="lehrpersonen">
        Sie sind dafür verantwortlich, Lernende regelmässig zu
        datenschutzrechtlichen Themen zu sensibilisieren.
      </RoleHint>
    </SectionCard>
  );
}
