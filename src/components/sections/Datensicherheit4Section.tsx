"use client";

import { useState } from "react";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";
import RoleHint from "@/components/RoleHint";

interface AccordionItemProps {
  color: string;
  title: string;
  kategorie: string;
  klassifizierung: string;
  schutzstufe: string;
  beispiele: string;
  defaultOpen?: boolean;
}

function AccordionItem({
  color,
  title,
  kategorie,
  klassifizierung,
  schutzstufe,
  beispiele,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`border-l-4 ${color} rounded-r-lg border border-gray-200 overflow-hidden`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <span className="text-gray-400 text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-700 space-y-2 animate-fade-in">
          <div className="grid grid-cols-3 gap-2">
            <div>
              <span className="font-semibold text-gray-600 block text-xs uppercase tracking-wide">Kategorie</span>
              <span>{kategorie}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-600 block text-xs uppercase tracking-wide">Klassifizierung</span>
              <span>{klassifizierung}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-600 block text-xs uppercase tracking-wide">Schutzstufe</span>
              <span>{schutzstufe}</span>
            </div>
          </div>
          <div className="pt-1">
            <span className="font-semibold text-gray-600 text-xs uppercase tracking-wide">Beispiele: </span>
            <span>{beispiele}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Datensicherheit4Section() {
  const { markSectionComplete } = useMerkblatt();
  const sectionId = "datensicherheit-4";

  const flipCards = [
    {
      title: "Kategorie der Information",
      description:
        "Sachdaten haben keinen Personenbezug. Personendaten beziehen sich auf bestimmbare Personen. Besondere Personendaten sind besonders schützenswert.",
    },
    {
      title: "Klassifizierung",
      description:
        "Informationen werden als öffentlich, intern, vertraulich oder streng vertraulich klassifiziert – je nach Sensibilität.",
    },
    {
      title: "Schutzstufe",
      description:
        "Die Schutzstufe bestimmt die technischen und organisatorischen Massnahmen: von frei zugänglich bis höchste Sicherheitsanforderungen.",
    },
    {
      title: "Amtsgeheimnis",
      description:
        "Alle schulinternen Daten unterliegen dem Amtsgeheimnis und dürfen nicht ohne Weiteres weitergegeben werden.",
    },
  ];

  return (
    <SectionCard chapterLabel="Kapitel 6" title="Informationssicherheit">
      <p className="text-gray-700 leading-relaxed">
        Die korrekte Klassifizierung von Informationen ist entscheidend für deren Schutz.
        Dabei sind drei Aspekte zu beachten: die <strong>Kategorie</strong> der Information
        (Sachdaten, <InfoTerm>Personendaten</InfoTerm>, besondere Personendaten),
        die <strong>Klassifizierung</strong> (öffentlich bis streng vertraulich) und
        die <strong>Schutzstufe</strong> (technische und organisatorische Massnahmen).
      </p>

      <div className="space-y-2 mt-4">
        <AccordionItem
          color="border-l-green-500"
          title="Sachdaten – öffentlich / intern"
          kategorie="Sachdaten"
          klassifizierung="Öffentlich oder intern"
          schutzstufe="Basis"
          beispiele="Stundenpläne, Lehrmittel-Listen, Raumpläne, allgemeine Schulinformationen"
          defaultOpen
        />
        <AccordionItem
          color="border-l-amber-500"
          title="Personendaten – vertraulich"
          kategorie="Personendaten"
          klassifizierung="Vertraulich"
          schutzstufe="Erhöht"
          beispiele="Name, E-Mail-Adresse, Noten, Adresse, Telefonnummer, Klassenlisten"
        />
        <AccordionItem
          color="border-l-red-500"
          title="Besondere Personendaten – streng vertraulich"
          kategorie="Besondere Personendaten"
          klassifizierung="Streng vertraulich"
          schutzstufe="Höchste Stufe"
          beispiele="Gesundheitsdaten, ärztliche Zeugnisse, Disziplinarmassnahmen, religiöse Überzeugungen, Sozialhilfedaten"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 mt-6">
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

      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
        <h4 className="font-semibold text-red-800 mb-2">Szenario: Falsche Klassifizierung</h4>
        <p className="text-sm text-red-700">
          Eine Lehrperson speichert eine Notenliste (Personendaten) auf einem privaten USB-Stick.
          Der Stick geht verloren. Da die Daten nicht auf einem offiziellen BBW-Speicher lagen,
          ist der Schutz nicht gewährleistet – ein Verstoss gegen die NRL.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-2">
        <h4 className="font-semibold text-amber-800 mb-2">Szenario: Besondere Personendaten</h4>
        <p className="text-sm text-amber-700">
          Ein ärztliches Zeugnis einer lernenden Person wird per E-Mail an mehrere Personen
          weitergeleitet. Besondere Personendaten dürfen nur an den engsten berechtigten
          Personenkreis weitergegeben werden – in diesem Fall ein klarer Verstoss.
        </p>
      </div>

      <RoleHint role="lehrpersonen">
        Beachten Sie, dass Personendaten und besondere Personendaten auf dem LIS gespeichert
        sein müssen oder an die Verwaltung für die Aufbewahrung weitergereicht werden.
        Die korrekte Klassifizierung liegt in Ihrer Verantwortung.
      </RoleHint>
      <RoleHint role="mitarbeitende">
        Achten Sie besonders auf die korrekte Einstufung von Personendaten in Ihrem
        Arbeitsbereich. Im Zweifel gilt die höhere Schutzstufe.
      </RoleHint>
    </SectionCard>
  );
}
