// "use client";

import MultiPageForm from "@/components/ui/MultiPageForm";
import { FormProvider } from "@/context/FormContext";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <FormProvider>
          <MultiPageForm />
        </FormProvider>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className=" font-bold">Footer</p>
      </footer>
    </div>
  );
}
