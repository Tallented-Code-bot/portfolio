<script lang="ts">
	import { ProjectsSection, SkillsSection, ContactSection } from '$lib/components';
	import { projects, skills, contactInfo, personalInfo } from '$lib/data/portfolio';
</script>

<svelte:head>
	<title>Your Name - Portfolio</title>
	<meta
		name="description"
		content="Full-stack developer passionate about creating amazing web experiences"
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
		<p>&copy; 2024 Your Name. All rights reserved.</p>
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
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		padding: 8rem 0 5rem;
		margin-top: 80px;
	}

	.intro-content {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.intro-title {
		font-size: 3.5rem;
		margin-bottom: 1rem;
		line-height: 1.2;
	}

	.highlight {
		color: #fbbf24;
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
		padding: 12px 24px;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 500;
		transition: all 0.3s ease;
		border: 2px solid transparent;
	}

	.btn-primary {
		background: #2563eb;
		color: white;
		border-color: #2563eb;
	}

	.btn-primary:hover {
		background: #1d4ed8;
		border-color: #1d4ed8;
	}

	.btn-secondary {
		background: transparent;
		color: white;
		border-color: white;
	}

	.btn-secondary:hover {
		background: white;
		color: #2563eb;
	}

	/* Footer */
	.footer {
		background: #111827;
		color: white;
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
