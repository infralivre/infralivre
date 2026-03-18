<script lang="ts">
	import Container from './Container.svelte';
</script>

<footer class="border-t border-border">
	<Container>
		<div class="flex flex-col items-center gap-2 py-8 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
			<p>&copy; {new Date().getFullYear()} InfraLivre. Todos os direitos reservados.</p>
			<p>Software livre para um Brasil livre.</p>
		</div>
	</Container>
</footer>
