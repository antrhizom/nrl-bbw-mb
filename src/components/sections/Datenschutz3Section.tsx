"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import RoleHint from "@/components/RoleHint";

export default function Datenschutz3Section() {
  const { markSectionComplete } = useMerkblatt();
  const sectionId = "datenschutz-3";

  const flipCards = [
    { title: "Keine persönlichen Daten in KI", description: "Vertrauliche oder geheime Informationen dürfen nicht in KI-Tools eingegeben werden." },
    { title: "Freiwilligkeit bei KI & Lerntechnologien", description: "Bei der Anwendung von Lerntechnologien oder KI-Anwendungen besteht Freiwilligkeit, ausser es handelt sich um reguläre Angebote der BBW, bei denen keine Registration nötig ist." },
    { title: "KI-Inhalte prüfen", description: "KI-generierte Inhalte auf Korrektheit und Urheberrechtsverletzungen prüfen." },
    { title: "Aufnahmen nur mit Einverständnis", description: "Aufnahmen jeglicher Art (Bild, Ton, Video) sind ohne ausdrückliches Einverständnis der betroffenen Personen nicht erlaubt." },
  ];

  return (
    <SectionCard chapterLabel="Kapitel 9" title="Datenschutz – KI & Lerntechnologien">
      <p className="text-gray-700 leading-relaxed">
        Generative KI-Tools und Lerntechnologien erfordern verantwortungsvollen Umgang mit Daten.
      </p>
      <RoleHint role="lehrpersonen">
        Die Anmeldung bei KI-Tools darf nicht erzwungen werden – auch nicht indirekt durch Benotung.
      </RoleHint>
      <RoleHint role="lernende">
        Sie müssen sich nicht bei KI-Tools registrieren. Bei regulären Schulangeboten mit Schul-Login gilt diese Regel nicht.
      </RoleHint>
      <RoleHint role="mitarbeitende">
        Geben Sie keine Schuldaten in KI-Tools ein – auch nicht in anonymisierter Form, sofern ein Rückschluss auf Personen möglich wäre.
      </RoleHint>
      <div className="grid gap-4 sm:grid-cols-2">
        {flipCards.map((card, index) => (
          <FlipCard key={index} title={card.title} description={card.description} index={index} total={flipCards.length} sectionId={sectionId} onAllFlipped={() => markSectionComplete(sectionId)} />
        ))}
      </div>
    </SectionCard>
  );
}
