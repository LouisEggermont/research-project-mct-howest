"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/aria/Button";

export default function IntroductionPage() {
  const router = useRouter();

  return (
    <main className="container mx-auto max-w-3xl py-10">
      <h1 className="text-3xl font-bold text-govBlue-800">
        Aanvraagformulier Persoonsvolgend Budget
      </h1>

      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Welkom bij het aanvraagformulier voor het{" "}
        <strong>Persoonsvolgend Budget (PVB)</strong> via het{" "}
        <strong>Vlaams Agentschap voor Personen met een Handicap (VAPH)</strong>
        . Lees onderstaande informatie voordat u begint.
      </p>

      {/* Form Information */}
      <section className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold text-govBlue-700">
          Wat moet u weten voordat u start?
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>📝 Alle vragen zijn verplicht, tenzij anders vermeld.</li>
          <li>
            ⏳ Het invullen duurt gemiddeld <strong>30 minuten</strong>.
          </li>
          <li>
            💾 Uw antwoorden worden <strong>automatisch opgeslagen</strong>,
            zodat u later kunt terugkeren.
          </li>
        </ul>
      </section>

      {/* Steps Overview */}
      <section className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold text-govBlue-700">
          Hoe verloopt de aanvraag?
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          De aanvraag bestaat uit <strong>4 stappen</strong>. Elke stap
          verzamelt specifieke gegevens die nodig zijn voor uw subsidieaanvraag.
        </p>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>
            <strong>Stap 1:</strong> Persoonlijke gegevens invullen
          </li>
          <li>
            <strong>Stap 2:</strong> Wettelijke vertegenwoordiging (indien van
            toepassing)
          </li>
          <li>
            <strong>Stap 3:</strong> Contactinformatie
          </li>
          <li>
            <strong>Stap 4:</strong> Identificatie & bevestiging
          </li>
        </ol>
      </section>

      {/* Assistance Section */}
      <section className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold text-govBlue-700">
          Heeft u hulp nodig?
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Indien u ondersteuning nodig heeft bij het invullen van dit formulier,
          kunt u terecht bij de{" "}
          <a
            href="https://www.vaph.be/contact"
            className="text-blue-600 underline focus:ring-2 focus:ring-blue-500"
          >
            contactpagina van VAPH
          </a>
          .
        </p>
      </section>

      {/* CTA Button to Start the Form */}
      <div className="mt-8">
        <Button
          onPress={() => router.push("/form")}
          variant="primary"
          className="px-6 py-3 text-lg"
        >
          Start de aanvraag
        </Button>
      </div>
    </main>
  );
}
