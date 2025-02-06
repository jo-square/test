import { Image as UnpicImage, type ImageProps } from "@unpic/react";

export function Image(props: ImageProps) {
  const role = !props.alt ? "presentation" : undefined;

  return <UnpicImage role={role} {...props} />;
}
