"use client";

interface RoleHintProps {
  role: "lernende" | "lehrpersonen";
  children: React.ReactNode;
}

export default function RoleHint({ role, children }: RoleHintProps) {
  const isLernende = role === "lernende";
  return (
    <div
      className={`flex items-start gap-2 text-sm rounded-lg p-3 mt-2 ${
        isLernende
          ? "bg-blue-50 border border-blue-200 text-blue-800"
          : "bg-amber-50 border border-amber-200 text-amber-800"
      }`}
    >
      <span className="font-semibold shrink-0">
        {isLernende ? "Lernende:" : "Lehrpersonen:"}
      </span>
      <span>{children}</span>
    </div>
  );
}
