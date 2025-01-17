"use client";
// import { Button } from "@/components/aria/Button";
// import { Button } from "@/components/aria/MyButton";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <Button onPress={() => alert("Hey there!")}>
          Hello React Aria starer kit + custom styling!
        </Button> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Footer</p>
      </footer>
    </div>
  );
}
