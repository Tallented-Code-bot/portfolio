<script lang="ts">
	import { ProjectsSection } from '$lib/components';
	import EducationSection from '$lib/components/EducationSection.svelte';
	import { projects } from '$lib/data/portfolio';
</script>

<svelte:head>
	<title>Calvin Tallent</title>
	<meta name="description" content="Computer Science Student" />
</svelte:head>

<main>
	<ProjectsSection {projects} />
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 20px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.6;
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		main {
			padding: 1rem 15px;
		}
	}
</style>
