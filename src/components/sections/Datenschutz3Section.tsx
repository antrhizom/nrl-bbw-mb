"use client";
import { useEffect } from "react";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";

export default function Datenschutz3Section() {
  const { markComplete } = useMerkblatt();
  const sectionId = "datenschutz-3";

  const flipCards = [
    {
      title: "Keine persönlichen Daten in KI-Tools",
      description:
        "Keine persönlichen Daten in generative KI-Tools (z.B. ChatGPT) eingeben. Vertrauliche oder geheime Informationen dürfen nicht mit KI verwendet werden. Öffentliche Schulinformationen sind erlaubt, aber nicht in Kombination mit internen Kennungen.",
    },
    {
      title: "Freiwillige Anmeldung",
      description:
        "Die Registration für KI und Lerntechnologien darf nicht erzwungen werden. Wichtig: Anmeldungen mit dem Login der Schule bei Schulangeboten sind davon nicht betroffen.",
    },
    {
      title: "KI-Inhalte prüfen",
      description:
        "KI-generierte Inhalte müssen vor der Verwendung auf Korrektheit und mögliche Urheberrechtsverletzungen geprüft werden. Die Verantwortung liegt bei der Person, die den Inhalt nutzt oder veröffentlicht.",
    },
    {
      title: "Keine Aufnahmen ohne Einwilligung",
      description:
        "Keine Veröffentlichung von Aufnahmen (Bild, Ton, Video) ohne ausdrückliche Einwilligung der betroffenen Personen. Die Kamera darf in Videokonferenzen ausgeschaltet werden.",
    },
  ];

  useEffect(() => {
    markComplete(sectionId, "glossary");
  }, [markComplete]);

  return (
    <SectionCard chapterLabel="Kapitel 4.3" title="KI & Lerntechnologien">
      <p className="text-gray-700 mb-6">
        Generative KI-Tools und Lerntechnologien bieten grosse Chancen, erfordern aber einen
        verantwortungsvollen Umgang mit Daten und Inhalten.
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
