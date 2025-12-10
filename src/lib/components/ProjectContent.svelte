<script lang="ts">
	export let imageSrc: string;
	export let imageAlt: string;
</script>

<div class="project-detail">
	<slot name="hero" />

	<div class="content-section">
		<div class="container">
			<div class="project-image">
				<img src={imageSrc} alt={imageAlt} loading="lazy" />
			</div>

			<div class="project-content">
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.project-detail {
		margin-top: 80px;
	}

	.content-section {
		padding: 4rem 0;
	}

	.project-image {
		margin-bottom: 4rem;
		text-align: center;
	}

	.project-image img {
		max-width: 100%;
		height: auto;
		border-radius: var(--border-radius-xl);
		box-shadow: var(--shadow-xl);
	}

	.project-content :global(section) {
		margin-bottom: 4rem;
	}

	.project-content :global(h2) {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: var(--color-text-primary);
		border-bottom: 3px solid var(--color-primary);
		padding-bottom: 0.5rem;
	}

	.project-content :global(h3) {
		font-size: 1.3rem;
		margin-bottom: 1rem;
		color: var(--color-text-secondary);
	}

	.project-content :global(p) {
		line-height: 1.7;
		color: var(--color-text-muted);
		margin-bottom: 1rem;
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.container {
			padding: 0 15px;
		}
	}
</style>
