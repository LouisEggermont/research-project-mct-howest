"use client";
import { Button } from "@/components/aria/Button"; // Adjust the import path as necessary

const steps = [
  { id: 1, title: "Persoonlijke Gegevens" },
  { id: 2, title: "Contactgegevens" },
  { id: 3, title: "Identificatie" },
];

interface SidebarProps {
  currentStep: number;
  setStep: (step: number) => void;
}

export default function Sidebar({ currentStep, setStep }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-4">Navigatie</h2>
      <nav className="space-y-2">
        {steps.map((step) => (
          <Button
            key={step.id}
            onPress={() => setStep(step.id)}
            variant={currentStep === step.id ? "primary" : "secondary"}
            className="w-full text-left p-2 rounded-md"
          >
            {step.title}
          </Button>
        ))}
      </nav>
    </aside>
  );
}
