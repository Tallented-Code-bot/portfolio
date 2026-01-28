<script lang="ts">
	export let title: string;
	export let description: string;
	export let github: string = '';
	export let demo: string = '';
</script>

<li class="project-item">
	<h3 class="project-title">
		{#if demo}
			<a href={demo} target="_blank" rel="noopener noreferrer">{title}</a>
		{:else}
			{title}
		{/if}
	</h3>
	<p class="project-description">{description}</p>
	<div class="project-links">
		{#if github}
			<a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
		{/if}
		{#if demo}
			<a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
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
