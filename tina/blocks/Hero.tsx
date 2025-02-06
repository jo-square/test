import { type Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import type { PageBlocksHero } from "../__generated__/types";
import { ButtonLink } from "../components/ButtonLink";
import { TinaEdit } from "./TinaEdit";

type HeroRootProps = {
  imgBackgroundUrl: string;
  title: string;
  link: {
    label: string;
    href: string;
  };
};
const Hero = (props: HeroRootProps) => {
  return (
    <div
      className="flex flex-col bg-cover bg-top"
      style={{
        backgroundImage: `url('${props.imgBackgroundUrl}')`,
      }}
    >
      <div className="bg-black/60 py-32 md:py-56">
        <div className="flex max-w-screen-xl flex-col items-center justify-center gap-8 px-2 md:mx-auto md:px-0">
          <h1 className="text-center font-serif text-5xl font-bold text-white md:text-6xl">
            {props.title}
          </h1>
          <ButtonLink href={props.link.href} size="large">
            {props.link.label}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export const TinaHero = (props: PageBlocksHero) => {
  return (
    <TinaEdit data={props}>
      <Hero
        title={props.title}
        imgBackgroundUrl={props.imgBackgroundUrl}
        link={{
          label: props.link.linkLabel || props.link.link.seo?.title || "",
          href: `/${props.link.link._sys.filename}`,
        }}
      />
    </TinaEdit>
  );
};

export const heroBlock: Template = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "",
    defaultItem: {
      title: "Hero title",
    },
  },
  fields: [
    {
      type: "image",
      label: "Image",
      name: "imgBackgroundUrl",
      required: true,
    },
    {
      type: "string",
      label: "Title",
      name: "title",
      required: true,
    },
    {
      name: "link",
      label: "Link",
      type: "object",
      required: true,
      fields: [
        {
          type: "reference",
          collections: ["page"],
          label: "Link",
          name: "link",
          required: true,
        },
        {
          type: "string",
          label: "Link label",
          name: "linkLabel",
        },
      ],
    },
  ],
};
