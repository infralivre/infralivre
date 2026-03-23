import type { Component } from 'svelte';

export interface Article {
	slug: string;
	title: string;
	description: string;
	ogDescription: string;
	image: string;
	imageAlt: string;
	category: string;
	infrastructureType: "software" | "service" | "network" | "hardware";
	authors: { name: string; photo?: string }[];
	readTime: string;
	cta: {
		title: string;
		description: string;
		href: string;
		label: string;
	};
}

const metaModules = import.meta.glob<Article>('./*/meta.json', { eager: true, import: 'default' });
const contentModules = import.meta.glob<{ default: Component }>('./*/*.md');

export const articles: Article[] = Object.values(metaModules);

export function getArticle(slug: string): Article | undefined {
	return articles.find((a) => a.slug === slug);
}

export async function getArticleContent(slug: string): Promise<Component | undefined> {
	const path = `./${slug}/${slug}.md`;
	const loader = contentModules[path];
	if (!loader) return undefined;
	const mod = await loader();
	return mod.default;
}
