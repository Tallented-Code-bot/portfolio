<script lang="ts">
	import type { Project } from '$lib/types';

	export let projects: Project[];

	// Group projects by year and sort years descending
	const groupedProjects = projects.reduce(
		(acc, project) => {
			if (!acc[project.year]) {
				acc[project.year] = [];
			}
			acc[project.year].push(project);
			return acc;
		},
		{} as Record<number, Project[]>
	);

	const sortedYears = Object.keys(groupedProjects)
		.map(Number)
		.sort((a, b) => b - a);
</script>

<section id="projects" class="projects">
	<div class="container">
		{#each sortedYears as year}
			<div class="year-section">
				<h2 class="year-title">{year}</h2>
				<ul class="projects-list">
					{#each groupedProjects[year] as project (project.id)}
						<li class="project-item">
							<h3 class="project-title">
								{#if project.demo}
									<a href={project.demo} target="_blank" rel="noopener noreferrer"
										>{project.title}</a
									>
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
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.projects {
		padding: 2rem 0;
	}

	.year-section {
		margin-bottom: 3rem;
	}

	.year-title {
		font-size: 2rem;
		margin-bottom: 1rem;
		color: var(--color-text-primary);
		border-bottom: 1px solid var(--color-border-light);
		padding-bottom: 0.5rem;
	}

	.projects-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

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

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.container {
			padding: 0 15px;
		}

		.year-title {
			font-size: 1.5rem;
		}
	}
</style>
