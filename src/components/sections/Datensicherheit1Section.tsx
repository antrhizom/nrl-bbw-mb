"use client";

import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";

export default function Datensicherheit1Section() {
  const { markSectionComplete } = useMerkblatt();
  const sectionId = "datensicherheit-1";

  const flipCards = [
    {
      title: "Datensicherheit vs. Datenschutz",
      description:
        "Datensicherheit schützt Daten vor Verlust und Zugriff. Datenschutz regelt den Umgang mit Personendaten.",
    },
    {
      title: "Gefahren externer Ablagen",
      description:
        "USB-Sticks, private Clouds und fremde WLANs bergen Risiken wie unbefugten Zugriff.",
    },
    {
      title: "Nur BBW-Speicher",
      description:
        "Schulinterne Daten nur auf: Schulserver, Nextcloud, OneDrive, Teams, SharePoint, OpenOlat.",
    },
    {
      title: "Zugangsdaten schützen",
      description:
        "Passwörter geheim halten, Konten nie teilen, MFA aktivieren.",
    },
  ];

  return (
    <SectionCard
      chapterLabel="Kapitel 3"
      title="Datensicherheit – Grundlagen"
    >
      <p className="text-gray-700 leading-relaxed">
        <InfoTerm>Datensicherheit</InfoTerm> und{" "}
        <InfoTerm>Datenschutz</InfoTerm> sind zentrale Themen der NRL. Schütze
        deine Zugänge mit <InfoTerm>MFA</InfoTerm>.
      </p>

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
