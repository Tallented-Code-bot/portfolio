<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { navigationItems, personalInfo } from '$lib/data/portfolio';
	import '$lib/styles/global.css';

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
			<a href="/">{personalInfo.name}</a>
		</div>
		<div class="nav-links {mobileMenuOpen ? 'nav-links-mobile' : ''}">
			{#each navigationItems as navItem (navItem.href)}
				<a href={navItem.href} onclick={closeMobileMenu}>{navItem.label}</a>
			{/each}
		</div>
		<button class="nav-toggle" onclick={toggleMobileMenu} aria-label="Toggle menu">
			<span></span>
			<span></span>
			<span></span>
		</button>
	</nav>
</header>

{@render children?.()}

<style>
	/* Header */
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: var(--color-header-bg);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--color-header-border);
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
		color: var(--color-primary);
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
		color: var(--color-text-primary);
		font-weight: 500;
		transition: color var(--transition-normal);
	}

	.nav-links a:hover {
		color: var(--color-primary);
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
		background: var(--color-text-primary);
		border-radius: 1px;
		transition: all var(--transition-normal);
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
			background: var(--color-bg-primary);
			border-top: 1px solid var(--color-header-border);
			padding: 1rem;
			gap: 1rem;
		}

		.nav-toggle {
			display: flex;
		}
	}
</style>
