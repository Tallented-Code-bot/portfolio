<script lang="ts">
	export let title: string;
	export let github: string = '';
	export let demo: string = '';
</script>

<li class="project-item">
	<h3 class="project-title">
		{#if demo}
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={demo} target="_blank" rel="noopener noreferrer">{title}</a>
		{:else}
			{title}
		{/if}
	</h3>
	<div class="project-description"><slot /></div>
	<div class="project-links">
		{#if github}
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={github} target="_blank" rel="noopener noreferrer">See more on GitHub</a>
		{/if}
		{#if demo}
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={demo} target="_blank" rel="noopener noreferrer">See a demo</a>
		{/if}
	</div>
</li>

<style>
	.project-item {
		margin-bottom: 2rem;
		padding-left: 1rem;
		border-left: 2px solid var(--color-primary);
	}

	.project-title {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
	}

	.project-title a {
		text-decoration: none;
		color: var(--color-primary);
	}

	.project-title a:hover {
		text-decoration: underline;
	}

	.project-description {
		color: var(--color-text-muted);
		line-height: 1.6;
		margin-bottom: 0.5rem;
	}

	.project-description :global(p) {
		margin: 0 0 0.75rem 0;
	}

	.project-description :global(p:last-child) {
		margin-bottom: 0;
	}

	.project-description :global(ul),
	.project-description :global(ol) {
		margin: 0.25rem 0 0.75rem 1.25rem;
		padding: 0;
	}

	.project-description :global(li) {
		margin: 0.15rem 0;
	}

	.project-links {
		display: flex;
		gap: 1rem;
		font-size: 0.9rem;
	}

	.project-links a {
		color: var(--color-primary);
		text-decoration: none;
	}

	.project-links a:hover {
		text-decoration: underline;
	}
</style>
