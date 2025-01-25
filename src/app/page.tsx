// "use client";
import MultiPageForm from "@/components/ui/MultiPageForm";
import { FormProvider } from "@/context/FormContext";
import Sidebar from "@/components/ui/Sidebar";

export default function Home() {
  return (
    <FormProvider>
      {/* ✅ Small Top Navigation */}
      <header className="w-full bg-govBlue-600 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-lg font-bold">Mijn Formulier</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">
            Over
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex justify-center md:justify-start min-h-screen bg-govGray-100 dark:bg-govGray-900">
        <Sidebar className="hidden md:block w-64 p-4 bg-white dark:bg-govGray-800 border-r border-govGray-300" />
        <MultiPageForm />
      </main>

      <footer className="w-full bg-white dark:bg-govGray-900 py-4 text-center border-t border-govGray-300">
        <p className="font-bold text-govBlack dark:text-govGray-100">
          Vlaamse Overheid Formulier
        </p>
      </footer>
    </FormProvider>
  );
}
