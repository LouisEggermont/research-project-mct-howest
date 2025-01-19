"use client";
// import { Button } from "@/components/aria/Button";
// import { Button } from "@/components/aria/MyButton";
// import {
//   Button,
//   FieldError,
//   Form,
//   Input,
//   Label,
//   TextField,
// } from "react-aria-components";
// import React, { useState } from "react";
// import { Button } from "@/components/aria/Button";
// import { FieldError } from "@/components/aria/Field";
// import IdentificationForm from "@/components/ui/Form";
// import { Input } from "@/components/aria/Field";
// import { Label } from "@/components/aria/Field";
// import { Field } from "@/components/aria/Field";
// import { TextField } from "@/components/aria/TextField";

import MultiPageForm from "@/components/ui/MultiPageForm";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <IdentificationForm /> */}
        <MultiPageForm />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className=" font-bold">Footer</p>
      </footer>
    </div>
  );
}
