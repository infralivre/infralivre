<script lang="ts">
	import Hero from '$lib/components/shared/Hero.svelte';
	import Section from '$lib/components/shared/Section.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<svelte:head>
	<title>InfraLivre — Infraestrutura digital Livre, Aberta e Segura</title>
	<meta name="description" content="InfraLivre: iniciativa pela construção de um marco jurídico adequado para o software livre e de código aberto no Brasil." />
	<meta property="og:title" content="InfraLivre — Infraestrutura digital Livre, Aberta e Segura" />
	<meta property="og:description" content="Iniciativa pela construção de um marco jurídico adequado para o software livre e de código aberto no Brasil." />
</svelte:head>

<Hero
	title="InfraLivre"
	subtitle="Por uma Infraestrutura digital Livre, Aberta e Segura: Defendemos a criação de um marco jurídico adequado para o software livre e de código aberto no Brasil."
>
	<Button href="/manifesto" variant="default" size="lg">Leia o Manifesto</Button>
	<Button href="/apoio" variant="outline" size="lg">Como Apoiar</Button>

	<img
	src="/images/01.webp"
	alt="Ilustração mostrando diversas pessoas colaborando em projetos de software livre e de código aberto, representando a comunidade global de desenvolvedores e usuários que contribuem para o ecossistema do software livre."
	class="mt-8 w-full rounded-lg border border-border"
	width="1456"
	height="816"
	loading="eager"
/>
</Hero>


<Section id="software-livre" class="border-t border-border">
	<div class="max-w-2xl">
		<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Software Livre</h2>
		<p class="mt-4 text-muted-foreground">
			Software livre e de código aberto é todo software cujo código-fonte pode ser
			livremente acessado, estudado, modificado e redistribuído. Ele sustenta mais de 90%
			dos servidores web, a base do Android, a computação em nuvem e os principais
			frameworks de inteligência artificial.
		</p>
		<p class="mt-4 text-muted-foreground">
			Mesmo sem perceber, você usa software livre todos os dias — na internet, no celular,
			no trabalho. Ele não é apenas uma alternativa técnica: é um modelo de produção de
			conhecimento que garante independência tecnológica, segurança e inovação.
		</p>
		<div class="mt-6">
			<Button href="/software-livre" variant="outline">Saiba mais sobre software livre →</Button>
		</div>
	</div>
</Section>

<Section id="problema" class="border-t border-border">
	<div class="max-w-2xl">
		<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">O Problema</h2>
		<p class="mt-4 text-muted-foreground">
			O software livre sustenta grande parte da infraestrutura digital moderna — governos,
			empresas, serviços essenciais. Mas o ordenamento jurídico atual foi construído para
			empresas centralizadas, com controle direto sobre seus produtos.
		</p>
		<p class="mt-4 text-muted-foreground">
			Quando regulações digitais são aplicadas ao software livre sem distinção, mantenedores
			e contribuidores ficam expostos a riscos jurídicos que não correspondem à sua atuação real.
			Não se trata de resistência à regulação — trata-se de inadequação.
		</p>
		<div class="mt-6">
			<Button href="/problema" variant="outline">Entenda o problema →</Button>
		</div>
	</div>
</Section>

<Section id="pilares" class="border-t border-border">
	<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Por que isso importa</h2>
	<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		<Card.Root>
			<Card.Header>
				<Card.Title>Segurança Jurídica</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm text-muted-foreground">
					Desenvolvedores e mantenedores precisam de limites claros de responsabilidade.
					A regulação deve incidir onde há efetiva capacidade de controle.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Infraestrutura Digital</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm text-muted-foreground">
					O software livre é base de infraestruturas críticas, serviços financeiros
					e sistemas governamentais. Em muitos casos, não existem substitutos viáveis.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Sustentabilidade</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm text-muted-foreground">
					Sem um marco jurídico adequado, o risco é a retração da colaboração,
					o abandono de projetos e a fragilização da infraestrutura digital
					que sustenta a economia.
				</p>
			</Card.Content>
		</Card.Root>
	</div>
</Section>

<CallToAction
	title="Uma proposta construtiva"
	description="O InfraLivre não propõe ausência de regras. Propõe regras adequadas — que reconheçam a realidade técnica do software livre."
	href="/proposta"
	label="Conheça a proposta"
	class="border-t border-border"
/>
