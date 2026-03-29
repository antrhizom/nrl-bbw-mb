"use client";

import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import MerksatzCard from "@/components/MerksatzCard";
import TrueFalseCards from "@/components/interactive/TrueFalseCards";

export default function DatensicherheitSection() {
  const { markInteractiveComplete, markQuizPassed } = useMerkblatt();

  return (
    <SectionCard chapterLabel="Kapitel 2" title="Datensicherheit">
      <div className="space-y-4">
        <MerksatzCard>
          Schulinterne Daten dürfen nur auf offiziellen BBW-Speicherdiensten abgelegt werden:
          Schulserver, Nextcloud, OneDrive, Teams, SharePoint oder OpenOlat.
        </MerksatzCard>

        <MerksatzCard>
          Zugangsdaten sind streng vertraulich. Konten dürfen nicht geteilt werden.
          Verwende starke Passwörter und aktiviere MFA (Mehr-Faktor-Authentifizierung).
        </MerksatzCard>

        <MerksatzCard>
          Clean-Desk / Clear-Screen: Sperre deinen Bildschirm immer mit{" "}
          <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-sm font-mono">Win+L</kbd>,
          wenn du den Arbeitsplatz verlässt.
        </MerksatzCard>
      </div>

      <TrueFalseCards
        title="Richtig oder Falsch?"
        statements={[
          {
            statement: "Schulinterne Daten dürfen auch in einer privaten Dropbox gespeichert werden.",
            isTrue: false,
            explanation: "Nur offizielle BBW-Speicherdienste sind erlaubt (OneDrive, Teams, SharePoint, Schulserver, Nextcloud, OpenOlat).",
          },
          {
            statement: "Man darf sein Schulkonto mit einer Kollegin teilen, wenn sie das Passwort kennt.",
            isTrue: false,
            explanation: "Konten dürfen nie geteilt werden – Zugangsdaten sind streng vertraulich.",
          },
          {
            statement: "Beim Verlassen des Arbeitsplatzes muss der Bildschirm gesperrt werden.",
            isTrue: true,
            explanation: "Clean-Desk / Clear-Screen: Bildschirm immer mit Win+L sperren.",
          },
        ]}
        onComplete={() => {
          markInteractiveComplete("datensicherheit");
          markQuizPassed("datensicherheit");
        }}
      />
    </SectionCard>
  );
}
