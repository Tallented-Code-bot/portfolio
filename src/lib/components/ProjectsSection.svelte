<script lang="ts">
	import type { Project } from '$lib/types';

	export let projects: Project[];
</script>

<section id="projects" class="projects">
	<div class="container">
		<h2 class="section-title">Featured Projects</h2>
		<div class="projects-grid">
			{#each projects as project (project.id)}
				<article class="project-card">
					<div class="project-image">
						<img src={project.image} alt={project.title} loading="lazy" />
						<div class="project-overlay">
							<div class="project-links">
								<a href="/projects/{project.slug}" class="project-link">View Details</a>
								{#if project.demo}
									<a
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										class="project-link"
									>
										Live Demo
									</a>
								{/if}
								{#if project.github}
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										class="project-link"
									>
										GitHub
									</a>
								{/if}
							</div>
						</div>
					</div>
					<a href="/projects/{project.slug}" class="project-content-link">
						<div class="project-content">
							<h3 class="project-title">{project.title}</h3>
							<p class="project-description">{project.description}</p>
							<div class="project-technologies">
								{#each project.technologies as tech (tech)}
									<span class="tech-tag">{tech}</span>
								{/each}
							</div>
						</div>
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.projects {
		background: var(--color-bg-secondary);
	}

	.section-title {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 3rem;
		color: var(--color-text-primary);
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.project-card {
		background: var(--color-surface);
		border-radius: var(--border-radius-xl);
		overflow: hidden;
		box-shadow: var(--shadow-md);
		transition:
			transform var(--transition-normal),
			box-shadow var(--transition-normal);
	}

	.project-content-link {
		display: block;
		text-decoration: none;
		color: inherit;
	}

	.project-card:hover {
		transform: translateY(-5px);
		box-shadow: var(--shadow-lg);
	}

	.project-image {
		position: relative;
		height: 200px;
		overflow: hidden;
		background: var(--color-border-light);
	}

	.project-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.project-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: var(--color-bg-overlay);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity var(--transition-normal);
	}

	.project-card:hover .project-overlay {
		opacity: 1;
	}

	.project-links {
		display: flex;
		gap: 1rem;
	}

	.project-link {
		color: var(--color-text-white);
		text-decoration: none;
		padding: 8px 16px;
		border: 1px solid var(--color-text-white);
		border-radius: var(--border-radius-sm);
		transition: all var(--transition-normal);
	}

	.project-link:hover {
		background: var(--color-text-white);
		color: var(--color-text-primary);
	}

	.project-content {
		padding: 1.5rem;
	}

	.project-title {
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
		color: var(--color-text-primary);
	}

	.project-description {
		color: var(--color-text-muted);
		margin-bottom: 1rem;
		line-height: 1.6;
	}

	.project-technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tech-tag {
		background: var(--color-tech-bg);
		color: var(--color-tech-text);
		padding: 4px 8px;
		border-radius: var(--border-radius-xl);
		font-size: 0.8rem;
		font-weight: 500;
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.section-title {
			font-size: 2rem;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
