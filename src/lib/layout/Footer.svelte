<script lang="ts">
	import Container from './Container.svelte';
	import Github from '@lucide/svelte/icons/github';
</script>

<footer class="border-t border-border">
	<Container>
		<div class="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Brand -->
			<div>
				<a href="/" class="text-base font-semibold tracking-tight">InfraLivre</a>
				<p class="mt-2 text-sm text-muted-foreground">
					Infraestrutura digital Livre, Aberta e Segura
				</p>
			</div>

			<!-- Nav -->
			<div>
				<h3 class="text-sm font-medium">Navegação</h3>
				<nav class="mt-2 flex flex-col gap-1.5">
					<a href="/software-livre" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Software Livre</a>
					<a href="/manifesto" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Manifesto</a>
					<a href="/problema" class="text-sm text-muted-foreground transition-colors hover:text-foreground">O Problema</a>
					<a href="/proposta" class="text-sm text-muted-foreground transition-colors hover:text-foreground">A Proposta</a>
					<a href="/apoio" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Como Apoiar</a>
				</nav>
			</div>

			<!-- Links -->
			<div>
				<h3 class="text-sm font-medium">Projeto</h3>
				<nav class="mt-2 flex flex-col gap-1.5">
					<a
						href="https://github.com/infralivre/infralivre"
						target="_blank"
						rel="noopener"
						class="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
					>
						<Github class="size-3.5" />
						GitHub
					</a>
				</nav>
			</div>
		</div>

		<div class="border-t border-border py-6 text-center text-xs text-muted-foreground">
			<p>&copy; {new Date().getFullYear()} InfraLivre. Todos os direitos reservados.</p>
		</div>
	</Container>
</footer>
