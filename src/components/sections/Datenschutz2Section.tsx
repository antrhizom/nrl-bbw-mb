"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";
import GlossaryCards from "@/components/GlossaryCards";
import { GLOSSARY } from "@/lib/glossary";

export default function Datenschutz2Section() {
  const { markComplete } = useMerkblatt();
  const sectionId = "datenschutz-2";

  const flipCards = [
    {
      title: "Lerntechnologien prüfen",
      description:
        "Eingesetzte Lerntechnologien müssen bezüglich Datenschutz geprüft sein.",
    },
    {
      title: "Lernprofile vs. Persönlichkeitsprofile",
      description:
        "Lernprofile (Lernfortschritt, Aufgabenresultate) sind erlaubt. Sie dürfen aber nicht mit persönlichen Merkmalen zu umfassenden Persönlichkeitsprofilen verknüpft werden.",
    },
    {
      title: "Keine Offenlegung von Statistiken",
      description:
        "Personenbezogene Statistiken dürfen nicht vor der Klasse oder anderen Personen offengelegt werden, ausser in definierten Gremien der Schule.",
    },
    {
      title: "Besondere Personendaten schützen",
      description:
        "Daten und Unterrichtsmaterial von Lernenden mit Angaben besonderer Personendaten müssen mindestens vertraulich klassifiziert werden und haben eine erhöhte Schutzstufe. Löschung nach Ende der Ausbildung.",
    },
    {
      title: "Einwilligung der Lernenden",
      description:
        "Einwilligungen im Datenschutzbereich können allein von den Lernenden selbst eingeholt werden.",
    },
  ];

  const glossaryTerms = ["Lernprofil", "Persönlichkeitsprofil", "Personendaten"];

  return (
    <SectionCard chapterLabel="Kapitel 4.2" title="Datenschutz – Im Unterricht">
      <p className="text-gray-700 leading-relaxed">
        Im Unterricht gelten besondere Datenschutzregeln. Unterscheide zwischen{" "}
        <InfoTerm>Lernprofil</InfoTerm> und{" "}
        <InfoTerm>Persönlichkeitsprofil</InfoTerm>{" "}
        und schütze{" "}
        <InfoTerm>Personendaten</InfoTerm> der
        Lernenden besonders sorgfältig.
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
