import { error } from '@sveltejs/kit';
import { getArticle, getArticleContent, articles } from '$lib/content/artigos/index.js';
import type { EntryGenerator, PageLoad } from './$types.js';

export const entries: EntryGenerator = () => {
	return articles.map((a) => ({ slug: a.slug }));
};

export const load: PageLoad = async ({ params }) => {
	const article = getArticle(params.slug);
	if (!article) error(404, 'Artigo não encontrado');

	const content = await getArticleContent(params.slug);
	if (!content) error(404, 'Conteúdo do artigo não encontrado');

	return { article, content };
};
