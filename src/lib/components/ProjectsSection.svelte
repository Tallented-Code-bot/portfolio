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
		background: #f9fafb;
	}

	.section-title {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 3rem;
		color: #1f2937;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.project-card {
		background: white;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.project-content-link {
		display: block;
		text-decoration: none;
		color: inherit;
	}

	.project-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
	}

	.project-image {
		position: relative;
		height: 200px;
		overflow: hidden;
		background: #e5e7eb;
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
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.project-card:hover .project-overlay {
		opacity: 1;
	}

	.project-links {
		display: flex;
		gap: 1rem;
	}

	.project-link {
		color: white;
		text-decoration: none;
		padding: 8px 16px;
		border: 1px solid white;
		border-radius: 4px;
		transition: all 0.3s ease;
	}

	.project-link:hover {
		background: white;
		color: #333;
	}

	.project-content {
		padding: 1.5rem;
	}

	.project-title {
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
		color: #1f2937;
	}

	.project-description {
		color: #6b7280;
		margin-bottom: 1rem;
		line-height: 1.6;
	}

	.project-technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tech-tag {
		background: #e0e7ff;
		color: #3730a3;
		padding: 4px 8px;
		border-radius: 12px;
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
