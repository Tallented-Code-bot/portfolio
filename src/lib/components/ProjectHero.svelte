<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let demoUrl: string = '';
	export let githubUrl: string = '';
	export let breadcrumbProject: string = title;
</script>

<div class="hero-section">
	<div class="container">
		<div class="breadcrumb">
			<a href="/">Home</a>
			<span>/</span>
			<a href="/#projects">Projects</a>
			<span>/</span>
			<span>{breadcrumbProject}</span>
		</div>
		<h1 class="project-title">{title}</h1>
		<p class="project-subtitle">{subtitle}</p>
		<div class="project-links">
			{#if demoUrl}
				<a
					href={demoUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-primary"
				>
					Live Demo
				</a>
			{/if}
			{#if githubUrl}
				<a
					href={githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-secondary"
				>
					View Code
				</a>
			{/if}
		</div>
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.hero-section {
		background: var(--gradient-primary);
		color: var(--color-text-white);
		padding: 4rem 0;
		text-align: center;
	}

	.breadcrumb {
		margin-bottom: 2rem;
		opacity: 0.9;
	}

	.breadcrumb a {
		color: var(--color-text-white);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.breadcrumb span {
		margin: 0 0.5rem;
		opacity: 0.7;
	}

	.project-title {
		font-size: 3rem;
		margin-bottom: 1rem;
		font-weight: bold;
	}

	.project-subtitle {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		opacity: 0.9;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.project-links {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn {
		display: inline-block;
		padding: 12px 24px;
		border-radius: var(--border-radius-md);
		text-decoration: none;
		font-weight: 500;
		transition: all var(--transition-normal);
		border: 2px solid transparent;
	}

	.btn-primary {
		background: var(--color-primary);
		color: var(--color-text-white);
		border-color: var(--color-primary);
	}

	.btn-primary:hover {
		background: var(--color-primary-hover);
		border-color: var(--color-primary-hover);
	}

	.btn-secondary {
		background: transparent;
		color: var(--color-text-white);
		border-color: var(--color-text-white);
	}

	.btn-secondary:hover {
		background: var(--color-text-white);
		color: var(--color-primary);
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.project-title {
			font-size: 2rem;
		}

		.project-links {
			flex-direction: column;
			align-items: center;
		}

		.container {
			padding: 0 15px;
		}
	}
</style>
