"use client";
import { useEffect } from "react";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";

export default function NutzungITSection() {
  const { markComplete } = useMerkblatt();
  const sectionId = "nutzung-it";

  useEffect(() => {
    markComplete(sectionId, "glossary");
  }, []);

  const flipCards = [
    {
      title: "Private Nutzung erlaubt",
      description:
        "Private Nutzung der IKT-Systeme ist erlaubt, aber BBW-Zwecke haben immer Vorrang. Ressourcenintensive Aktivitäten wie Kryptowährungs-Mining und kommerzielle Nutzung sind verboten.",
    },
    {
      title: "BYOD-Mindestanforderungen",
      description:
        "Die Berufsfelder definieren Mindestanforderungen an die BYOD-Geräte. Grundvoraussetzungen sind Passwort-/PIN-Schutz und aktuelle Software-Updates.",
    },
    {
      title: "Keine Beeinträchtigung",
      description:
        "Das Nutzen von privaten IKT-Systemen darf den Betrieb der BBW-IKT-Systeme nicht beeinträchtigen.",
    },
    {
      title: "Support",
      description:
        "Die Schule bietet technischen Support für schulische Geräte. Für private Geräte (BYOD) ist der Support eingeschränkt. E-Mail und Kalender können über den Browser genutzt werden – eine Synchronisation auf dem Gerät ist nicht erforderlich.",
    },
  ];

  return (
    <SectionCard chapterLabel="Kapitel 2" title="Nutzung IT-Arbeitsmittel">
      <p className="text-gray-700 leading-relaxed">
        Die BBW stellt verschiedene IKT-Systeme zur Verfügung. Private Nutzung ist erlaubt,
        solange schulische Zwecke Vorrang haben und der Betrieb nicht beeinträchtigt wird.
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
    </SectionCard>
  );
}
