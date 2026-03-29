"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";
import GlossaryCards from "@/components/GlossaryCards";
import { GLOSSARY } from "@/lib/glossary";

export default function Datensicherheit2Section() {
  const { markComplete } = useMerkblatt();
  const sectionId = "datensicherheit-2";

  const flipCards = [
    {
      title: "Speicherung an offiziellen Orten",
      description:
        "Schulinterne Informationen müssen auf den von der Schule bereitgestellten Speicherdiensten abgelegt werden. Auf anderen Systemen gilt die Eigenverantwortung.",
    },
    {
      title: "Ausnahmen bei der Speicherung",
      description:
        "Es gibt definierte Ausnahmen, bei denen Daten auch ausserhalb der BBW-Speicher abgelegt werden dürfen – diese sind in der NRL geregelt und setzen Eigenverantwortung voraus.",
    },
    {
      title: "Meldepflicht",
      description:
        "Wer eine Zugangsmöglichkeit ohne bestehendes Recht entdeckt, muss dies umgehend melden.",
    },
    {
      title: "Schutzstufen & Klassifizierung",
      description:
        "Daten werden in drei Schutzstufen eingeteilt: Sachdaten, Personendaten und besondere Personendaten. Schulinterne Daten unterliegen dem Amtsgeheimnis und dürfen nicht ohne Weiteres weitergegeben werden.",
    },
    {
      title: "Sorgfaltspflicht & Clean-Desk",
      description:
        "Behandle Schulgeräte und -daten sorgfältig. Sperre den Bildschirm beim Verlassen des Arbeitsplatzes (Win+L) und lasse keine vertraulichen Unterlagen offen liegen (Clean-Desk / Clear-Screen).",
    },
  ];

  const glossaryTerms = ["Personendaten"];

  return (
    <SectionCard chapterLabel="Kapitel 3.2" title="Schutz von Informationen">
      <p className="text-gray-700 leading-relaxed">
        Schulinterne Daten müssen geschützt und korrekt klassifiziert werden.
        Besonders{" "}
        <InfoTerm>Personendaten</InfoTerm>{" "}
        unterliegen strengen Regeln zur Speicherung und Weitergabe.
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

      <GlossaryCards
        terms={glossaryTerms}
        glossary={GLOSSARY}
        sectionId={sectionId}
        onAllLearned={() => markComplete(sectionId, "glossary")}
      />
    </SectionCard>
  );
}
