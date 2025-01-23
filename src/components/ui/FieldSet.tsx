export default function FieldSet({
  children,
  legend,
  className,
  ...props
}: Readonly<{
  children: React.ReactNode;
  legend: string;
  className?: string;
  props?: React.HTMLAttributes<HTMLFieldSetElement>;
}>) {
  return (
    <fieldset className={className} {...props}>
      <legend className="text-lg font-semibold">{legend}</legend>
      {children}
    </fieldset>
  );
}
