<script lang="ts">
	export let features: Array<{
		icon: string;
		title: string;
		description: string;
	}>;
</script>

<section class="features">
	<h2>Key Features</h2>
	<div class="features-grid">
		{#each features as feature}
			<div class="feature-item">
				<div class="feature-icon">{feature.icon}</div>
				<h3>{feature.title}</h3>
				<p>{feature.description}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.features {
		margin-bottom: 4rem;
	}

	.features h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: var(--color-text-primary);
		border-bottom: 3px solid var(--color-primary);
		padding-bottom: 0.5rem;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.feature-item {
		background: var(--color-surface);
		padding: 2rem;
		border-radius: var(--border-radius-xl);
		box-shadow: var(--shadow-md);
		border: 1px solid var(--color-border-light);
		text-align: center;
		transition: transform var(--transition-normal);
	}

	.feature-item:hover {
		transform: translateY(-5px);
	}

	.feature-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.feature-item h3 {
		color: var(--color-text-primary);
		margin-bottom: 0.5rem;
	}

	.feature-item p {
		font-size: 0.9rem;
		color: var(--color-text-muted);
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.features-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
