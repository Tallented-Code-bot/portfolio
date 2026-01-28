<script lang="ts">
	import type { Education } from '$lib/types';

	export let education: Education[];
</script>

<section id="education" class="education">
	<div class="container">
		<h2 class="section-title">Education</h2>
		<div class="education-grid">
			{#each education as edu (edu.id)}
				<article class="education-card">
					<div class="education-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 14l9-5-9-5-9 5 9 5z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
							/>
						</svg>
					</div>
					<div class="education-content">
						<h3 class="education-institution">{edu.institution}</h3>
						<p class="education-degree">{edu.degree}</p>
						{#if edu.field}
							<p class="education-field">{edu.field}</p>
						{/if}
						<p class="education-date">
							{edu.startDate} - {edu.endDate}
						</p>
						{#if edu.location}
							<p class="education-location">{edu.location}</p>
						{/if}

						{#if edu.coursework && edu.coursework.length > 0}
							<div class="coursework">
								<h4 class="subsection-title">Relevant Coursework:</h4>
								<ul class="coursework-list">
									{#each edu.coursework as course}
										<li>{course}</li>
									{/each}
								</ul>
							</div>
						{/if}

						{#if edu.achievements && edu.achievements.length > 0}
							<div class="achievements">
								<h4 class="subsection-title">Achievements:</h4>
								<ul class="achievements-list">
									{#each edu.achievements as achievement}
										<li>{achievement}</li>
									{/each}
								</ul>
							</div>
						{/if}

						{#if edu.gpa}
							<p class="education-gpa">GPA: {edu.gpa}</p>
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

	.education {
		padding: 5rem 0;
		background: var(--color-bg-secondary);
	}

	.section-title {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 3rem;
		color: var(--color-text-primary);
	}

	.education-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		max-width: 1000px;
		margin: 0 auto;
	}

	.education-card {
		background: var(--color-surface);
		border-radius: var(--border-radius-xl);
		padding: 2rem;
		box-shadow: var(--shadow-md);
		border: 1px solid var(--color-border-light);
		transition: all var(--transition-normal);
		display: flex;
		gap: 1.5rem;
	}

	.education-card:hover {
		box-shadow: var(--shadow-lg);
		transform: translateY(-5px);
		border-color: var(--color-primary-light);
	}

	.education-icon {
		flex-shrink: 0;
		width: 60px;
		height: 60px;
		background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
		border-radius: var(--border-radius-lg);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-text-white);
	}

	.education-icon svg {
		width: 32px;
		height: 32px;
	}

	.education-content {
		flex: 1;
	}

	.education-institution {
		font-size: 1.4rem;
		color: var(--color-primary);
		margin-bottom: 0.5rem;
		font-weight: 700;
	}

	.education-degree {
		font-size: 1.1rem;
		color: var(--color-text-secondary);
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	.education-field {
		font-size: 1rem;
		color: var(--color-text-muted);
		margin-bottom: 0.5rem;
	}

	.education-date {
		font-size: 0.95rem;
		color: var(--color-text-muted);
		margin-bottom: 0.25rem;
	}

	.education-location {
		font-size: 0.9rem;
		color: var(--color-text-light);
		margin-bottom: 1rem;
	}

	.education-gpa {
		font-size: 0.95rem;
		color: var(--color-text-secondary);
		font-weight: 600;
		margin-top: 1rem;
	}

	.coursework,
	.achievements {
		margin-top: 1.25rem;
	}

	.subsection-title {
		font-size: 0.95rem;
		color: var(--color-text-primary);
		font-weight: 700;
		margin-bottom: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.coursework-list,
	.achievements-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.coursework-list li,
	.achievements-list li {
		position: relative;
		padding-left: 1.5rem;
		margin-bottom: 0.5rem;
		color: var(--color-text-secondary);
		line-height: 1.6;
		font-size: 0.95rem;
	}

	.coursework-list li::before {
		content: '•';
		position: absolute;
		left: 0.5rem;
		color: var(--color-secondary);
		font-weight: bold;
		font-size: 1.2rem;
	}

	.achievements-list li::before {
		content: '★';
		position: absolute;
		left: 0.5rem;
		color: var(--color-accent);
		font-weight: bold;
		font-size: 1rem;
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.section-title {
			font-size: 2rem;
		}

		.education-grid {
			grid-template-columns: 1fr;
		}

		.education-card {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.education-content {
			text-align: left;
		}

		.education-icon {
			margin-bottom: 0.5rem;
		}
	}

	@media (max-width: 480px) {
		.education-card {
			padding: 1.5rem;
		}

		.education-institution {
			font-size: 1.2rem;
		}

		.education-degree {
			font-size: 1rem;
		}
	}
</style>
