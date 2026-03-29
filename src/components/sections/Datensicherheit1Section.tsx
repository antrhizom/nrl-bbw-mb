"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";
import GlossaryCards from "@/components/GlossaryCards";
import { GLOSSARY } from "@/lib/glossary";

export default function Datensicherheit1Section() {
  const { markComplete } = useMerkblatt();
  const sectionId = "datensicherheit-1";

  const flipCards = [
    {
      title: "Datensicherheit vs. Datenschutz",
      description:
        "Datensicherheit schützt Daten vor unbefugtem Zugriff, Verlust und Beschädigung. Datenschutz regelt den Umgang mit personenbezogenen Daten. Beides ist wichtig und wird in der NRL behandelt.",
    },
    {
      title: "Gefahren externer Datenablagen",
      description:
        "Externe Datenablagen (USB-Sticks, private Cloud-Dienste, fremde WLANs) bergen Risiken wie unbefugten Zugriff und unkontrollierte Datenanalyse. Vorsicht ist geboten bei externen Wechselspeichern und öffentlichen Netzen.",
    },
    {
      title: "Nur BBW-Speicher verwenden",
      description:
        "Schulinterne Daten dürfen ausschliesslich auf offiziellen BBW-Speicherdiensten abgelegt werden: Schulserver, Nextcloud, OneDrive, Teams, SharePoint oder OpenOlat. Externe Wechselspeicher sind zu vermeiden. Geräte müssen Sicherheitsstandards einhalten.",
    },
    {
      title: "Schutz von Zugangsdaten",
      description:
        "Zugangsdaten (Benutzerkonto, Passwort, Mail-Adresse) sind streng vertraulich. Konten dürfen nicht geteilt werden. Verwende starke Passwörter und aktiviere MFA (Mehr-Faktor-Authentifizierung).",
    },
  ];

  const glossaryTerms = ["Datensicherheit", "Datenschutz", "MFA", "Externe Wechselspeicher"];

  return (
    <SectionCard chapterLabel="Kapitel 3.1" title="Datensicherheit – Grundlagen & Speicherung">
      <p className="text-gray-700 leading-relaxed">
        <InfoTerm>Datensicherheit</InfoTerm> und <InfoTerm>Datenschutz</InfoTerm> sind zentrale
        Themen der NRL. Schütze deine Zugangsdaten, aktiviere{" "}
        <InfoTerm>MFA</InfoTerm> und vermeide{" "}
        <InfoTerm>Externe Wechselspeicher</InfoTerm> für schulische Daten.
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
