"use client";

import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import MerksatzCard from "@/components/MerksatzCard";
import TrueFalseCards from "@/components/interactive/TrueFalseCards";

export default function AllgemeinSection() {
  const { markInteractiveComplete, markQuizPassed } = useMerkblatt();

  return (
    <SectionCard chapterLabel="Kapitel 1" title="Allgemein & IT-Nutzung">
      <div className="space-y-4">
        <MerksatzCard>
          Die NRL gilt für alle Nutzenden der BBW-IKT-Systeme – Lernende, Lehrpersonen,
          Schulleitung, Verwaltung und Gäste.
        </MerksatzCard>

        <MerksatzCard>
          Private Nutzung der Schulsysteme ist erlaubt, aber schulische Zwecke haben immer Vorrang.
          Kryptowährungs-Mining und kommerzielle Nutzung sind verboten.
        </MerksatzCard>

        <MerksatzCard>
          BYOD-Geräte (Bring Your Own Device) brauchen Passwort-/PIN-Schutz und regelmässige
          Software-Updates. E-Mail und Kalender können über den Browser genutzt werden –
          eine Synchronisation ist nicht erforderlich.
        </MerksatzCard>
      </div>

      <TrueFalseCards
        title="Richtig oder Falsch?"
        statements={[
          {
            statement: "Die NRL gilt nur für Lehrpersonen.",
            isTrue: false,
            explanation: "Sie gilt für alle Nutzenden: Lernende, Lehrpersonen, Schulleitung, Verwaltung und Gäste.",
          },
          {
            statement: "Private Nutzung der Schulsysteme ist grundsätzlich erlaubt.",
            isTrue: true,
            explanation: "Private Nutzung ist erlaubt, sofern schulische Zwecke Vorrang haben.",
          },
          {
            statement: "BYOD-Geräte müssen E-Mails und Kalender synchronisieren.",
            isTrue: false,
            explanation: "Eine Synchronisation ist nicht erforderlich – der Zugang über den Browser reicht aus.",
          },
        ]}
        onComplete={() => {
          markInteractiveComplete("allgemein");
          markQuizPassed("allgemein");
        }}
      />
    </SectionCard>
  );
}
