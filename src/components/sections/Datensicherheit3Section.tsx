"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";
import GlossaryCards from "@/components/GlossaryCards";
import { GLOSSARY } from "@/lib/glossary";

export default function Datensicherheit3Section() {
  const { markComplete } = useMerkblatt();
  const sectionId = "datensicherheit-3";

  const flipCards = [
    {
      title: "Malware-Schutz",
      description:
        "Schutzsoftware darf nicht umgangen oder deaktiviert werden. Sicherheitsupdates müssen zeitnah installiert werden. Nur vertrauenswürdige Geräte dürfen mit dem Schulnetz verbunden werden.",
    },
    {
      title: "E-Mail-Weiterleitungsverbot",
      description:
        "E-Mails dürfen nicht an andere (private) Postfächer weitergeleitet werden. Die Schul-E-Mail-Adresse ist nur für schulische Korrespondenz bestimmt.",
    },
    {
      title: "Nur schulische Collaboration-Tools",
      description:
        "Nur Collaboration-Tools der Schule verwenden (z.B. Microsoft Teams). WhatsApp, Dropbox und ähnliche Dienste sind nicht erlaubt.",
    },
    {
      title: "Verschlüsselung vertraulicher Nachrichten",
      description:
        "Nachrichten, die vertraulich oder höher qualifiziert sind, müssen ausserhalb des EDU-Tenants der BBW verschlüsselt werden – per Chat, Kanal oder im Videoanruf.",
    },
    {
      title: "Vertrauliche Daten verlinken",
      description:
        "Vertrauliche und höher klassifizierte Daten dürfen nicht direkt gepostet, sondern müssen verlinkt werden. Der Empfängerinnenkreis ist bewusst klein zu wählen.",
    },
    {
      title: "Netzwerk & Internet",
      description:
        "Das Schulnetz darf nicht unnötig beeinträchtigt werden. Sicherheitsmassnahmen (z.B. Firewall, Proxy) dürfen nicht umgangen werden. Der Zugang zu Webseiten ausserhalb des Grundauftrags ist eingeschränkt oder verboten.",
    },
    {
      title: "Netiquette",
      description:
        "Alle Beteiligten sind verpflichtet, in digitalen Interaktionen stets respektvoll, sachlich und konstruktiv zu agieren, diskriminierende oder beleidigende Inhalte zu vermeiden, den Datenschutz zu wahren und Spam sowie werbende Inhalte zu unterlassen.",
    },
  ];

  const glossaryTerms = ["Collaboration Tools", "EDU-Tenant", "Firewall", "Proxy"];

  return (
    <SectionCard chapterLabel="Kapitel 3.3" title="Kommunikation & Netzwerk">
      <p className="text-gray-700 leading-relaxed">
        Kommunikation und Netzwerknutzung unterliegen klaren Regeln. Verwende
        nur schulische{" "}
        <InfoTerm>Collaboration Tools</InfoTerm>, arbeite innerhalb des{" "}
        <InfoTerm>EDU-Tenant</InfoTerm> und
        umgehe keine Sicherheitsmassnahmen wie{" "}
        <InfoTerm>Firewall</InfoTerm> oder <InfoTerm>Proxy</InfoTerm>.
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

      <p className="text-gray-700 text-sm mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
        <strong>Heimarbeit:</strong> Bei mobiler Arbeit den Bildschirm vor fremden Blicken schützen und Sichtschutzfilter verwenden. Sicherheitsvorfälle sofort dem{" "}
        <InfoTerm>PIKT</InfoTerm>/{" "}
        <InfoTerm>TIKT</InfoTerm>-Team melden.
      </p>

      <GlossaryCards
        terms={glossaryTerms}
        glossary={GLOSSARY}
        sectionId={sectionId}
        onAllLearned={() => markComplete(sectionId, "glossary")}
      />
    </SectionCard>
  );
}
