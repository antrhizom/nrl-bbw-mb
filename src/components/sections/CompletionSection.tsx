"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import CertificateGenerator from "@/components/certificate/CertificateGenerator";

const ALL_SECTIONS = [
  { key: "allgemein", label: "Kap. 1 – Allgemeine Bestimmungen" },
  { key: "nutzung-it", label: "Kap. 2 – Nutzung IT-Arbeitsmittel" },
  { key: "datensicherheit-1", label: "Kap. 3 – Datensicherheit: Grundlagen" },
  { key: "datensicherheit-2", label: "Kap. 4 – Datensicherheit: Speicherung & Schutz" },
  { key: "datensicherheit-3", label: "Kap. 5 – Kommunikation & Netzwerk" },
  { key: "datenschutz-1", label: "Kap. 6 – Datenschutz: Grundlagen" },
  { key: "datenschutz-2", label: "Kap. 7 – Datenschutz: Im Unterricht" },
  { key: "datenschutz-3", label: "Kap. 8 – KI & Lerntechnologien" },
  { key: "urheberrecht-1", label: "Kap. 9 – Urheberrecht: Grundlagen" },
  { key: "urheberrecht-2", label: "Kap. 10 – Urheberrecht: Neukreationen & KI" },
  { key: "verstoesse", label: "Kap. 11 – Verstösse & Rechtliches" },
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
            <h3 className="text-xl font-bold text-bbw-green-700 mb-2">Herzlichen Glückwunsch!</h3>
            <p className="text-gray-700">
              Sie haben alle Kapitel des Merkblatts zur Nutzungsrichtlinie IKT erfolgreich
              bearbeitet. Sie können jetzt Ihr Zertifikat herunterladen.
            </p>
          </div>
          <CertificateGenerator />
        </div>
      ) : (
        <div>
          <div className="bg-bbw-blue-100 border border-bbw-blue-300 rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-4">
              Bitte bearbeiten Sie zuerst alle Kapitel, um Ihr Zertifikat zu erhalten.
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
          Das vollständige Dokument der Nutzungsrichtlinie IKT finden Sie hier:
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
