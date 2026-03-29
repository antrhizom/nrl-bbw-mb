"use client";
import { useMerkblatt } from "@/context/MerkblattContext";
import SectionCard from "@/components/SectionCard";
import FlipCard from "@/components/FlipCard";
import InfoTerm from "@/components/InfoTerm";
import RoleHint from "@/components/RoleHint";

export default function Urheberrecht1Section() {
  const { markSectionComplete } = useMerkblatt();
  const sectionId = "urheberrecht-1";

  const flipCards = [
    {
      title: "Nur Auszüge kopieren",
      description:
        "Auszüge geschützter Werke sind für den Unterricht erlaubt – ganze Werke nicht.",
    },
    {
      title: "TV/Radio & Bilder",
      description:
        "Sendungen nur auf passwortgeschützten Plattformen in der eigenen Klasse. Bilder dürfen vollständig gezeigt werden.",
    },
    {
      title: "Keine klassenübergreifende Nutzung",
      description:
        "Gemeinsame Ordner mit geschützten Inhalten über Klassen/Lehrpersonen hinweg sind verboten.",
    },
    {
      title: "Lernende als Autorinnen",
      description:
        "Mit heutigen Medienanwendungen werden auch Lernende zu Autorinnen und Autoren. Mediale Schulprojekte und -arbeiten sind Produkte, die unter das Urheberrecht fallen.",
    },
  ];

  return (
    <SectionCard chapterLabel="Kapitel 5.1" title="Urheberrecht – Grundlagen">
      <p className="text-gray-700 leading-relaxed">
        Das <InfoTerm>Urheberrecht</InfoTerm> schützt geistige Schöpfungen.
        Im Schulkontext betrifft das nicht nur Lehrmaterialien, sondern auch die Werke
        der Lernenden selbst: Durch moderne Medienanwendungen werden Lernende zu
        Autorinnen und Autoren. Schulische Medienprojekte und -arbeiten sind Produkte,
        die unter das Urheberrecht fallen.
      </p>

      <RoleHint role="lernende">
        Deine Schulprojekte, Videos, Podcasts und Präsentationen sind urheberrechtlich geschützt – auch die deiner Mitschülerinnen und Mitschüler.
      </RoleHint>
      <RoleHint role="lehrpersonen">
        Sensibilisieren Sie Lernende dafür, dass ihre medialen Arbeiten urheberrechtlich geschützte Werke sind.
      </RoleHint>

      <div className="grid gap-4 sm:grid-cols-2">
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
    </SectionCard>
  );
}
