"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/aria/Button";

export default function IntroductionPage() {
  const router = useRouter();

  const text = {
    title: "Aanvraagformulier voor Persoonlijk Budget",
    welcome:
      "Welkom! Dit is het formulier om een Persoonlijk Budget (PVB) aan te vragen bij het Vlaams Agentschap voor Personen met een Handicap (VAPH). Lees deze informatie voordat je begint.",
    infoTitle: "Wat moet je weten voordat je start?",
    info: [
      "Je moet alle vragen invullen, behalve als anders aangegeven.",
      "Het invullen duurt ongeveer 30 minuten.",
      "Je antwoorden worden automatisch opgeslagen, dus je kunt later verdergaan.*",
    ],
    stepsTitle: "Hoe werkt de aanvraag?",
    steps: [
      "Stap 1: Vul je persoonlijke gegevens in.",
      "Stap 2: Vul de gegevens in van je wettelijke vertegenwoordiger (als dat nodig is).",
      "Stap 3: Geef je contactinformatie op.",
      "Stap 4: Controleer alles en dien de aanvraag in.",
    ],
    helpTitle: "Heb je hulp nodig?",
    helpText:
      "Als je hulp nodig hebt bij het invullen van dit formulier, kun je kijken op de contactpagina van VAPH.",
    startButton: "Start Aanvraag",
  };

  return (
    <main className="container mx-auto max-w-3xl py-10">
      <h1 className="text-3xl font-bold text-govBlue-800">{text.title}</h1>

      <p className="mt-4 text-gray-700 dark:text-gray-300">{text.welcome}</p>

      <section className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold text-govBlue-800">
          {text.infoTitle}
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          {text.info.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold text-govBlue-800">
          {text.stepsTitle}
        </h2>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
          {text.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold text-govBlue-800">
          {text.helpTitle}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">{text.helpText}</p>
      </section>

      <div className="mt-8">
        <Button
          onPress={() => router.push("/form")}
          variant="primary"
          className="px-6 py-3 text-lg"
        >
          {text.startButton}
        </Button>
      </div>
    </main>
  );
}
