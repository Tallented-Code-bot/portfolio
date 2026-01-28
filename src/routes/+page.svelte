<script lang="ts">
	import ProjectItem from '$lib/components/ProjectItem.svelte';
</script>

<svelte:head>
	<title>Calvin Tallent</title>
	<meta name="description" content="Computer Science Student" />
</svelte:head>

<main>
	<section id="projects" class="projects">
		<div class="container">
			<div class="year-section">
				<h2 class="year-title">2024</h2>
				<ul class="projects-list">
					<ProjectItem
						title="Autonomous Robot Control System"
						github="https://github.com/calvintallent"
						demo=""
					>
						Advanced robot control system with precision position tracking (±1 inch accuracy) using
						sensor fusion, vector path following, and asynchronous command execution for parallel
						operations.
					</ProjectItem>
					<ProjectItem
						title="Scratch to Rust Compiler"
						github="https://github.com/calvintallent"
						demo=""
					>
						A compiler that fetches Scratch projects via API and transpiles them to Rust, supporting
						concurrent script execution and implementing a Rust version of the Scratch standard
						library.
					</ProjectItem>
				</ul>
			</div>
			<div class="year-section">
				<h2 class="year-title">2023</h2>
				<ul class="projects-list">
					<ProjectItem
						title="Planetarium Space Game"
						github="https://github.com/calvintallent"
						demo=""
					>
						Immersive space game built for Columbia Basin College's planetarium system, optimized to
						handle the extreme resolution requirements of planetarium displays.
					</ProjectItem>
					<ProjectItem
						title="Procedural Image Generator"
						github="https://github.com/calvintallent"
						demo=""
					>
						High-performance procedural image generator using Perlin and other noise functions,
						optimized to handle large image generation efficiently.
					</ProjectItem>
					<ProjectItem
						title="Image to Fourier Series Converter"
						github="https://github.com/calvintallent"
						demo=""
					>
						Converts SVG images into Fourier Series-based functions that recreate the image when
						graphed, bridging visual art with mathematical representation.
					</ProjectItem>
				</ul>
			</div>
		</div>
	</section>
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 20px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.6;
	}

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

	/* Mobile Responsive */
	@media (max-width: 768px) {
		main {
			padding: 1rem 15px;
		}

		.container {
			padding: 0 15px;
		}

		.year-title {
			font-size: 1.5rem;
		}
	}
</style>
