import { twMerge } from "tailwind-merge";
export default function FieldSet({
  children,
  legend,
  ...props
}: Readonly<{
  children: React.ReactNode;
  legend: string;
  className?: string;
  props?: React.HTMLAttributes<HTMLFieldSetElement>;
}>) {
  return (
    <fieldset
      className={twMerge(
        "flex flex-col gap-4 first:mt-0 mt-8",
        props.className
      )}
    >
      <legend className="text-lg font-semibold">{legend}</legend>
      {children}
    </fieldset>
  );
}
