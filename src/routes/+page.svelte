<script lang="ts">
	import ProjectItem from '$lib/components/ProjectItem.svelte';
	import type { Project } from '$lib/types';

	// Projects data inline
	const projects: Project[] = [
		{
			id: 1,
			title: 'Autonomous Robot Control System',
			description:
				'Advanced robot control system with precision position tracking (±1 inch accuracy) using sensor fusion, vector path following, and asynchronous command execution for parallel operations.',
			technologies: ['Java', 'Kotlin', 'Robotics', 'Sensor Fusion', 'Path Planning'],
			image: '/projects/robot.jpg',
			github: 'https://github.com/calvintallent',
			demo: '',
			slug: 'robot-control',
			year: 2024
		},
		{
			id: 2,
			title: 'Scratch to Rust Compiler',
			description:
				'A compiler that fetches Scratch projects via API and transpiles them to Rust, supporting concurrent script execution and implementing a Rust version of the Scratch standard library.',
			technologies: ['Rust', 'Compiler Design', 'API Integration', 'Concurrency'],
			image: '/projects/compiler.jpg',
			github: 'https://github.com/calvintallent',
			demo: '',
			slug: 'scratch-compiler',
			year: 2024
		},
		{
			id: 3,
			title: 'Planetarium Space Game',
			description:
				"Immersive space game built for Columbia Basin College's planetarium system, optimized to handle the extreme resolution requirements of planetarium displays.",
			technologies: ['Unity', 'C#', 'Game Development', 'Performance Optimization'],
			image: '/projects/planetarium.jpg',
			github: 'https://github.com/calvintallent',
			demo: '',
			slug: 'planetarium-game',
			year: 2023
		},
		{
			id: 4,
			title: 'Procedural Image Generator',
			description:
				'High-performance procedural image generator using Perlin and other noise functions, optimized to handle large image generation efficiently.',
			technologies: ['Python', 'Rust', 'Procedural Generation', 'Noise Functions'],
			image: '/projects/procgen.jpg',
			github: 'https://github.com/calvintallent',
			demo: '',
			slug: 'procedural-generator',
			year: 2023
		},
		{
			id: 5,
			title: 'Image to Fourier Series Converter',
			description:
				'Converts SVG images into Fourier Series-based functions that recreate the image when graphed, bridging visual art with mathematical representation.',
			technologies: ['Python', 'Mathematics', 'SVG Processing', 'Fourier Analysis'],
			image: '/projects/fourier.jpg',
			github: 'https://github.com/calvintallent',
			demo: '',
			slug: 'fourier-converter',
			year: 2023
		}
	];

	// Group projects by year and sort years descending
	const groupedProjects = projects.reduce(
		(acc, project) => {
			if (!acc[project.year]) {
				acc[project.year] = [];
			}
			acc[project.year].push(project);
			return acc;
		},
		{} as Record<number, Project[]>
	);

	const sortedYears = Object.keys(groupedProjects)
		.map(Number)
		.sort((a, b) => b - a);
</script>

<svelte:head>
	<title>Calvin Tallent</title>
	<meta name="description" content="Computer Science Student" />
</svelte:head>

<main>
	<section id="projects" class="projects">
		<div class="container">
			{#each sortedYears as year}
				<div class="year-section">
					<h2 class="year-title">{year}</h2>
					<ul class="projects-list">
						{#each groupedProjects[year] as project (project.id)}
							<ProjectItem {project} />
						{/each}
					</ul>
				</div>
			{/each}
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
