import { type ReactNode } from "react";
import { tinaField } from "tinacms/dist/react";

export const TinaEdit = (props: { data: any; children: ReactNode }) => {
  const isEditMode = "_tina_metadata" in props.data;

  if (!isEditMode) {
    return <>{props.children}</>;
  }

  return <div data-tina-field={tinaField(props.data)}>{props.children}</div>;
};
