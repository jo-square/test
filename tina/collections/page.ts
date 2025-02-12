import { seoPageProps } from "@pcode-at/tinacms-seo/dist/src/schema";
import type { Collection } from "tinacms";
import { heroBlock } from "../blocks/Hero";
import { panelImageContentBlock } from "../blocks/PanelImageContent";
import { ExampleBlock } from "../blocks/Test";
import { Example2Block } from "../blocks/with_stats";

export const PageCollection: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/page",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/${document._sys.filename}`;
    },
  },
  fields: [
    seoPageProps,
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      templates: [
        heroBlock,
        panelImageContentBlock,
        ExampleBlock,
        Example2Block,
      ],
      ui: {
        visualSelector: true,
      },
    },
  ],
};
