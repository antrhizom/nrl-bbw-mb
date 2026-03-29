"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import RoleHint from "@/components/RoleHint";

export default function Datenschutz3Section() {
  const { markSectionComplete } = useMerkblatt();
  const sectionId = "datenschutz-3";

  const flipCards = [
    {
      title: "Keine persönlichen Daten in KI",
      description:
        "Vertrauliche oder geheime Informationen dürfen nicht in KI-Tools eingegeben werden.",
    },
    {
      title: "Freiwillige Anmeldung",
      description:
        "Anmeldung bei KI-Tools ist freiwillig. Schul-Logins bei Schulangeboten sind ausgenommen.",
    },
    {
      title: "KI-Inhalte prüfen",
      description:
        "KI-generierte Inhalte auf Korrektheit und Urheberrechtsverletzungen prüfen.",
    },
    {
      title: "Aufnahmen nur mit Einwilligung",
      description:
        "Keine Veröffentlichung von Bild, Ton oder Video ohne Einwilligung. Kamera darf aus sein.",
    },
  ];

  return (
    <SectionCard chapterLabel="Kapitel 4.3" title="Datenschutz – KI & Lerntechnologien">
      <p className="text-gray-700 leading-relaxed">
        Generative KI-Tools und Lerntechnologien erfordern verantwortungsvollen Umgang mit Daten.
      </p>

      <RoleHint role="lehrpersonen">
        Die Anmeldung bei KI-Tools darf nicht erzwungen werden – auch nicht indirekt durch Benotung.
      </RoleHint>
      <RoleHint role="lernende">
        Du musst dich nicht bei KI-Tools registrieren. Bei Schulangeboten mit Schul-Login gilt diese Regel nicht.
      </RoleHint>

      <div className="grid gap-4 sm:grid-cols-2">
        {flipCards.map((card, index) => (
          <FlipCard
            key={index}
            title={card.title}
            description={card.description}
            index={index}
            total={flipCards.length}
            sectionId={sectionId}
            onAllFlipped={() => markSectionComplete(sectionId)}
          />
        ))}
      </div>
    </SectionCard>
  );
}
