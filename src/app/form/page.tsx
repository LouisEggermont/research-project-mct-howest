"use client";
import MultiPageForm from "@/components/ui/MultiPageForm";
import { FormProvider } from "@/context/FormContext";
import Sidebar from "@/components/ui/Sidebar";

export default function Form() {
  return (
    <FormProvider>
      <Sidebar className="hidden md:block w-64 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300" />

      <main id="main" className="flex-1 flex">
        <MultiPageForm />
      </main>
    </FormProvider>
  );
}

// "use client";
// import MultiPageForm from "@/components/ui/MultiPageForm";
// import { FormProvider } from "@/context/FormContext";
// import Sidebar from "@/components/ui/Sidebar";

// export default function Form() {
//   return (
//     <FormProvider>
//       <main id="main" className="flex-1 flex flex-col gap-8">
//         {/* Form Introduction */}
//         <section
//           aria-labelledby="form-title"
//           className="bg-gray-100 dark:bg-gray-800 p-6 rounded-md"
//         >
//           <h1 id="form-title" className="text-3xl font-bold text-govBlue-800">
//             Aanvraagformulier voor Subsidies
//           </h1>
//           <p className="text-gray-700">
//             Gebruik dit formulier om een subsidie aan te vragen bij het{" "}
//             <strong>Vlaams Agentschap voor Personen met een Handicap (VAPH)</strong>.
//             Vul de gevraagde gegevens in en doorloop de verschillende stappen om uw aanvraag correct in te dienen.
//           </p>
//         </section>

//         <div className="flex">
//           {/* Sidebar for Navigation */}
//           <aside
//             className="hidden md:block w-64 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300"
//             aria-labelledby="form-sidebar-title"
//           >
//             <h2 id="form-sidebar-title" className="text-lg font-semibold">
//               Formulier Stappen
//             </h2>
//             <Sidebar />
//           </aside>

//           {/* Form Section */}
//           <section
//             className="flex-1 bg-white dark:bg-gray-900 px-6"
//             aria-labelledby="form-submission-title"
//           >
//             <h2 id="form-submission-title" className="sr-only">
//               Subsidieaanvraagformulier
//             </h2>
//             <MultiPageForm />
//           </section>
//         </div>
//       </main>
//     </FormProvider>
//   );
// }
