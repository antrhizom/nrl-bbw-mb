"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";

export default function Datensicherheit3Section() {
  const { markSectionComplete } = useMerkblatt();
  const sectionId = "datensicherheit-3";

  const flipCards = [
    { title: "Malware-Schutz", description: "Schutzsoftware nicht umgehen. Sicherheitsupdates zeitnah installieren." },
    { title: "E-Mail-Weiterleitung verboten", description: "Schulische E-Mails nicht an private Postfächer weiterleiten." },
    { title: "Nur Schul-Tools", description: "Nur schulische Collaboration-Tools (z.B. Teams). WhatsApp, Dropbox etc. sind verboten." },
    { title: "Verschlüsselung", description: "Vertrauliche Nachrichten ausserhalb des EDU-Tenants verschlüsseln." },
    { title: "Verlinken statt posten", description: "Vertrauliche Daten in Teams verlinken, nicht direkt posten." },
    { title: "Netzwerk", description: "Das Schulnetz nicht beeinträchtigen. Die BBW verfügt über eine eigene Firewall – Sicherheitsmassnahmen dürfen nicht umgangen werden." },
    { title: "Grundsätzliche Kommunikationsregel", description: "Respektvoll, sachlich und konstruktiv kommunizieren. Keine diskriminierenden Inhalte." },
  ];

  return (
    <SectionCard chapterLabel="Kapitel 5" title="Datensicherheit – Kommunikation & Netzwerk">
      <p className="text-gray-700 leading-relaxed">
        <InfoTerm>Collaboration Tools</InfoTerm> und der{" "}
        <InfoTerm>EDU-Tenant</InfoTerm> bilden die Grundlage der schulischen
        Kommunikation. <InfoTerm>Firewall</InfoTerm> und{" "}
        <InfoTerm>Proxy</InfoTerm> schützen das Netzwerk.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {flipCards.map((card, index) => (
          <FlipCard key={index} title={card.title} description={card.description} index={index} total={flipCards.length} sectionId={sectionId} onAllFlipped={() => markSectionComplete(sectionId)} />
        ))}
      </div>
      <p className="text-gray-700 text-sm mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
        <strong>Heimarbeit:</strong> Schützen Sie Ihren Bildschirm vor fremden Blicken,
        verwenden Sie einen Sichtschutzfilter und melden Sie Vorfälle sofort dem{" "}
        <InfoTerm>PIKT</InfoTerm>/<InfoTerm>TIKT</InfoTerm>-Team.
      </p>
    </SectionCard>
  );
}
