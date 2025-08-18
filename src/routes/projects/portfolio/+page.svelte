<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Portfolio Website - Your Name Portfolio</title>
	<meta name="description" content="This responsive portfolio website built with SvelteKit" />
</svelte:head>

<div class="project-detail">
	<div class="hero-section">
		<div class="container">
			<div class="breadcrumb">
				<a href="/">Home</a>
				<span>/</span>
				<a href="/#projects">Projects</a>
				<span>/</span>
				<span>Portfolio Website</span>
			</div>
			<h1 class="project-title">Portfolio Website</h1>
			<p class="project-subtitle">
				A modern, responsive portfolio website showcasing projects and skills with interactive
				design
			</p>
			<div class="project-links">
				<a
					href="https://portfolio.example.com"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-primary"
				>
					Live Demo
				</a>
				<a
					href="https://github.com/username/portfolio"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-secondary"
				>
					View Code
				</a>
			</div>
		</div>
	</div>

	<div class="content-section">
		<div class="container">
			<div class="project-image">
				<img src="/projects/portfolio.jpg" alt="Portfolio Website Screenshot" />
			</div>

			<div class="project-content">
				<section class="project-overview">
					<h2>Project Overview</h2>
					<p>
						This portfolio website serves as a comprehensive showcase of my skills, projects, and
						experience as a full-stack developer. Built with modern web technologies, it features a
						clean, responsive design that works seamlessly across all devices.
					</p>
					<p>
						The site includes detailed project pages, an interactive skills section, and a contact
						form with integrated resume download. Every aspect of the design focuses on providing an
						excellent user experience while demonstrating technical proficiency.
					</p>
				</section>

				<section class="tech-stack">
					<h2>Technologies Used</h2>
					<div class="tech-grid">
						<div class="tech-category">
							<h3>Frontend Framework</h3>
							<ul>
								<li>SvelteKit</li>
								<li>Svelte 5</li>
								<li>TypeScript</li>
								<li>Vite</li>
								<li>CSS3 (Modern Features)</li>
							</ul>
						</div>
						<div class="tech-category">
							<h3>Styling & Design</h3>
							<ul>
								<li>CSS Grid & Flexbox</li>
								<li>CSS Custom Properties</li>
								<li>Responsive Design</li>
								<li>CSS Animations</li>
								<li>Mobile-First Approach</li>
							</ul>
						</div>
						<div class="tech-category">
							<h3>Development & Deployment</h3>
							<ul>
								<li>ESLint & Prettier</li>
								<li>TypeScript</li>
								<li>Git Version Control</li>
								<li>Netlify/Vercel</li>
								<li>Performance Optimization</li>
							</ul>
						</div>
					</div>
				</section>

				<section class="features">
					<h2>Key Features</h2>
					<div class="features-grid">
						<div class="feature-item">
							<div class="feature-icon">🎨</div>
							<h3>Modern Design</h3>
							<p>Clean, professional design with smooth animations and transitions</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">📱</div>
							<h3>Fully Responsive</h3>
							<p>Optimized for all screen sizes from mobile phones to desktop displays</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">⚡</div>
							<h3>Fast Performance</h3>
							<p>Optimized loading times with lazy loading and efficient code splitting</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">🔍</div>
							<h3>SEO Optimized</h3>
							<p>Proper meta tags, semantic HTML, and search engine optimization</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">🎯</div>
							<h3>Interactive Elements</h3>
							<p>Hover effects, smooth scrolling, and engaging user interactions</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">📄</div>
							<h3>Project Showcase</h3>
							<p>Detailed project pages with comprehensive information and links</p>
						</div>
					</div>
				</section>

				<section class="challenges">
					<h2>Challenges & Solutions</h2>
					<div class="challenge-item">
						<h3>Performance Optimization</h3>
						<p>
							<strong>Challenge:</strong> Ensuring fast load times while maintaining rich visual elements
							and animations.
						</p>
						<p>
							<strong>Solution:</strong> Implemented lazy loading for images, code splitting for routes,
							and optimized CSS with minimal runtime overhead.
						</p>
					</div>
					<div class="challenge-item">
						<h3>Cross-Browser Compatibility</h3>
						<p>
							<strong>Challenge:</strong> Making sure the site works consistently across different browsers
							and devices.
						</p>
						<p>
							<strong>Solution:</strong> Used modern CSS features with appropriate fallbacks and thorough
							testing across multiple browsers and devices.
						</p>
					</div>
					<div class="challenge-item">
						<h3>Accessibility</h3>
						<p>
							<strong>Challenge:</strong> Creating an accessible experience for users with disabilities.
						</p>
						<p>
							<strong>Solution:</strong> Implemented proper ARIA labels, semantic HTML structure, keyboard
							navigation, and screen reader compatibility.
						</p>
					</div>
				</section>

				<section class="lessons">
					<h2>What I Learned</h2>
					<ul>
						<li>
							<strong>SvelteKit Mastery:</strong> Gained deep understanding of SvelteKit's routing, server-side
							rendering, and build optimization features.
						</li>
						<li>
							<strong>Modern CSS:</strong> Leveraged advanced CSS features like Grid, Custom Properties,
							and modern layout techniques for responsive design.
						</li>
						<li>
							<strong>Performance Engineering:</strong> Learned to optimize web performance through efficient
							code organization, image optimization, and smart loading strategies.
						</li>
						<li>
							<strong>User Experience Design:</strong> Developed skills in creating intuitive navigation,
							engaging animations, and professional visual hierarchy.
						</li>
						<li>
							<strong>Accessibility Standards:</strong> Understanding of WCAG guidelines and implementing
							inclusive design practices for better user accessibility.
						</li>
						<li>
							<strong>SEO Best Practices:</strong> Learned to structure content and metadata for optimal
							search engine visibility and social media sharing.
						</li>
					</ul>
				</section>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.project-detail {
		margin-top: 80px;
	}

	.hero-section {
		background: var(--gradient-primary);
		color: var(--color-text-white);
		padding: 4rem 0;
		text-align: center;
	}

	.breadcrumb {
		margin-bottom: 2rem;
		opacity: 0.9;
	}

	.breadcrumb a {
		color: var(--color-text-white);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.breadcrumb span {
		margin: 0 0.5rem;
		opacity: 0.7;
	}

	.project-title {
		font-size: 3rem;
		margin-bottom: 1rem;
		font-weight: bold;
	}

	.project-subtitle {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		opacity: 0.9;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.project-links {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn {
		display: inline-block;
		padding: 12px 24px;
		border-radius: var(--border-radius-md);
		text-decoration: none;
		font-weight: 500;
		transition: all var(--transition-normal);
		border: 2px solid transparent;
	}

	.btn-primary {
		background: var(--color-primary);
		color: var(--color-text-white);
		border-color: var(--color-primary);
	}

	.btn-primary:hover {
		background: var(--color-primary-hover);
		border-color: var(--color-primary-hover);
	}

	.btn-secondary {
		background: transparent;
		color: var(--color-text-white);
		border-color: var(--color-text-white);
	}

	.btn-secondary:hover {
		background: var(--color-text-white);
		color: var(--color-primary);
	}

	.content-section {
		padding: 4rem 0;
	}

	.project-image {
		margin-bottom: 4rem;
		text-align: center;
	}

	.project-image img {
		max-width: 100%;
		height: auto;
		border-radius: var(--border-radius-xl);
		box-shadow: var(--shadow-xl);
	}

	.project-content section {
		margin-bottom: 4rem;
	}

	.project-content h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: var(--color-text-primary);
		border-bottom: 3px solid var(--color-primary);
		padding-bottom: 0.5rem;
	}

	.project-content h3 {
		font-size: 1.3rem;
		margin-bottom: 1rem;
		color: var(--color-text-secondary);
	}

	.project-content p {
		line-height: 1.7;
		color: var(--color-text-muted);
		margin-bottom: 1rem;
	}

	.tech-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.tech-category {
		background: var(--color-bg-secondary);
		padding: 1.5rem;
		border-radius: var(--border-radius-lg);
		border-left: 4px solid var(--color-primary);
	}

	.tech-category h3 {
		color: var(--color-primary);
		margin-bottom: 1rem;
	}

	.tech-category ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.tech-category li {
		padding: 0.3rem 0;
		color: var(--color-text-muted);
		position: relative;
		padding-left: 1rem;
	}

	.tech-category li:before {
		content: '•';
		color: var(--color-primary);
		position: absolute;
		left: 0;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.feature-item {
		background: var(--color-surface);
		padding: 2rem;
		border-radius: var(--border-radius-xl);
		box-shadow: var(--shadow-md);
		border: 1px solid var(--color-border-light);
		text-align: center;
		transition: transform var(--transition-normal);
	}

	.feature-item:hover {
		transform: translateY(-5px);
	}

	.feature-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.feature-item h3 {
		color: var(--color-text-primary);
		margin-bottom: 0.5rem;
	}

	.feature-item p {
		font-size: 0.9rem;
		color: var(--color-text-muted);
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
	}

	.lessons strong {
		color: var(--color-success-text);
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.project-title {
			font-size: 2rem;
		}

		.tech-grid,
		.features-grid {
			grid-template-columns: 1fr;
		}

		.project-links {
			flex-direction: column;
			align-items: center;
		}

		.container {
			padding: 0 15px;
		}
	}
</style>
