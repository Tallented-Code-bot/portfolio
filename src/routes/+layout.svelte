<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';

	let { children } = $props();
	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Header -->
<header class="header">
	<nav class="nav">
		<div class="nav-brand">
			<a href="/">Your Name</a>
		</div>
		<div class="nav-links {mobileMenuOpen ? 'nav-links-mobile' : ''}">
			<a href="/" on:click={closeMobileMenu}>Home</a>
			<a href="/#projects" on:click={closeMobileMenu}>Projects</a>
			<a href="/#skills" on:click={closeMobileMenu}>Skills</a>
			<a href="/#contact" on:click={closeMobileMenu}>Contact</a>
		</div>
		<button class="nav-toggle" on:click={toggleMobileMenu} aria-label="Toggle menu">
			<span></span>
			<span></span>
			<span></span>
		</button>
	</nav>
</header>

{@render children?.()}

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		line-height: 1.6;
		color: #333;
	}

	:global(*) {
		box-sizing: border-box;
	}

	/* Header */
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid #eee;
		z-index: 1000;
	}

	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 20px;
		max-width: 1200px;
		margin: 0 auto;
	}

	.nav-brand a {
		font-size: 1.5rem;
		font-weight: bold;
		text-decoration: none;
		color: #2563eb;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-links a {
		text-decoration: none;
		color: #333;
		font-weight: 500;
		transition: color 0.3s ease;
	}

	.nav-links a:hover {
		color: #2563eb;
	}

	.nav-toggle {
		display: none;
		flex-direction: column;
		gap: 4px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 8px;
	}

	.nav-toggle span {
		display: block;
		width: 20px;
		height: 2px;
		background: #333;
		border-radius: 1px;
		transition: all 0.3s ease;
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.nav-links {
			display: none;
		}

		.nav-links-mobile {
			display: flex;
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			background: white;
			border-top: 1px solid #eee;
			padding: 1rem;
			gap: 1rem;
		}

		.nav-toggle {
			display: flex;
		}
	}
</style>
