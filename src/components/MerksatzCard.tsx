"use client";

interface MerksatzCardProps {
  children: React.ReactNode;
}

export default function MerksatzCard({ children }: MerksatzCardProps) {
  return (
    <div className="border-l-4 border-bbw-green-500 bg-bbw-green-50 rounded-r-lg px-5 py-4">
      <p className="text-gray-800 leading-relaxed font-medium">{children}</p>
    </div>
  );
}
