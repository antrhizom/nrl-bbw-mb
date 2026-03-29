"use client";

import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";
import RoleHint from "@/components/RoleHint";

export default function Datensicherheit4Section() {
  const { markSectionComplete } = useMerkblatt();
  const sectionId = "datensicherheit-4";

  const flipCards = [
    {
      title: "Sachdaten (öffentlich / intern)",
      description:
        "Allgemeine schulische Informationen ohne Personenbezug. Beispiele: Stundenpläne, Lehrmittel-Listen, Raumpläne, allgemeine Schulinformationen.",
    },
    {
      title: "Personendaten (vertraulich)",
      description:
        "Angaben, die sich auf bestimmte Personen beziehen. Beispiele: Name, E-Mail-Adresse, Noten, Adresse, Telefonnummer, Klassenlisten.",
    },
    {
      title: "Besondere Personendaten (streng vertraulich)",
      description:
        "Besonders schützenswerte Informationen. Beispiele: Gesundheitsdaten, ärztliche Zeugnisse, Disziplinarmassnahmen, religiöse Überzeugungen, Sozialhilfedaten.",
    },
    {
      title: "Amtsgeheimnis",
      description:
        "Alle schulinternen Daten unterliegen dem Amtsgeheimnis und dürfen nicht ohne Weiteres weitergegeben werden.",
    },
  ];

  return (
    <SectionCard
      chapterLabel="Kapitel 5"
      title="Dokumentenklassifizierung & Schutzstufen"
    >
      <p className="text-gray-700 leading-relaxed">
        Die korrekte Klassifizierung von Daten ist entscheidend für deren Schutz.
        Alle schulinternen Daten werden in drei Schutzstufen eingeteilt.
        Die Einstufung bestimmt, wie Daten gespeichert, weitergegeben und geschützt
        werden müssen.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
        <h4 className="font-semibold text-gray-800 mb-3">
          Übersicht Schutzstufen
        </h4>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="inline-block w-3 h-3 mt-1 rounded-full bg-green-400 shrink-0" />
            <span>
              <strong>Sachdaten</strong> – öffentlich oder intern. Kein
              Personenbezug. Dürfen innerhalb der Schule frei geteilt werden.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-block w-3 h-3 mt-1 rounded-full bg-amber-400 shrink-0" />
            <span>
              <strong>
                <InfoTerm>Personendaten</InfoTerm>
              </strong>{" "}
              – vertraulich. Personenbezogene Angaben. Zugang nur für berechtigte
              Personen.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-block w-3 h-3 mt-1 rounded-full bg-red-400 shrink-0" />
            <span>
              <strong>Besondere Personendaten</strong> – streng vertraulich.
              Besonders schützenswert. Höchste Sicherheitsanforderungen.
            </span>
          </li>
        </ul>
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
        <h4 className="font-semibold text-red-800 mb-2">
          Szenario: Falsche Klassifizierung
        </h4>
        <p className="text-sm text-red-700">
          Eine Lehrperson speichert eine Notenliste (Personendaten) auf einem
          privaten USB-Stick. Der Stick geht verloren. Da die Daten nicht auf
          einem offiziellen BBW-Speicher lagen, ist der Schutz nicht
          gewährleistet – ein Verstoss gegen die NRL.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-2">
        <h4 className="font-semibold text-amber-800 mb-2">
          Szenario: Besondere Personendaten
        </h4>
        <p className="text-sm text-amber-700">
          Ein ärztliches Zeugnis einer lernenden Person wird per E-Mail an
          mehrere Personen weitergeleitet. Besondere Personendaten dürfen nur
          an den engsten berechtigten Personenkreis weitergegeben werden – in
          diesem Fall ein klarer Verstoss.
        </p>
      </div>

      <RoleHint role="lehrpersonen">
        Die korrekte Klassifizierung von Daten liegt in Ihrer Verantwortung.
        Prüfen Sie bei jedem Dokument, welche Schutzstufe gilt.
      </RoleHint>
      <RoleHint role="mitarbeitende">
        Achten Sie besonders auf die korrekte Einstufung von Personendaten in
        Ihrem Arbeitsbereich. Im Zweifel gilt die höhere Schutzstufe.
      </RoleHint>
    </SectionCard>
  );
}
