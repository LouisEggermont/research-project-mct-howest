"use client";
import MultiPageForm from "@/components/ui/MultiPageForm";
import { FormProvider } from "@/context/FormContext";
import Sidebar from "@/components/ui/Sidebar";
import { I18nProvider } from "react-aria-components";

export default function FormPage() {
  return (
    <FormProvider>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar - Should be outside <main> */}

        <Sidebar className="hidden md:block w-64 p-4 bg-gray-100 dark:bg-gray-800 border border-gray-300 rounded-lg" />

        {/* Main Content */}
        <main id="main" className="flex-1 flex flex-col gap-6 px-8">
          {/* Page Title (H1) */}
          <h1 className="text-3xl font-bold text-govBlue-800 border-l-4 border-govBlue-800 pl-4">
            Ondersteuningsplan Persoonsopvolgend Budget (OP PVB)
          </h1>

          {/* Form Section */}
          <section aria-labelledby="form-title">
            <h2 id="form-title" className="sr-only">
              Subsidieaanvraagformulier
            </h2>

            <I18nProvider locale="nl">
              <MultiPageForm />
            </I18nProvider>
          </section>
        </main>
      </div>
    </FormProvider>
  );
}
