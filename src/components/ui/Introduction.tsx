"use client";
import React from "react";
// import FormStep from "@/components/ui/FormStep";

export default function Introduction() {
  return (
    // <FormStep stepTitle="Voorwoord - Belangrijke Informatie" currentStep={1} totalSteps={4}>
    <div className="">
      <p className="text-gray-700 dark:text-gray-300">
        Welkom bij het aanvraagformulier voor het{" "}
        <strong>Persoonsvolgend Budget (PVB)</strong> via het{" "}
        <strong>Vlaams Agentschap voor Personen met een Handicap (VAPH)</strong>
        . Hieronder vindt u belangrijke informatie over het invullen van het
        formulier.
      </p>

      <h3 className="text-lg font-semibold text-govBlue-700 mt-4">
        Wat moet u weten voordat u begint?
      </h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        <li>📝 Alle vragen zijn verplicht, tenzij anders vermeld.</li>
        <li>
          ⏳ Het invullen duurt gemiddeld <strong>30 minuten</strong>.
        </li>
        <li>
          💾 Uw antwoorden worden <strong>automatisch opgeslagen</strong>, zodat
          u later kunt terugkeren.
        </li>
      </ul>

      <h3 className="text-lg font-semibold text-govBlue-700 mt-4">
        Hoe verloopt de aanvraag?
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        De aanvraag bestaat uit <strong>4 stappen</strong>. Elke stap verzamelt
        specifieke gegevens die nodig zijn voor uw subsidieaanvraag.
      </p>

      <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
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
      </ul>

      <h3 className="text-lg font-semibold text-govBlue-700 mt-4">
        Heeft u hulp nodig?
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        Indien u ondersteuning nodig heeft bij het invullen van dit formulier,
        kunt u terecht bij de{" "}
        <a
          href="https://www.vaph.be/contact"
          className="text-blue-600 underline"
        >
          contactpagina van VAPH
        </a>
        .
      </p>
    </div>
    // </FormStep>
  );
}
