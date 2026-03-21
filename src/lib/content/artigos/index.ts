import type { Component } from 'svelte';

export interface Artigo {
	slug: string;
	title: string;
	description: string;
	ogDescription: string;
	image: string;
	imageAlt: string;
	category: string;
	infrastructureType: "software" | "serviço" | "rede" | "hardware";
	authors: { name: string; photo?: string }[];
	readTime: string;
	cta: {
		title: string;
		description: string;
		href: string;
		label: string;
	};
}

const metaModules = import.meta.glob<Artigo>('./*/meta.json', { eager: true, import: 'default' });
const contentModules = import.meta.glob<{ default: Component }>('./*/*.md');

export const artigos: Artigo[] = Object.values(metaModules);

export function getArtigo(slug: string): Artigo | undefined {
	return artigos.find((a) => a.slug === slug);
}

export async function getArtigoContent(slug: string): Promise<Component | undefined> {
	const path = `./${slug}/${slug}.md`;
	const loader = contentModules[path];
	if (!loader) return undefined;
	const mod = await loader();
	return mod.default;
}
