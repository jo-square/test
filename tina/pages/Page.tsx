import { tinaField, useTina } from "tinacms/dist/react";
import type { PageQuery, PageQueryVariables } from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import React from "react";
import { Hero } from "../blocks/Hero";

type Props = {
	variables: PageQueryVariables;
	data: PageQuery;
	query: string;
}

const TinaPage = (props: Props) => {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	})

	const page = data.page;

	return (
		<main>
			<div data-tina-field={tinaField(page, "body")}>
				<TinaMarkdown content={page.body} />
			</div>

			{page.blocks
        ? page.blocks.map(function (block, i) {
            switch (block?.__typename) {
              case 'PageBlocksHero':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Hero {...block} />
                  </React.Fragment>
                )
              default:
                return null
            }
          })
        : null}
		</main>
	)
}

export default TinaPage;
