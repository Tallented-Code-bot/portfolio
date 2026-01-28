<script lang="ts">
	import type { Experience } from '$lib/types';

	export let experience: Experience[];
</script>

<section id="experience" class="experience">
	<div class="container">
		<h2 class="section-title">Experience</h2>
		<div class="timeline">
			{#each experience as exp (exp.id)}
				<article class="timeline-item">
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<div class="experience-header">
							<div class="experience-title-group">
								<h3 class="experience-title">{exp.title}</h3>
								<p class="experience-organization">{exp.organization}</p>
							</div>
							<div class="experience-date">
								{exp.startDate} - {exp.endDate}
								{#if exp.current}
									<span class="current-badge">Current</span>
								{/if}
							</div>
						</div>
						<p class="experience-description">{exp.description}</p>
						<ul class="achievements-list">
							{#each exp.achievements as achievement, i (i)}
								<li>{achievement}</li>
							{/each}
						</ul>
						{#if exp.technologies && exp.technologies.length > 0}
							<div class="technologies">
								{#each exp.technologies as tech (tech)}
									<span class="tech-badge">{tech}</span>
								{/each}
							</div>
						{/if}
					</div>
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

	.experience {
		padding: 5rem 0;
		background: var(--color-bg-primary);
	}

	.section-title {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 4rem;
		color: var(--color-text-primary);
	}

	.timeline {
		position: relative;
		max-width: 900px;
		margin: 0 auto;
		padding-left: 40px;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 15px;
		top: 0;
		bottom: 0;
		width: 2px;
		background: var(--color-border-medium);
	}

	.timeline-item {
		position: relative;
		margin-bottom: 3rem;
		padding-bottom: 2rem;
	}

	.timeline-item:last-child {
		margin-bottom: 0;
		padding-bottom: 0;
	}

	.timeline-marker {
		position: absolute;
		left: -33px;
		top: 8px;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: var(--color-primary);
		border: 3px solid var(--color-bg-primary);
		box-shadow: 0 0 0 3px var(--color-primary-light);
		z-index: 1;
	}

	.timeline-content {
		background: var(--color-surface);
		border-radius: var(--border-radius-lg);
		padding: 2rem;
		box-shadow: var(--shadow-md);
		border: 1px solid var(--color-border-light);
		transition: all var(--transition-normal);
	}

	.timeline-content:hover {
		box-shadow: var(--shadow-lg);
		transform: translateX(5px);
		border-color: var(--color-primary-light);
	}

	.experience-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 1rem;
		flex-wrap: wrap;
	}

	.experience-title-group {
		flex: 1;
		min-width: 200px;
	}

	.experience-title {
		font-size: 1.4rem;
		color: var(--color-primary);
		margin-bottom: 0.25rem;
		font-weight: 700;
	}

	.experience-organization {
		font-size: 1.1rem;
		color: var(--color-text-secondary);
		font-weight: 600;
	}

	.experience-date {
		font-size: 0.95rem;
		color: var(--color-text-muted);
		font-weight: 500;
		white-space: nowrap;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.current-badge {
		background: var(--color-success);
		color: var(--color-text-white);
		padding: 3px 10px;
		border-radius: var(--border-radius-full);
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.experience-description {
		color: var(--color-text-secondary);
		line-height: 1.7;
		margin-bottom: 1rem;
		font-size: 1rem;
	}

	.achievements-list {
		list-style: none;
		margin: 1rem 0;
		padding: 0;
	}

	.achievements-list li {
		position: relative;
		padding-left: 1.5rem;
		margin-bottom: 0.75rem;
		color: var(--color-text-secondary);
		line-height: 1.6;
	}

	.achievements-list li::before {
		content: '▸';
		position: absolute;
		left: 0;
		color: var(--color-primary);
		font-weight: bold;
		font-size: 1.2rem;
	}

	.technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1.25rem;
		padding-top: 1rem;
		border-top: 1px solid var(--color-border-light);
	}

	.tech-badge {
		background: var(--color-tech-bg);
		color: var(--color-tech-text);
		padding: 5px 12px;
		border-radius: var(--border-radius-full);
		font-size: 0.85rem;
		font-weight: 600;
		transition: all var(--transition-fast);
	}

	.tech-badge:hover {
		background: var(--color-tech-hover-bg);
		transform: scale(1.05);
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.section-title {
			font-size: 2rem;
		}

		.timeline {
			padding-left: 30px;
		}

		.timeline::before {
			left: 10px;
		}

		.timeline-marker {
			left: -28px;
		}

		.timeline-content {
			padding: 1.5rem;
		}

		.experience-header {
			flex-direction: column;
		}

		.experience-date {
			white-space: normal;
		}

		.experience-title {
			font-size: 1.2rem;
		}

		.experience-organization {
			font-size: 1rem;
		}
	}

	@media (max-width: 480px) {
		.timeline {
			padding-left: 20px;
		}

		.timeline::before {
			left: 5px;
		}

		.timeline-marker {
			left: -23px;
			width: 12px;
			height: 12px;
		}

		.timeline-content {
			padding: 1.25rem;
		}
	}
</style>
