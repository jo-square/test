import React from "react";
import { useTina } from "tinacms/dist/react";
import { match } from "ts-pattern";
import type { PageQuery, PageQueryVariables } from "../__generated__/types";
import { TinaHero } from "../blocks/Hero";
import { TinaPanelImageContent } from "../blocks/PanelImageContent";

type Props = {
  variables: PageQueryVariables;
  data: PageQuery;
  query: string;
};

const TinaPage = (props: Props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.page;

  return (
    <main>
      {page.blocks
        ? page.blocks.map((block, i) =>
            match(block)
              .with({ __typename: "PageBlocksHero" }, (data) => (
                <React.Fragment key={i + data.__typename}>
                  <TinaHero {...data} />
                </React.Fragment>
              ))
              .with({ __typename: "PageBlocksPanelImageContent" }, (data) => (
                <React.Fragment key={i + data.__typename}>
                  <TinaPanelImageContent {...data} />
                </React.Fragment>
              ))
              .otherwise(() => null),
          )
        : null}
    </main>
  );
};

export default TinaPage;
