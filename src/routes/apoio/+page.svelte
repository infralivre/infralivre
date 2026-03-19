<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import PageHeader from '$lib/components/shared/PageHeader.svelte';
	import GitHubCta from '$lib/components/shared/GitHubCta.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
</script>

<svelte:head>
	<title>Como Apoiar — InfraLivre</title>
	<meta name="description" content="Saiba como apoiar o InfraLivre na construção de um marco jurídico adequado para o software livre no Brasil." />
	<meta property="og:title" content="Como Apoiar — InfraLivre" />
	<meta property="og:description" content="Saiba como apoiar a construção de um marco jurídico adequado para o software livre no Brasil." />
</svelte:head>

<Section>
	<PageHeader
		title="Como Apoiar"
		description="O InfraLivre é uma iniciativa aberta que depende da participação ativa da comunidade. Apoiar o projeto não exige conhecimento técnico ou jurídico — grande parte do impacto vem da forma como o tema é discutido e compartilhado."
	/>
	<img
		src="/images/9a6pcb9a6pcb9a6p.webp"
		alt="Ilustração mostrando diversas formas de apoiar o InfraLivre: debater sobre insegurança jurídica, compartilhar links diretos, seguir o projeto, manter foco construtivo, construir pontes sem polarização e contribuir via issues e pull requests."
		class="mt-8 w-full rounded-lg border border-border"
		width="1456"
		height="816"
		loading="eager"
	/>
</Section>

<Section class="pt-0">
	<h2 class="text-2xl font-bold tracking-tight">7 formas de contribuir</h2>
	<div class="mt-8 grid gap-6 sm:grid-cols-2">
		<Card.Root>
			<Card.Header>
				<Card.Title>1. Fale sobre o tema</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm text-muted-foreground">
					Traga o assunto para o debate público. Comente sobre a importância do software
					livre, levante a questão da insegurança jurídica e explique como isso afeta
					empresas, desenvolvedores e o país.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>2. Compartilhe com base</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm text-muted-foreground">
					Ao discutir o tema, utilize conteúdos do próprio projeto: manifesto, textos
					explicativos, análises jurídicas. Compartilhe links diretos — isso fortalece
					a argumentação e evita distorções.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>3. Acompanhe o projeto</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm text-muted-foreground">
					Siga e compartilhe conteúdos dos responsáveis pela iniciativa. Isso amplia
					o alcance das publicações e consolida uma base inicial de apoio.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>4. Mantenha o foco na proposta</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm text-muted-foreground">
					Não baseie sua argumentação em oposição direta a leis ou instituições específicas.
					Posicionamentos como "sou contra tal lei" reduzem o alcance e dificultam o
					consenso. A proposta é construtiva, não reativa.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>5. Direcione a discussão</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm text-muted-foreground">
					O foco deve ser a necessidade de um marco jurídico adequado, a especificidade
					do software livre e os riscos da regulação genérica. Ao estabelecer um marco
					adequado, distorções existentes tendem a ser corrigidas naturalmente.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>6. Construa pontes</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm text-muted-foreground">
					O tema não é ideológico — impacta empresas, governos, desenvolvedores e a
					sociedade. Evite polarização, use linguagem objetiva e foque em problemas
					concretos e soluções viáveis.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root class="sm:col-span-2">
			<Card.Header>
				<Card.Title>7. Contribua diretamente</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm text-muted-foreground">
					Sugestões, revisões e propostas podem ser feitas via issues e pull requests
					nos repositórios do projeto. Não é necessário ser técnico — contribuições de
					redação, revisão e organização são igualmente valiosas.
				</p>
			</Card.Content>
		</Card.Root>
	</div>
</Section>

<Section class="pt-0">
	<Separator class="mb-12" />
	<div class="max-w-2xl">
		<h2 class="text-2xl font-bold tracking-tight">Objetivo coletivo</h2>
		<p class="mt-4 text-muted-foreground">
			O InfraLivre busca segurança jurídica, previsibilidade e sustentabilidade da
			infraestrutura digital. A forma como o projeto é apresentado publicamente influencia
			diretamente sua capacidade de avançar.
		</p>
		<p class="mt-4 text-muted-foreground">
			Apoiar com responsabilidade é parte essencial desse processo.
		</p>
	</div>
</Section>

<GitHubCta />
