"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";

export default function Datensicherheit2Section() {
  const { markSectionComplete } = useMerkblatt();
  const sectionId = "datensicherheit-2";

  const flipCards = [
    { title: "Offizielle Speicher & Ausnahmen", description: "Schulinterne Daten gehören auf BBW-Speicher. Ausnahmen sind abhängig von berufsgruppenspezifischen oder abteilungsspezifischen Bedürfnissen." },
    { title: "Meldepflicht", description: "Unbefugte Zugangsmöglichkeiten müssen sofort gemeldet werden." },
    { title: "Schutzstufen beachten", description: "Daten werden in drei Schutzstufen eingeteilt: Sachdaten, Personendaten und besondere Personendaten. Details dazu auf der nächsten Seite." },
    { title: "Clean-Desk / Clear-Screen", description: "Bildschirm sperren (Win+L), keine vertraulichen Unterlagen offen liegen lassen." },
  ];

  return (
    <SectionCard chapterLabel="Kapitel 4" title="Datensicherheit – Speicherung & Schutz">
      <p className="text-gray-700 leading-relaxed">
        Der Umgang mit <InfoTerm>Personendaten</InfoTerm> erfordert besondere
        Sorgfalt bei der Speicherung und beim Schutz.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {flipCards.map((card, index) => (
          <FlipCard key={index} title={card.title} description={card.description} index={index} total={flipCards.length} sectionId={sectionId} onAllFlipped={() => markSectionComplete(sectionId)} />
        ))}
      </div>
    </SectionCard>
  );
}
