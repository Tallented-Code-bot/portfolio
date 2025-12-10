<script lang="ts">
	import { ProjectsSection, SkillsSection, ContactSection } from '$lib/components';
	import { projects, skills, contactInfo, personalInfo } from '$lib/data/portfolio';
</script>

<svelte:head>
	<title>Calvin Tallent - Portfolio</title>
	<meta
		name="description"
		content="Full-stack developer and problem solver passionate about creating amazing web experiences"
	/>
</svelte:head>

<!-- Header is now in layout -->

<main>
	<!-- Intro Section -->
	<section id="intro" class="intro">
		<div class="container">
			<div class="intro-content">
				<h1 class="intro-title">Hi, I'm <span class="highlight">{personalInfo.name}</span></h1>
				<h2 class="intro-subtitle">{personalInfo.title}</h2>
				<p class="intro-description">
					{personalInfo.bio}
				</p>
				<div class="intro-buttons">
					<a href="#projects" class="btn btn-primary">View My Work</a>
					<a href="#contact" class="btn btn-secondary">Get In Touch</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<ProjectsSection {projects} />

	<!-- Skills Section -->
	<SkillsSection {skills} />

	<!-- Contact Section -->
	<ContactSection {contactInfo} />
</main>

<!-- Footer -->
<footer class="footer">
	<div class="container">
		<p>&copy; 2024 Calvin Tallent. All rights reserved.</p>
	</div>
</footer>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	/* Sections */
	section {
		padding: 5rem 0;
	}

	/* Intro Section */
	.intro {
		background: var(--gradient-hero);
		color: var(--color-text-white);
		padding: 8rem 0 5rem;
		margin-top: 80px;
		position: relative;
		overflow: hidden;
	}

	.intro::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background:
			radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
		pointer-events: none;
	}

	.intro-content {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.intro-title {
		font-size: 3.5rem;
		margin-bottom: 1rem;
		line-height: 1.2;
	}

	.highlight {
		color: var(--color-accent);
	}

	.intro-subtitle {
		font-size: 1.5rem;
		margin-bottom: 2rem;
		opacity: 0.9;
		font-weight: 400;
	}

	.intro-description {
		font-size: 1.1rem;
		margin-bottom: 3rem;
		opacity: 0.9;
		line-height: 1.7;
	}

	.intro-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn {
		display: inline-block;
		padding: 14px 32px;
		border-radius: var(--border-radius-lg);
		text-decoration: none;
		font-weight: 600;
		transition: all var(--transition-normal);
		border: 2px solid transparent;
		font-size: 1.05rem;
	}

	.btn-primary {
		background: var(--color-text-white);
		color: var(--color-primary);
		border-color: var(--color-text-white);
		box-shadow: var(--shadow-md);
	}

	.btn-primary:hover {
		background: var(--color-bg-secondary);
		border-color: var(--color-bg-secondary);
		transform: translateY(-2px);
		box-shadow: var(--shadow-lg);
	}

	.btn-secondary {
		background: transparent;
		color: var(--color-text-white);
		border-color: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(10px);
	}

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: var(--color-text-white);
		transform: translateY(-2px);
	}

	/* Footer */
	.footer {
		background: var(--color-bg-darker);
		color: var(--color-text-white);
		text-align: center;
		padding: 2rem 0;
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.intro {
			padding: 6rem 0 4rem;
		}

		.intro-title {
			font-size: 2.5rem;
		}

		.intro-buttons {
			flex-direction: column;
			align-items: center;
		}
	}

	@media (max-width: 480px) {
		section {
			padding: 3rem 0;
		}

		.intro-title {
			font-size: 2rem;
		}

		.intro-subtitle {
			font-size: 1.2rem;
		}

		.container {
			padding: 0 15px;
		}
	}
</style>
