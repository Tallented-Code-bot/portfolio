<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { personalInfo } from '$lib/data/portfolio';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="header">
	<div class="container">
		<div class="header-content">
			<h1 class="name">{personalInfo.name}</h1>
			<p class="title">{personalInfo.title}</p>
			<div class="links">
				<a href="https://github.com/calvintallent" target="_blank" rel="noopener noreferrer"
					>github</a
				>–
				<a href="https://linkedin.com/in/calvin-tallent" target="_blank" rel="noopener noreferrer"
					>linkedin</a
				>–
				<a href="mailto:calvin.tallent@wsu.edu">email</a>
			</div>
		</div>
	</div>
</header>

{@render children?.()}

<footer class="footer">
	<div class="container">
		<p>&copy; 2025 {personalInfo.name}</p>
	</div>
</footer>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.header {
		padding: 2rem 0;
		text-align: center;
		border-bottom: 1px solid #ddd;
		margin-bottom: 2rem;
	}

	.header-content {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.name {
		font-size: 2rem;
		margin: 0;
		font-weight: normal;
	}

	.title {
		font-size: 1rem;
		margin: 0.5rem 0;
		color: #666;
		text-transform: lowercase;
	}

	.links {
		font-size: 0.9rem;
		margin-top: 1rem;
	}

	.links a {
		color: #007acc;
		text-decoration: none;
	}

	.links a:hover {
		text-decoration: underline;
	}

	.footer {
		text-align: center;
		padding: 2rem 0;
		font-size: 0.8rem;
		color: #666;
		border-top: 1px solid #ddd;
		margin-top: 4rem;
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.container {
			padding: 0 15px;
		}

		.name {
			font-size: 1.5rem;
		}
	}
</style>
