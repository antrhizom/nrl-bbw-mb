"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";
import RoleHint from "@/components/RoleHint";

export default function Datenschutz2Section() {
  const { markSectionComplete } = useMerkblatt();
  const sectionId = "datenschutz-2";

  const flipCards = [
    { title: "Lerntechnologien prüfen", description: "Eingesetzte Lerntechnologien müssen datenschutzkonform sein." },
    { title: "Lernprofile vs. Persönlichkeitsprofile", description: "Lernprofile sind erlaubt, dürfen aber nicht zu Persönlichkeitsprofilen erweitert werden." },
    { title: "Statistiken nicht offenlegen", description: "Personenbezogene Ergebnisse nicht vor der Klasse zeigen." },
    { title: "Besondere Personendaten", description: "Mindestens vertraulich einstufen, nach Ausbildungsende löschen." },
    { title: "Einwilligung ab 14 Jahren", description: "Ab 14 Jahren können Lernende eigenständig ihre Einwilligung geben – z.B. für Fotos oder Aufnahmen. Zusätzliche Zustimmung von Eltern oder Erziehungsberechtigten ist nicht erforderlich." },
  ];

  return (
    <SectionCard chapterLabel="Kapitel 7" title="Datenschutz – Im Unterricht">
      <p className="text-gray-700 leading-relaxed">
        Im Unterricht gelten besondere Datenschutzregeln. Unterscheiden Sie zwischen{" "}
        <InfoTerm>Lernprofil</InfoTerm> und{" "}
        <InfoTerm>Persönlichkeitsprofil</InfoTerm> und schützen Sie{" "}
        <InfoTerm>Personendaten</InfoTerm> der Lernenden besonders sorgfältig.
      </p>
      <RoleHint role="lehrpersonen">
        Zeigen Sie keine individuellen Ergebnisse oder Statistiken vor der Klasse – auch nicht zur Motivation.
      </RoleHint>
      <RoleHint role="lernende">
        Ab 14 Jahren können Sie eigenständig Ihre Einwilligung zu Datenschutzfragen geben, ohne dass Eltern oder Erziehungsberechtigte zustimmen müssen.
      </RoleHint>
      <div className="grid gap-4 sm:grid-cols-2">
        {flipCards.map((card, index) => (
          <FlipCard key={index} title={card.title} description={card.description} index={index} total={flipCards.length} sectionId={sectionId} onAllFlipped={() => markSectionComplete(sectionId)} />
        ))}
      </div>
    </SectionCard>
  );
}
