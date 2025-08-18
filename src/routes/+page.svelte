<script lang="ts">
	// Sample project data - you can replace this with your actual projects
	const projects = [
		{
			id: 1,
			title: 'E-Commerce Platform',
			description: 'A full-stack e-commerce solution built with React and Node.js',
			technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
			image: '/projects/ecommerce.jpg',
			github: 'https://github.com/username/ecommerce',
			demo: 'https://demo.example.com',
			slug: 'ecommerce'
		},
		{
			id: 2,
			title: 'Task Management App',
			description: 'A collaborative task management application with real-time updates',
			technologies: ['Svelte', 'Firebase', 'TypeScript'],
			image: '/projects/taskapp.jpg',
			github: 'https://github.com/username/taskapp',
			demo: 'https://taskapp.example.com',
			slug: 'taskapp'
		},
		{
			id: 3,
			title: 'Weather Dashboard',
			description: 'A responsive weather dashboard with location-based forecasts',
			technologies: ['Vue.js', 'OpenWeather API', 'Chart.js'],
			image: '/projects/weather.jpg',
			github: 'https://github.com/username/weather',
			demo: 'https://weather.example.com',
			slug: 'weather'
		},
		{
			id: 4,
			title: 'Portfolio Website',
			description: 'This responsive portfolio website built with SvelteKit',
			technologies: ['SvelteKit', 'TypeScript', 'CSS3'],
			image: '/projects/portfolio.jpg',
			github: 'https://github.com/username/portfolio',
			demo: 'https://portfolio.example.com',
			slug: 'portfolio'
		}
	];

	const skills = [
		{
			category: 'Frontend',
			items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Svelte', 'Vue.js']
		},
		{
			category: 'Backend',
			items: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB']
		},
		{ category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'Webpack', 'Vite'] },
		{ category: 'Other', items: ['REST APIs', 'GraphQL', 'Testing', 'CI/CD', 'Agile'] }
	];

	// Mobile menu is now handled in layout
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
				<h1 class="intro-title">Hi, I'm <span class="highlight">Your Name</span></h1>
				<h2 class="intro-subtitle">Full-Stack Developer</h2>
				<p class="intro-description">
					I'm a passionate full-stack developer with expertise in modern web technologies. I love
					creating efficient, scalable, and user-friendly applications that solve real-world
					problems. With a strong foundation in both frontend and backend development, I bring ideas
					to life through clean code and thoughtful design.
				</p>
				<div class="intro-buttons">
					<a href="#projects" class="btn btn-primary">View My Work</a>
					<a href="#contact" class="btn btn-secondary">Get In Touch</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects" class="projects">
		<div class="container">
			<h2 class="section-title">Featured Projects</h2>
			<div class="projects-grid">
				{#each projects as project}
					<article class="project-card">
						<a href="/projects/{project.slug}" class="project-card-link">
							<div class="project-image">
								<img src={project.image} alt={project.title} loading="lazy" />
								<div class="project-overlay">
									<div class="project-links">
										<span class="project-link">View Details</span>
										{#if project.demo}
											<a
												href={project.demo}
												target="_blank"
												rel="noopener noreferrer"
												class="project-link"
												on:click|stopPropagation
											>
												Live Demo
											</a>
										{/if}
										{#if project.github}
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												class="project-link"
												on:click|stopPropagation
											>
												GitHub
											</a>
										{/if}
									</div>
								</div>
							</div>
							<div class="project-content">
								<h3 class="project-title">{project.title}</h3>
								<p class="project-description">{project.description}</p>
								<div class="project-technologies">
									{#each project.technologies as tech}
										<span class="tech-tag">{tech}</span>
									{/each}
								</div>
							</div>
						</a>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- Skills Section -->
	<section id="skills" class="skills">
		<div class="container">
			<h2 class="section-title">Skills & Technologies</h2>
			<div class="skills-grid">
				{#each skills as skillGroup}
					<div class="skill-category">
						<h3 class="skill-category-title">{skillGroup.category}</h3>
						<div class="skill-items">
							{#each skillGroup.items as skill}
								<span class="skill-item">{skill}</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="contact">
		<div class="container">
			<h2 class="section-title">Get In Touch</h2>
			<div class="contact-content">
				<div class="contact-info">
					<h3>Let's work together!</h3>
					<p>
						I'm always interested in new opportunities and exciting projects. Feel free to reach out
						if you'd like to collaborate or just want to say hello.
					</p>
					<div class="contact-details">
						<div class="contact-item">
							<span class="contact-label">Email:</span>
							<a href="mailto:your.email@example.com">your.email@example.com</a>
						</div>
						<div class="contact-item">
							<span class="contact-label">LinkedIn:</span>
							<a
								href="https://linkedin.com/in/yourprofile"
								target="_blank"
								rel="noopener noreferrer"
							>
								linkedin.com/in/yourprofile
							</a>
						</div>
						<div class="contact-item">
							<span class="contact-label">GitHub:</span>
							<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
								github.com/yourusername
							</a>
						</div>
					</div>
					<div class="resume-download">
						<a href="/resume.pdf" class="btn btn-primary" download>Download Resume</a>
					</div>
				</div>
			</div>
		</div>
	</section>
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

	.section-title {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 3rem;
		color: #1f2937;
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

	/* Projects Section */
	.projects {
		background: #f9fafb;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.project-card {
		background: white;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.project-card-link {
		display: block;
		text-decoration: none;
		color: inherit;
		height: 100%;
	}

	.project-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
	}

	.project-image {
		position: relative;
		height: 200px;
		overflow: hidden;
		background: #e5e7eb;
	}

	.project-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.project-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.project-card:hover .project-overlay {
		opacity: 1;
	}

	.project-links {
		display: flex;
		gap: 1rem;
	}

	.project-link {
		color: white;
		text-decoration: none;
		padding: 8px 16px;
		border: 1px solid white;
		border-radius: 4px;
		transition: all 0.3s ease;
	}

	.project-link:hover {
		background: white;
		color: #333;
	}

	.project-content {
		padding: 1.5rem;
	}

	.project-title {
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
		color: #1f2937;
	}

	.project-description {
		color: #6b7280;
		margin-bottom: 1rem;
		line-height: 1.6;
	}

	.project-technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tech-tag {
		background: #e0e7ff;
		color: #3730a3;
		padding: 4px 8px;
		border-radius: 12px;
		font-size: 0.8rem;
		font-weight: 500;
	}

	/* Skills Section */
	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.skill-category {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.skill-category-title {
		font-size: 1.3rem;
		margin-bottom: 1rem;
		color: #1f2937;
		border-bottom: 2px solid #2563eb;
		padding-bottom: 0.5rem;
	}

	.skill-items {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.skill-item {
		background: #f3f4f6;
		color: #374151;
		padding: 6px 12px;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 500;
	}

	/* Contact Section */
	.contact {
		background: #1f2937;
		color: white;
	}

	.contact .section-title {
		color: white;
	}

	.contact-content {
		max-width: 600px;
		margin: 0 auto;
		text-align: center;
	}

	.contact-info h3 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.contact-info p {
		font-size: 1.1rem;
		margin-bottom: 2rem;
		opacity: 0.9;
		line-height: 1.7;
	}

	.contact-details {
		margin-bottom: 2rem;
	}

	.contact-item {
		margin-bottom: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.contact-label {
		font-weight: 600;
		min-width: 80px;
	}

	.contact-item a {
		color: #60a5fa;
		text-decoration: none;
	}

	.contact-item a:hover {
		text-decoration: underline;
	}

	.resume-download {
		margin-top: 2rem;
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

		.section-title {
			font-size: 2rem;
		}

		.intro-buttons {
			flex-direction: column;
			align-items: center;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}

		.skills-grid {
			grid-template-columns: 1fr;
		}

		.contact-item {
			flex-direction: column;
			gap: 0.5rem;
		}

		.contact-label {
			min-width: auto;
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
