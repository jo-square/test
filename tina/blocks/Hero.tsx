import type { Template } from "tinacms";
import { ButtonLink } from "../components/ButtonLink";

type HeroProps = {
  imgBackgroundUrl: string;
  title: string;
  link: {
    seoTitle: string;
    _sys: {
      "filename": string
    }
  };
};
export function Hero(props: HeroProps) {

  return (
    <div
      className="flex flex-col bg-cover bg-top"
      style={{
        backgroundImage: `url(${props.imgBackgroundUrl})`,
      }}
    >
      <div className="bg-black/60 py-32 md:py-56 ">
        <div className="flex flex-col gap-8 justify-center items-center px-2 md:px-0 max-w-screen-xl md:mx-auto">
          <h1 className="font-serif text-white font-bold text-5xl md:text-6xl text-center">
            {props.title}
          </h1>
          <ButtonLink href={`/${props.link._sys.filename}`} size="large">
            {props.link.seoTitle}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}


export const heroBlock: Template = {
  name: 'hero',
  label: 'Hero',
  ui: {
    defaultItem: {
      title: 'This Big Text is Totally Awesome',
    },
  },
  fields: [
    {
      type: "image",
      label: "Image",
      name: "imgBackgroundUrl",
      required: true
    },
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      required: true
    },
    {
      type: 'reference',
      collections: ['page'],
      label: 'Link',
      name: 'link',
      required: true
    },
  ],
}