import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import type { Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { PageBlocksPanelImageContent } from "../__generated__/types";
import { Image } from "../components/Image";
import { tinaField } from "tinacms/dist/react";
import { TinaEdit } from "./TinaEdit";

type PanelImageContentProps = {
  reverse?: boolean;
  imgUrl: string;
  imgAlt?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};
function PanelImageContent(props: PanelImageContentProps) {
  return (
    <div
      className={twMerge(
        "mx-auto my-16 grid max-w-screen-xl gap-6 gap-x-12 px-2 [grid-template-areas:'title''image''desc'] md:grid-rows-[auto_1fr] md:px-0",
        props.reverse
          ? "md:grid-cols-[1fr_467px] md:[grid-template-areas:'title_image''desc_image']"
          : "md:grid-cols-[467px_1fr] md:[grid-template-areas:'image_title''image_desc']",
      )}
    >
      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-5xl font-semibold">{props.title}</h2>
        {props.subtitle && <p className="text-gray-11">{props.subtitle}</p>}
      </div>

      <Image
        layout="constrained"
        className="shadow-image [grid-area:image]"
        aspectRatio={4 / 3}
        width={467}
        background="auto"
        src={props.imgUrl}
        alt={props.imgAlt}
      />
      <div className="flex flex-col gap-6">{props.children}</div>
    </div>
  );
}

export const TinaPanelImageContent = (props: PageBlocksPanelImageContent) => {
  return (
    <TinaEdit data={props}>
      <PanelImageContent
        imgUrl={props.image}
        imgAlt=""
        reverse={Boolean(props.reverse)}
        title={props.title}
        subtitle={props.subtitle || undefined}
      >
        <TinaMarkdown content={props.content} />
      </PanelImageContent>
    </TinaEdit>
  );
};

export const panelImageContentBlock: Template = {
  name: "panelImageContent",
  label: "Panel Image Content",
  ui: {
    previewSrc: "",
  },
  fields: [
    {
      type: "image",
      label: "Image",
      name: "image",
      required: true,
    },
    {
      type: "boolean",
      label: "Reverse",
      name: "reverse",
    },
    {
      type: "string",
      label: "Title",
      name: "title",
      required: true,
    },
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle",
    },
    {
      type: "rich-text",
      label: "Content",
      name: "content",
      required: true,
    },
  ],
};
