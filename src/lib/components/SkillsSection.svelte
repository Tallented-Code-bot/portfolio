<script lang="ts">
	import type { SkillGroup } from '$lib/types';

	export let skills: SkillGroup[];
</script>

<section id="skills" class="skills">
	<div class="container">
		<h2 class="section-title">Skills & Technologies</h2>
		<div class="skills-grid">
			{#each skills as skillGroup (skillGroup.category)}
				<div class="skill-category">
					<h3 class="skill-category-title">{skillGroup.category}</h3>
					<div class="skill-items">
						{#each skillGroup.items as skill (skill)}
							<span class="skill-item">{skill}</span>
						{/each}
					</div>
				</div>
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

	.skills {
		padding: 5rem 0;
	}

	.section-title {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 3rem;
		color: var(--color-text-primary);
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.skill-category {
		background: var(--color-surface);
		padding: 2rem;
		border-radius: var(--border-radius-xl);
		box-shadow: var(--shadow-md);
		border: 1px solid var(--color-border-light);
		transition: all var(--transition-normal);
	}

	.skill-category:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--color-primary-light);
	}

	.skill-category-title {
		font-size: 1.3rem;
		margin-bottom: 1.25rem;
		color: var(--color-primary);
		border-bottom: 3px solid var(--color-primary);
		padding-bottom: 0.75rem;
		font-weight: 700;
	}

	.skill-items {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.skill-item {
		background: var(--color-skill-bg);
		color: var(--color-skill-text);
		padding: 8px 16px;
		border-radius: var(--border-radius-full);
		font-size: 0.9rem;
		font-weight: 600;
		transition: all var(--transition-fast);
		cursor: default;
		border: 1px solid transparent;
	}

	.skill-item:hover {
		background: var(--color-skill-hover-bg);
		transform: scale(1.05);
		border-color: var(--color-primary-light);
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.section-title {
			font-size: 2rem;
		}

		.skills-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
