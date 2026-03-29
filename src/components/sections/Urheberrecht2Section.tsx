"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import RoleHint from "@/components/RoleHint";

export default function Urheberrecht2Section() {
  const { markSectionComplete } = useMerkblatt();
  const sectionId = "urheberrecht-2";

  const flipCards = [
    { title: "Eigengebrauch & eigene Klasse", description: "Geschützte Werke nur im Eigengebrauch und in der eigenen Klasse verwenden." },
    { title: "Neukreationen der Lernenden", description: "Werke für den Einsatz ausserhalb der Klasse dürfen keine geschützten Inhalte Dritter enthalten." },
    { title: "KI & Verantwortung", description: "Wer KI-Inhalte veröffentlicht, muss sie auf Urheberrechtsverletzungen prüfen und trägt die volle Verantwortung." },
  ];

  return (
    <SectionCard chapterLabel="Kapitel 10" title="Urheberrecht – Neukreationen & KI">
      <p className="text-gray-700 leading-relaxed">
        Bei Neukreationen und KI-generierten Inhalten gelten besondere Regeln.
      </p>
      <RoleHint role="lernende">
        Wenn Sie KI-generierte Inhalte oder fremde Werke in Ihre Projekte einbauen, sind Sie für Rechtsverletzungen verantwortlich.
      </RoleHint>
      <div className="grid gap-4 sm:grid-cols-2">
        {flipCards.map((card, index) => (
          <FlipCard key={index} title={card.title} description={card.description} index={index} total={flipCards.length} sectionId={sectionId} onAllFlipped={() => markSectionComplete(sectionId)} />
        ))}
      </div>
    </SectionCard>
  );
}
