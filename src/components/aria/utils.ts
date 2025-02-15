import { composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

// only focus when focused by keyboard
export const focusRing = tv({
  base: "outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2",
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2",
    },
  },
});

// focus when focused by mouse or keyboard
// export const focusRing = tv({
//   base: "outline-none focus:ring-2 focus:ring-red-500", // ✅ Always show focus
//   variants: {
//     isFocusWithin: {
//       false: "",
//       true: "outline-2 outline-blue-500", // ✅ Shows outline when input is focused (mouse OR keyboard)
//     },
//   },
// });

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className));
}
