<script lang="ts">
	import type { Project } from '$lib/types';

	export let project: Project;
</script>

<li class="project-item">
	<h3 class="project-title">
		{#if project.demo}
			<a href={project.demo} target="_blank" rel="noopener noreferrer">{project.title}</a>
		{:else}
			{project.title}
		{/if}
	</h3>
	<p class="project-description">{project.description}</p>
	<div class="project-links">
		{#if project.github}
			<a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
		{/if}
		{#if project.demo}
			<a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
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
