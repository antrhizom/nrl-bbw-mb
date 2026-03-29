"use client";

import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import MerksatzCard from "@/components/MerksatzCard";
import TrueFalseCards from "@/components/interactive/TrueFalseCards";

export default function DatenschutzSection() {
  const { markInteractiveComplete, markQuizPassed } = useMerkblatt();

  return (
    <SectionCard chapterLabel="Kapitel 4" title="Datenschutz & KI">
      <div className="space-y-4">
        <MerksatzCard>
          Keine persönlichen Daten in generative KI-Tools (z.B. ChatGPT) eingeben.
          Vertrauliche oder geheime Informationen dürfen nicht mit KI verwendet werden.
        </MerksatzCard>

        <MerksatzCard>
          Persönliche Statistiken und Ergebnisse dürfen nicht vor der Klasse offengelegt werden.
          Besondere Personendaten (z.B. Gesundheitsdaten) sind mindestens vertraulich einzustufen.
        </MerksatzCard>

        <MerksatzCard>
          Die Anmeldung bei KI-Tools und Lerntechnologien ist freiwillig und darf nicht
          erzwungen werden. Anmeldungen mit dem Schul-Login bei Schulangeboten sind davon
          nicht betroffen.
        </MerksatzCard>
      </div>

      <TrueFalseCards
        title="Richtig oder Falsch?"
        statements={[
          {
            statement: "Man darf Schülernamen in ChatGPT eingeben, um Texte korrigieren zu lassen.",
            isTrue: false,
            explanation: "Persönliche Daten dürfen nicht in generative KI-Tools eingegeben werden.",
          },
          {
            statement: "Die Anmeldung bei einem KI-Tool kann von der Lehrperson erzwungen werden.",
            isTrue: false,
            explanation: "Die Anmeldung bei KI-Tools ist freiwillig und darf nicht erzwungen werden.",
          },
          {
            statement: "Individuelle Quiz-Ergebnisse dürfen nicht vor der ganzen Klasse gezeigt werden.",
            isTrue: true,
            explanation: "Persönliche Statistiken und Ergebnisse dürfen nicht vor der Klasse offengelegt werden.",
          },
        ]}
        onComplete={() => {
          markInteractiveComplete("datenschutz");
          markQuizPassed("datenschutz");
        }}
      />
    </SectionCard>
  );
}
