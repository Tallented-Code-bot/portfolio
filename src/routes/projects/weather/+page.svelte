<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Weather Dashboard - Your Name Portfolio</title>
	<meta name="description" content="A responsive weather dashboard with location-based forecasts" />
</svelte:head>

<div class="project-detail">
	<div class="hero-section">
		<div class="container">
			<div class="breadcrumb">
				<a href="/">Home</a>
				<span>/</span>
				<a href="/#projects">Projects</a>
				<span>/</span>
				<span>Weather Dashboard</span>
			</div>
			<h1 class="project-title">Weather Dashboard</h1>
			<p class="project-subtitle">
				A responsive weather dashboard with location-based forecasts and interactive data visualization
			</p>
			<div class="project-links">
				<a
					href="https://weather.example.com"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-primary"
				>
					Live Demo
				</a>
				<a
					href="https://github.com/username/weather"
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
				<img src="/projects/weather.jpg" alt="Weather Dashboard Screenshot" />
			</div>

			<div class="project-content">
				<section class="project-overview">
					<h2>Project Overview</h2>
					<p>
						This weather dashboard provides comprehensive weather information with a clean, modern interface.
						Users can search for any location worldwide and get detailed current weather conditions,
						5-day forecasts, and historical weather patterns displayed through interactive charts.
					</p>
					<p>
						The application features automatic location detection, customizable units, and data visualization
						that helps users understand weather trends at a glance. Built with performance in mind,
						it provides fast, accurate weather data from multiple reliable sources.
					</p>
				</section>

				<section class="tech-stack">
					<h2>Technologies Used</h2>
					<div class="tech-grid">
						<div class="tech-category">
							<h3>Frontend</h3>
							<ul>
								<li>Vue.js 3</li>
								<li>Vue Composition API</li>
								<li>TypeScript</li>
								<li>Pinia (State Management)</li>
								<li>Vue Router</li>
								<li>Vite</li>
							</ul>
						</div>
						<div class="tech-category">
							<h3>APIs & Data</h3>
							<ul>
								<li>OpenWeatherMap API</li>
								<li>Geolocation API</li>
								<li>Chart.js</li>
								<li>Axios</li>
								<li>Local Storage API</li>
							</ul>
						</div>
						<div class="tech-category">
							<h3>Styling & UX</h3>
							<ul>
								<li>CSS3 (Grid & Flexbox)</li>
								<li>CSS Animations</li>
								<li>Responsive Design</li>
								<li>Dark/Light Theme</li>
								<li>Progressive Web App</li>
							</ul>
						</div>
					</div>
				</section>

				<section class="features">
					<h2>Key Features</h2>
					<div class="features-grid">
						<div class="feature-item">
							<div class="feature-icon">🌍</div>
							<h3>Location Search</h3>
							<p>Search weather for any city worldwide with auto-complete suggestions</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">📍</div>
							<h3>Auto-Detection</h3>
							<p>Automatically detect user's location for instant weather information</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">📊</div>
							<h3>Interactive Charts</h3>
							<p>Visual temperature trends, precipitation, and humidity charts</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">📅</div>
							<h3>5-Day Forecast</h3>
							<p>Detailed weather predictions with hourly breakdown</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">🌓</div>
							<h3>Theme Toggle</h3>
							<p>Beautiful dark and light themes with smooth transitions</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">📱</div>
							<h3>PWA Support</h3>
							<p>Install as a mobile app with offline weather data caching</p>
						</div>
					</div>
				</section>

				<section class="challenges">
					<h2>Challenges & Solutions</h2>
					<div class="challenge-item">
						<h3>API Rate Limiting</h3>
						<p>
							<strong>Challenge:</strong> Managing API calls efficiently while providing real-time data updates.
						</p>
						<p>
							<strong>Solution:</strong> Implemented smart caching with expiration times and batched API requests to minimize calls while keeping data fresh.
						</p>
					</div>
					<div class="challenge-item">
						<h3>Data Visualization Performance</h3>
						<p>
							<strong>Challenge:</strong> Rendering smooth charts with large datasets without impacting performance.
						</p>
						<p>
							<strong>Solution:</strong> Used Chart.js with data decimation and lazy loading to handle large weather datasets efficiently.
						</p>
					</div>
					<div class="challenge-item">
						<h3>Geolocation Reliability</h3>
						<p>
							<strong>Challenge:</strong> Handling cases where geolocation fails or is blocked by users.
						</p>
						<p>
							<strong>Solution:</strong> Implemented fallback location detection using IP-based location services and graceful error handling.
						</p>
					</div>
				</section>

				<section class="lessons">
					<h2>What I Learned</h2>
					<ul>
						<li>
							<strong>API Integration:</strong> Mastered working with external weather APIs,
							handling rate limits, and implementing efficient data caching strategies.
						</li>
						<li>
							<strong>Data Visualization:</strong> Learned to create meaningful charts and graphs
							that help users understand complex weather data patterns.
						</li>
						<li>
							<strong>Vue.js Ecosystem:</strong> Gained expertise in Vue 3's Composition API,
							Pinia for state management, and building reactive applications.
						</li>
						<li>
							<strong>Progressive Web Apps:</strong> Implemented PWA features including
							offline functionality, app installation, and background data sync.
						</li>
						<li>
							<strong>User Experience:</strong> Created intuitive interfaces with smooth
							animations, theme switching, and responsive design principles.
						</li>
						<li>
							<strong>Performance Optimization:</strong> Learned techniques for optimizing
							data-heavy applications with efficient rendering and smart caching.
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
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		padding: 4rem 0;
		text-align: center;
	}

	.breadcrumb {
		margin-bottom: 2rem;
		opacity: 0.9;
	}

	.breadcrumb a {
		color: white;
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
		border-radius: 12px;
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
	}

	.project-content section {
		margin-bottom: 4rem;
	}

	.project-content h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: #1f2937;
		border-bottom: 3px solid #2563eb;
		padding-bottom: 0.5rem;
	}

	.project-content h3 {
		font-size: 1.3rem;
		margin-bottom: 1rem;
		color: #374151;
	}

	.project-content p {
		line-height: 1.7;
		color: #4b5563;
		margin-bottom: 1rem;
	}

	.tech-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.tech-category {
		background: #f9fafb;
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #2563eb;
	}

	.tech-category h3 {
		color: #2563eb;
		margin-bottom: 1rem;
	}

	.tech-category ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.tech-category li {
		padding: 0.3rem 0;
		color: #4b5563;
		position: relative;
		padding-left: 1rem;
	}

	.tech-category li:before {
		content: '•';
		color: #2563eb;
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
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
		border: 1px solid #e5e7eb;
		text-align: center;
		transition: transform 0.3s ease;
	}

	.feature-item:hover {
		transform: translateY(-5px);
	}

	.feature-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.feature-item h3 {
		color: #1f2937;
		margin-bottom: 0.5rem;
	}

	.feature-item p {
		font-size: 0.9rem;
		color: #6b7280;
	}

	.challenge-item {
		background: #f9fafb;
		padding: 2rem;
		border-radius: 8px;
		margin-bottom: 2rem;
		border-left: 4px solid #f59e0b;
	}

	.challenge-item h3 {
		color: #92400e;
		margin-bottom: 1rem;
	}

	.lessons ul {
		list-style: none;
		padding: 0;
	}

	.lessons li {
		background: white;
		padding: 1.5rem;
		margin-bottom: 1rem;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		border-left: 4px solid #10b981;
	}

	.lessons strong {
		color: #065f46;
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
