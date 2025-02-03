import type { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "size"> & {
  size?: "medium" | "large";
};
export function ButtonLink(props: ButtonLinkProps) {
  const { size: requestedSize, ...otherProps } = props;
  const size = requestedSize || "medium";

  return (
    <a
      {...otherProps}
      className={twMerge(
        "text-white rounded-full bg-accent-solid hover:bg-accent-solid-hover cursor-pointer transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent-8",
        size === "medium" ? "px-4 py-2" : "px-6 py-3",
      )}
    />
  );
}
