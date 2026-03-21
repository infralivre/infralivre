import { error } from '@sveltejs/kit';
import { getArtigo, getArtigoContent, artigos } from '$lib/content/artigos/index.js';
import type { EntryGenerator, PageLoad } from './$types.js';

export const entries: EntryGenerator = () => {
	return artigos.map((a) => ({ slug: a.slug }));
};

export const load: PageLoad = async ({ params }) => {
	const artigo = getArtigo(params.slug);
	if (!artigo) error(404, 'Artigo não encontrado');

	const content = await getArtigoContent(params.slug);
	if (!content) error(404, 'Conteúdo do artigo não encontrado');

	return { artigo, content };
};
