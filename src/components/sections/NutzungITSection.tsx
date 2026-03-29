"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import RoleHint from "@/components/RoleHint";

export default function NutzungITSection() {
  const { markSectionComplete } = useMerkblatt();
  const sectionId = "nutzung-it";

  const flipCards = [
    { title: "Private Nutzung", description: "Erlaubt, aber schulische Zwecke haben Vorrang. Mining und kommerzielle Nutzung sind verboten." },
    { title: "BYOD-Anforderungen", description: "Passwort-/PIN-Schutz und aktuelle Software-Updates sind Pflicht." },
    { title: "Keine Beeinträchtigung", description: "Private Geräte dürfen den Betrieb der Schul-IT nicht stören." },
    { title: "Support & E-Mail", description: "Support für private Geräte ist eingeschränkt. E-Mail und Kalender laufen über den Browser – keine Synchronisation nötig." },
  ];

  return (
    <SectionCard chapterLabel="Kapitel 2" title="Nutzung der IT-Infrastruktur">
      <p className="text-gray-700 leading-relaxed">
        Die BBW stellt IKT-Systeme zur Verfügung. Private Nutzung ist erlaubt, schulische Zwecke haben Vorrang.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {flipCards.map((card, index) => (
          <FlipCard key={index} title={card.title} description={card.description} index={index} total={flipCards.length} sectionId={sectionId} onAllFlipped={() => markSectionComplete(sectionId)} />
        ))}
      </div>
      <RoleHint role="lernende">
        Ihr BYOD-Gerät muss die Mindestanforderungen Ihres Berufsfelds erfüllen.
      </RoleHint>
    </SectionCard>
  );
}
