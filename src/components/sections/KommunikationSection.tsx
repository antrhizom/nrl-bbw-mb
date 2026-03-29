"use client";

import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import MerksatzCard from "@/components/MerksatzCard";
import TrueFalseCards from "@/components/interactive/TrueFalseCards";

export default function KommunikationSection() {
  const { markInteractiveComplete, markQuizPassed } = useMerkblatt();

  return (
    <SectionCard chapterLabel="Kapitel 3" title="Kommunikation & Netzwerk">
      <div className="space-y-4">
        <MerksatzCard>
          Nur schulische Collaboration-Tools verwenden (z.B. Microsoft Teams).
          WhatsApp, Dropbox und ähnliche Dienste sind nicht erlaubt.
        </MerksatzCard>

        <MerksatzCard>
          E-Mails dürfen nicht an private Postfächer weitergeleitet werden.
          Vertrauliche Nachrichten müssen ausserhalb des EDU-Tenants verschlüsselt versendet werden.
        </MerksatzCard>

        <MerksatzCard>
          Sicherheitsvorfälle, Verlust von IT-Geräten oder verdächtige Aktivitäten
          müssen sofort dem PIKT- oder TIKT-Team gemeldet werden.
        </MerksatzCard>
      </div>

      <TrueFalseCards
        title="Richtig oder Falsch?"
        statements={[
          {
            statement: "Schulische E-Mails darf man an sein privates Gmail-Konto weiterleiten.",
            isTrue: false,
            explanation: "E-Mails dürfen nicht an private Postfächer weitergeleitet werden.",
          },
          {
            statement: "WhatsApp darf für schulische Kommunikation genutzt werden.",
            isTrue: false,
            explanation: "Nur schulische Collaboration-Tools (z.B. Microsoft Teams) sind erlaubt.",
          },
          {
            statement: "Bei einem Sicherheitsvorfall muss sofort das PIKT/TIKT-Team informiert werden.",
            isTrue: true,
            explanation: "Sicherheitsvorfälle und verdächtige Aktivitäten müssen sofort gemeldet werden.",
          },
        ]}
        onComplete={() => {
          markInteractiveComplete("kommunikation");
          markQuizPassed("kommunikation");
        }}
      />
    </SectionCard>
  );
}
