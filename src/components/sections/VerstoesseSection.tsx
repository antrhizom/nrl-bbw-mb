"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";
import RoleHint from "@/components/RoleHint";

export default function VerstoesseSection() {
  const { markSectionComplete } = useMerkblatt();
  const sectionId = "verstoesse";

  const flipCards = [
    { title: "Abgestufte Massnahmen", description: "Zuerst klärendes Gespräch, dann Ermahnung bis disziplinarische Konsequenzen." },
    { title: "Haftungsausschluss", description: "Die Schule haftet nicht für Schäden durch Handlungen der Nutzenden." },
    { title: "Rechtliche Grundlagen", description: "Die NRL basiert auf dem Kantonsauftrag und stützt sich auf IDG, Personalgesetz, Disziplinarreglement u.a." },
  ];

  return (
    <SectionCard chapterLabel="Kapitel 11" title="Verstösse & Konsequenzen">
      <p className="text-gray-700 leading-relaxed">
        Bei Verstössen gegen die Nutzungsrichtlinie greifen abgestufte Massnahmen.
        Zuständig sind die <InfoTerm>TIKT</InfoTerm> und die{" "}
        <InfoTerm>PIKT</InfoTerm> der Schule.
      </p>
      <RoleHint role="lernende">
        Bei Verstössen können Ihre Eltern/Erziehungsberechtigten und Ihr Lehrbetrieb informiert werden.
      </RoleHint>
      <div className="grid gap-4 sm:grid-cols-2">
        {flipCards.map((card, index) => (
          <FlipCard key={index} title={card.title} description={card.description} index={index} total={flipCards.length} sectionId={sectionId} onAllFlipped={() => markSectionComplete(sectionId)} />
        ))}
      </div>
    </SectionCard>
  );
}
