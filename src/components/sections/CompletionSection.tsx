"use client";

import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import CertificateGenerator from "@/components/certificate/CertificateGenerator";

const ALL_SECTIONS = [
  { key: "allgemein", label: "Kapitel 1 – Allgemein & IT-Nutzung" },
  { key: "datensicherheit", label: "Kapitel 2 – Datensicherheit" },
  { key: "kommunikation", label: "Kapitel 3 – Kommunikation & Netzwerk" },
  { key: "datenschutz", label: "Kapitel 4 – Datenschutz & KI" },
  { key: "urheberrecht", label: "Kapitel 5 – Urheberrecht" },
];

export default function CompletionSection() {
  const { isFullyCompleted, completedSections } = useMerkblatt();

  const missingSections = ALL_SECTIONS.filter(
    (section) => !completedSections.has(section.key as never)
  );

  return (
    <SectionCard chapterLabel="Abschluss" title="Zertifikat">
      {isFullyCompleted ? (
        <div>
          <div className="bg-bbw-green-50 border border-bbw-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-bbw-green-700 mb-2">
              Herzlichen Glückwunsch!
            </h3>
            <p className="text-gray-700">
              Du hast alle Kapitel des Merkblatts zur Nutzungsrichtlinie IKT erfolgreich
              bearbeitet. Du kannst jetzt dein Zertifikat herunterladen.
            </p>
          </div>
          <CertificateGenerator />
        </div>
      ) : (
        <div>
          <div className="bg-bbw-blue-100 border border-bbw-blue-300 rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-4">
              Bitte bearbeite zuerst alle Kapitel, um dein Zertifikat zu erhalten.
            </p>
            {missingSections.length > 0 && (
              <div>
                <p className="font-semibold text-gray-800 mb-2">Noch offen:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {missingSections.map((s) => (
                    <li key={s.key}>{s.label}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700">
          Das vollständige Dokument der Nutzungsrichtlinie IKT findest du hier:
        </p>
        <a
          href="/251126_Nutzungsrichtlinie_IKT_BBW.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-2 text-bbw-blue-500 hover:text-bbw-blue-300 font-medium underline"
        >
          Nutzungsrichtlinie IKT (PDF)
        </a>
      </div>
    </SectionCard>
  );
}
