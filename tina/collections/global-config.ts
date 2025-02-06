import { facebook, openGraph, twitter } from "@pcode-at/tinacms-seo/dist/src/schema";
import type { Collection, TinaField } from "tinacms";
import IconComponent from "../components/IconComponent";

const expertDefaultSeoPageProps: TinaField = {
  name: "defaultSeo",
  label: "Default Seo",
  type: "object",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      required: true
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      ui: {
        component: "textarea",
      },
      required: true
    },
    {
      type: "string",
      label: "Canonical",
      name: "canonical",
    },
    openGraph,
    facebook,
    twitter
  ],
};

export const GlobalConfigCollection: Collection = {
  name: "config",
  label: "Global Config",
  path: "src/content/config",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    expertDefaultSeoPageProps,
    {
      name: "nav",
      label: "Site Navigation Menu (Reorder, Add, Remove)",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.title
          };
        },
      },
      fields: [
        {
          name: "title",
          label: "Title of Nav Item",
          type: "string",
          required: true
        },
        {
          name: "link",
          label: "Path of the Nav Item",
          type: "string",
          required: true

        }
      ]
    },
    {
      name: "contactLinks",
      label: "Contact Links",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.title
          }
        },
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string"
        },
        {
          name: "link",
          label: "Link",
          type: "string"
        },
        {
          name: "icon",
          label: "Icon",
          type: "string",
          ui: {
            //@ts-ignore
            component: IconComponent
          }
        }
      ],
    }

    // Add other config fields here...
  ]
}