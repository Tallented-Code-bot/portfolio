<script lang="ts">
	export let lessons: string[];
</script>

<section class="lessons">
	<h2>What I Learned</h2>
	<ul>
		{#each lessons as lesson}
			<li>{@html lesson}</li>
		{/each}
	</ul>
</section>

<style>
	.lessons {
		margin-bottom: 4rem;
	}

	.lessons h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: var(--color-text-primary);
		border-bottom: 3px solid var(--color-primary);
		padding-bottom: 0.5rem;
	}

	.lessons ul {
		list-style: none;
		padding: 0;
	}

	.lessons li {
		background: var(--color-surface);
		padding: 1.5rem;
		margin-bottom: 1rem;
		border-radius: var(--border-radius-lg);
		box-shadow: var(--shadow-sm);
		border-left: 4px solid var(--color-success);
		line-height: 1.7;
		color: var(--color-text-muted);
	}

	.lessons li :global(strong) {
		color: var(--color-success-text);
	}
</style>
