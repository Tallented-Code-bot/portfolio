<script lang="ts">
	import {
		ProjectHero,
		ProjectContent,
		TechStack,
		FeatureGrid,
		ChallengesSection,
		LessonsLearned
	} from '$lib/components';
	import { projectDetails } from '$lib/data/projects';

	const project = projectDetails.taskapp;
</script>

<svelte:head>
	<title>{project.title} - Your Name Portfolio</title>
	<meta name="description" content={project.description} />
</svelte:head>

<ProjectContent imageSrc={project.image} imageAlt="{project.title} Screenshot">
	<ProjectHero
		slot="hero"
		title={project.title}
		subtitle="A collaborative task management application with real-time updates and team collaboration features"
		demoUrl={project.demo}
		githubUrl={project.github}
	/>

	<section class="project-overview">
		<h2>Project Overview</h2>
		{#each project.overview as paragraph}
			<p>{paragraph}</p>
		{/each}
	</section>

	<TechStack techStack={project.techStack} />

	<FeatureGrid features={project.features} />

	<ChallengesSection challenges={project.challenges} />

	<LessonsLearned lessons={project.lessons} />
</ProjectContent>

<style>
	.project-overview {
		margin-bottom: 4rem;
	}

	.project-overview h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: var(--color-text-primary);
		border-bottom: 3px solid var(--color-primary);
		padding-bottom: 0.5rem;
	}

	.project-overview p {
		line-height: 1.7;
		color: var(--color-text-muted);
		margin-bottom: 1rem;
	}
</style>
