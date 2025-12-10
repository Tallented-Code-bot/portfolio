<script lang="ts">
	export let challenges: Array<{
		title: string;
		challenge: string;
		solution: string;
	}>;
</script>

<section class="challenges">
	<h2>Challenges & Solutions</h2>
	{#each challenges as challenge}
		<div class="challenge-item">
			<h3>{challenge.title}</h3>
			<p>
				<strong>Challenge:</strong> {challenge.challenge}
			</p>
			<p>
				<strong>Solution:</strong> {challenge.solution}
			</p>
		</div>
	{/each}
</section>

<style>
	.challenges {
		margin-bottom: 4rem;
	}

	.challenges h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: var(--color-text-primary);
		border-bottom: 3px solid var(--color-primary);
		padding-bottom: 0.5rem;
	}

	.challenge-item {
		background: var(--color-bg-secondary);
		padding: 2rem;
		border-radius: var(--border-radius-lg);
		margin-bottom: 2rem;
		border-left: 4px solid var(--color-warning);
	}

	.challenge-item h3 {
		color: var(--color-warning-text);
		margin-bottom: 1rem;
		font-size: 1.3rem;
	}

	.challenge-item p {
		line-height: 1.7;
		color: var(--color-text-muted);
		margin-bottom: 1rem;
	}

	.challenge-item strong {
		color: var(--color-text-secondary);
	}
</style>
