"use client";

import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import MerksatzCard from "@/components/MerksatzCard";
import TrueFalseCards from "@/components/interactive/TrueFalseCards";

export default function UrheberrechtSection() {
  const { markInteractiveComplete, markQuizPassed } = useMerkblatt();

  return (
    <SectionCard chapterLabel="Kapitel 5" title="Urheberrecht">
      <div className="space-y-4">
        <MerksatzCard>
          Nur Auszüge aus urheberrechtlich geschützten Werken dürfen für den Unterricht
          kopiert werden – niemals ganze kommerziell erhältliche Werke.
        </MerksatzCard>

        <MerksatzCard>
          Bilder (Fotografien, Gemälde, Grafiken) dürfen vollständig im Unterricht
          gezeigt werden. Radio- und TV-Sendungen nur auf passwortgeschützten Plattformen.
        </MerksatzCard>

        <MerksatzCard>
          Wer von KI generierte Inhalte veröffentlicht, trägt die volle Verantwortung
          für allfällige Urheberrechtsverletzungen.
        </MerksatzCard>
      </div>

      <TrueFalseCards
        title="Richtig oder Falsch?"
        statements={[
          {
            statement: "Ein ganzes Lehrbuch darf für die Klasse kopiert werden.",
            isTrue: false,
            explanation: "Nur Auszüge aus urheberrechtlich geschützten Werken dürfen kopiert werden.",
          },
          {
            statement: "Fotos und Bilder dürfen vollständig im Unterricht gezeigt werden.",
            isTrue: true,
            explanation: "Fotografien, Gemälde und Grafiken dürfen im Unterricht vollständig gezeigt werden.",
          },
          {
            statement: "KI-generierte Inhalte darf man bedenkenlos veröffentlichen.",
            isTrue: false,
            explanation: "Wer KI-Inhalte veröffentlicht, trägt die volle Verantwortung für allfällige Rechtsverletzungen.",
          },
        ]}
        onComplete={() => {
          markInteractiveComplete("urheberrecht");
          markQuizPassed("urheberrecht");
        }}
      />
    </SectionCard>
  );
}
