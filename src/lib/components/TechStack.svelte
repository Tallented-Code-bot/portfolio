<script lang="ts">
	export let techStack: Array<{
		category: string;
		items: string[];
	}>;
</script>

<section class="tech-stack">
	<h2>Technologies Used</h2>
	<div class="tech-grid">
		{#each techStack as category}
			<div class="tech-category">
				<h3>{category.category}</h3>
				<ul>
					{#each category.items as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<style>
	.tech-stack {
		margin-bottom: 4rem;
	}

	.tech-stack h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: var(--color-text-primary);
		border-bottom: 3px solid var(--color-primary);
		padding-bottom: 0.5rem;
	}

	.tech-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.tech-category {
		background: var(--color-bg-secondary);
		padding: 1.5rem;
		border-radius: var(--border-radius-lg);
		border-left: 4px solid var(--color-primary);
	}

	.tech-category h3 {
		color: var(--color-primary);
		margin-bottom: 1rem;
	}

	.tech-category ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.tech-category li {
		padding: 0.3rem 0;
		color: var(--color-text-muted);
		position: relative;
		padding-left: 1rem;
	}

	.tech-category li:before {
		content: '•';
		color: var(--color-primary);
		position: absolute;
		left: 0;
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.tech-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
