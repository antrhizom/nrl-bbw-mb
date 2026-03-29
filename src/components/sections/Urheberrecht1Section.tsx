"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";
import GlossaryCards from "@/components/GlossaryCards";
import { GLOSSARY } from "@/lib/glossary";

export default function Urheberrecht1Section() {
  const { markComplete } = useMerkblatt();
  const sectionId = "urheberrecht-1";

  const flipCards = [
    {
      title: "Auszüge erlaubt, ganze Werke nicht",
      description:
        "Im Unterricht dürfen Auszüge aus urheberrechtlich geschützten Werken verwendet werden. Ganze kommerziell erhältliche Werke kopieren ist nicht erlaubt.",
    },
    {
      title: "TV-/Radiosendungen & Bilder",
      description:
        "TV- und Radiosendungen dürfen auf passwortgeschützten Plattformen nur in der eigenen Klasse genutzt werden. Bilder (Fotografien, Gemälde, Grafiken) dürfen vollständig im Unterricht gezeigt werden.",
    },
    {
      title: "Klassenübergreifende Nutzung verboten",
      description:
        "Klassenübergreifende und lehrpersonenübergreifende Teilordner mit urheberrechtlich geschützten Inhalten sind nicht erlaubt. Auch geteilte Zusammenstellungen der Lernenden untereinander sind verboten.",
    },
  ];

  const glossaryTerms = ["Urheberrecht"];

  return (
    <SectionCard chapterLabel="Kapitel 5.1" title="Urheberrecht – Grundlagen & Unterricht">
      <p className="text-gray-700 mb-6">
        Das <InfoTerm>Urheberrecht</InfoTerm> schützt geistige Schöpfungen und regelt, wie Werke im
        Unterricht verwendet werden dürfen.
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

      <GlossaryCards
        terms={glossaryTerms}
        glossary={GLOSSARY}
        sectionId={sectionId}
        onAllLearned={() => markComplete(sectionId, "glossary")}
      />
    </SectionCard>
  );
}
