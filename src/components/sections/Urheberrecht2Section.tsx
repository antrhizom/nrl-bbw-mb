"use client";
import { useEffect } from "react";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";

export default function Urheberrecht2Section() {
  const { markComplete } = useMerkblatt();
  const sectionId = "urheberrecht-2";

  const flipCards = [
    {
      title: "Eigengebrauch & eigene Klassen",
      description:
        "Urheberrechtlich geschützte Werke dürfen nur im Eigengebrauch und in der eigenen Klasse verwendet werden. Der Lehrmittelgebrauch fremder Werke, die urheberrechtlich geschützt sind, ist darüber hinaus nicht erlaubt.",
    },
    {
      title: "Neukreationen der Lernenden",
      description:
        "Ausserhalb der eigenen Klassen dürfen Werke von Lernenden keine urheberrechtlich geschützten Inhalte enthalten.",
    },
    {
      title: "KI-Inhalte & Urheberrecht",
      description:
        "KI-Inhalte müssen bei der Veröffentlichung durch die individuellen Autoren überprüft werden, ob sie urheberrechtlich geschützte Inhalte enthalten. Wer KI-generierte Inhalte veröffentlicht, trägt die volle Verantwortung.",
    },
  ];

  useEffect(() => {
    markComplete(sectionId, "glossary");
  }, [markComplete]);

  return (
    <SectionCard chapterLabel="Kapitel 5.2" title="Urheberrecht – KI & Neukreationen">
      <p className="text-gray-700 mb-6">
        Bei der Nutzung von KI-generierten Inhalten und Neukreationen von Lernenden gelten besondere
        urheberrechtliche Regeln.
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
