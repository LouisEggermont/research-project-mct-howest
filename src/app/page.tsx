"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main id="main" className="container mx-auto py-10 space-y-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-govBlue-800">
        Subsidie aanvragen bij VAPH
      </h1>
      <p className="text-gray-700">
        Welkom op het informatieportaal voor het aanvragen van subsidies via het
        <strong>
          {" "}
          Vlaams Agentschap voor Personen met een Handicap (VAPH)
        </strong>
        . Hier vindt u alle benodigde informatie over hoe u een subsidie kunt
        aanvragen, de voorwaarden en de ondersteuning die beschikbaar is.
      </p>

      {/* CTA Button - Start Application */}
      <div className="mt-6">
        <Link href="/introduction">
          <button className="bg-govBlue-800 text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-govBlue-900 transition">
            Start Uw Aanvraag
          </button>
        </Link>
      </div>

      {/* Introductory Image */}
      <figure className="mt-6">
        <img
          src="https://www.vaph.be/sites/default/files/styles/cta_2/public/2023-10/shutterstock_1913294521_banner_rth_homepage.jpg"
          alt="Illustratie van een persoon die subsidiepapieren invult"
          className="w-full max-w-3xl rounded-md shadow-md"
        />
        <figcaption className="text-sm text-gray-600 mt-2">
          Figuur 1: Subsidie aanvraagproces bij VAPH.
        </figcaption>
      </figure>

      {/* Section 1: Wat is PVB? */}
      <section id="wat-is">
        <h2 className="text-2xl font-semibold text-gray-800">
          Wat is een Persoonsvolgend Budget?
        </h2>
        <p className="mt-2 text-gray-700">
          Het persoonsvolgend budget (PVB) is een
          <strong> individueel budget</strong> waarmee u zelf uw zorg en
          ondersteuning kunt organiseren en betalen. Dit budget helpt u om uw
          leven zo zelfstandig mogelijk te leiden.
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mt-4">
          “Een persoonsvolgend budget biedt mensen met een handicap de vrijheid
          om hun eigen zorg in te richten.” — VAPH
        </blockquote>
      </section>

      {/* Section 2: Hoe werkt het? */}
      <section id="stappen">
        <h2 className="text-2xl font-semibold text-gray-800">
          Hoe vraagt u een subsidie aan?
        </h2>
        <p className="mt-2 text-gray-700">
          Volg deze <strong> 4 eenvoudige stappen</strong> om een subsidie aan
          te vragen:
        </p>
        <ol className="list-decimal ml-6 mt-4 text-gray-700 space-y-2">
          <li>
            <strong> Stap 1:</strong> Vraag een budget aan via VAPH.
          </li>
          <li>
            <strong> Stap 2:</strong> Vul het ondersteuningsplan in.{" "}
            <a
              href="/handleiding-op-pvb.pdf"
              className="text-blue-600 underline focus:ring-2 focus:ring-blue-500"
            >
              Download hier de handleiding.
            </a>
          </li>
          <li>
            <strong> Stap 3:</strong> Dien het formulier in via de VAPH-website.
          </li>
          <li>
            <strong> Stap 4:</strong> Ontvang goedkeuring en uw budget.
          </li>
        </ol>
      </section>

      {/* Section 3: Overzicht van de Subsidievoorwaarden */}
      <section id="voorwaarden">
        <h2 className="text-2xl font-semibold text-gray-800">
          Voorwaarden voor een Persoonsvolgend Budget
        </h2>
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Voorwaarde
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Omschrijving
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Leeftijd</td>
              <td className="border border-gray-300 px-4 py-2">
                Minimaal 18 jaar oud
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Woonplaats</td>
              <td className="border border-gray-300 px-4 py-2">
                Ingeschreven in België
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Handicap</td>
              <td className="border border-gray-300 px-4 py-2">
                Geregistreerd bij het VAPH
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Video: Uitleg over PVB */}
      {/* <section id="video" className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">
          Video: Hoe werkt het?
        </h2>
        <iframe
          className="w-full max-w-3xl aspect-video mt-4 rounded-md shadow-md"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Uitleg over persoonsvolgend budget"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Contact & Hulp</h2>
        <p className="mt-2 text-gray-700">
          Heeft u nog vragen over uw subsidieaanvraag? Neem contact op via
          onderstaand formulier.
        </p>

        {/* Contact Form */}
        <form className="mt-6 bg-gray-100 p-4 rounded-md shadow-md max-w-md">
          <fieldset>
            <legend className="text-lg font-semibold">Contactformulier</legend>
            <label htmlFor="name" className="block mt-2 font-medium">
              Naam
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />

            <label htmlFor="email" className="block mt-2 font-medium">
              E-mailadres
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />

            <label htmlFor="message" className="block mt-2 font-medium">
              Bericht
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
            >
              Verstuur
            </button>
          </fieldset>
        </form>
      </section>

      {/* CTA Button - End of Page */}
      {/* <div className="mt-10 text-center">
        <Link href="/form">
          <button className="bg-govBlue-800 text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-govBlue-900 transition">
            Start uw aanvraag
          </button>
        </Link>
      </div> */}
    </main>
  );
}
