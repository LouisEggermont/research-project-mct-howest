// "use client";
import MultiPageForm from "@/components/ui/MultiPageForm";
import { FormProvider } from "@/context/FormContext";
import Sidebar from "@/components/ui/Sidebar";

export default function Home() {
  return (
    <FormProvider>
      {/* ✅ Improved Top Navigation */}
      <div className="flex flex-col min-h-screen">
        <header className="bg-govBlue-800 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-lg font-bold">Mijn Formulier</h1>
            <nav className="space-x-4">
              <a href="#" className="hover:underline">
                Over
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main className="container mx-auto flex flex-1 mt-8 dark:bg-gray-900">
          <Sidebar className="hidden md:block w-64 p-4  bg-gray-100 dark:bg-gray-800 border border-gray-300" />

          <section className="flex-1 flex">
            <MultiPageForm />
          </section>
        </main>

        <footer className="bg-white dark:bg-gray-900 p-4 border-t mt-8 border-gray-300">
          <div className="container mx-auto flex justify-start">
            <p className="font-bold text-black dark:text-white">
              Vlaamse Overheid Formulier
            </p>
          </div>
        </footer>
      </div>
    </FormProvider>
  );
}
