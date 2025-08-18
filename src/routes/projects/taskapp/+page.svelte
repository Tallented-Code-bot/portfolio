<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Task Management App - Your Name Portfolio</title>
	<meta
		name="description"
		content="A collaborative task management application with real-time updates"
	/>
</svelte:head>

<div class="project-detail">
	<div class="hero-section">
		<div class="container">
			<div class="breadcrumb">
				<a href="/">Home</a>
				<span>/</span>
				<a href="/#projects">Projects</a>
				<span>/</span>
				<span>Task Management App</span>
			</div>
			<h1 class="project-title">Task Management App</h1>
			<p class="project-subtitle">
				A collaborative task management application with real-time updates and team collaboration
				features
			</p>
			<div class="project-links">
				<a
					href="https://taskapp.example.com"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-primary"
				>
					Live Demo
				</a>
				<a
					href="https://github.com/username/taskapp"
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
				<img src="/projects/taskapp.jpg" alt="Task Management App Screenshot" />
			</div>

			<div class="project-content">
				<section class="project-overview">
					<h2>Project Overview</h2>
					<p>
						This task management application is designed to help teams collaborate effectively on
						projects. Built with Svelte and Firebase, it provides real-time synchronization across
						all connected devices, ensuring that team members are always up-to-date with the latest
						project status.
					</p>
					<p>
						The application features an intuitive drag-and-drop interface, customizable project
						boards, and comprehensive task tracking with due dates, priorities, and team member
						assignments.
					</p>
				</section>

				<section class="tech-stack">
					<h2>Technologies Used</h2>
					<div class="tech-grid">
						<div class="tech-category">
							<h3>Frontend</h3>
							<ul>
								<li>Svelte</li>
								<li>SvelteKit</li>
								<li>TypeScript</li>
								<li>CSS3 (Custom Properties)</li>
								<li>Svelte Stores</li>
								<li>Svelte Transitions</li>
							</ul>
						</div>
						<div class="tech-category">
							<h3>Backend & Database</h3>
							<ul>
								<li>Firebase Firestore</li>
								<li>Firebase Auth</li>
								<li>Firebase Hosting</li>
								<li>Cloud Functions</li>
								<li>Firebase Storage</li>
							</ul>
						</div>
						<div class="tech-category">
							<h3>Features & Libraries</h3>
							<ul>
								<li>Real-time Updates</li>
								<li>Drag & Drop API</li>
								<li>PWA Support</li>
								<li>Responsive Design</li>
								<li>Email Notifications</li>
							</ul>
						</div>
					</div>
				</section>

				<section class="features">
					<h2>Key Features</h2>
					<div class="features-grid">
						<div class="feature-item">
							<div class="feature-icon">📋</div>
							<h3>Kanban Boards</h3>
							<p>Organize tasks in customizable columns with drag-and-drop functionality</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">⚡</div>
							<h3>Real-time Sync</h3>
							<p>Instant updates across all devices when team members make changes</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">👥</div>
							<h3>Team Collaboration</h3>
							<p>Assign tasks to team members, add comments, and track progress together</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">📅</div>
							<h3>Due Dates & Priorities</h3>
							<p>Set deadlines and priority levels to keep projects on track</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">🔍</div>
							<h3>Search & Filter</h3>
							<p>Quickly find tasks with powerful search and filtering options</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">📊</div>
							<h3>Progress Tracking</h3>
							<p>Visual progress indicators and analytics for project completion</p>
						</div>
					</div>
				</section>

				<section class="challenges">
					<h2>Challenges & Solutions</h2>
					<div class="challenge-item">
						<h3>Real-time Synchronization</h3>
						<p>
							<strong>Challenge:</strong> Ensuring consistent data across multiple users editing simultaneously
							without conflicts.
						</p>
						<p>
							<strong>Solution:</strong> Implemented Firebase Firestore's real-time listeners with optimistic
							updates and conflict resolution strategies.
						</p>
					</div>
					<div class="challenge-item">
						<h3>Drag and Drop Performance</h3>
						<p>
							<strong>Challenge:</strong> Maintaining smooth drag-and-drop interactions while updating
							the database in real-time.
						</p>
						<p>
							<strong>Solution:</strong> Used local state management with debounced database updates
							and visual feedback for immediate user response.
						</p>
					</div>
					<div class="challenge-item">
						<h3>Mobile Responsiveness</h3>
						<p>
							<strong>Challenge:</strong> Creating a touch-friendly interface that works well on mobile
							devices.
						</p>
						<p>
							<strong>Solution:</strong> Implemented touch gestures for mobile and redesigned the UI
							to be mobile-first with larger touch targets.
						</p>
					</div>
				</section>

				<section class="lessons">
					<h2>What I Learned</h2>
					<ul>
						<li>
							<strong>Real-time Applications:</strong> Mastered Firebase Firestore for building responsive,
							real-time collaborative applications with offline support.
						</li>
						<li>
							<strong>Svelte Framework:</strong> Gained deep expertise in Svelte's reactive system, stores,
							and component lifecycle for building efficient web applications.
						</li>
						<li>
							<strong>State Management:</strong> Learned to handle complex application state across multiple
							components with proper data flow and updates.
						</li>
						<li>
							<strong>User Experience:</strong> Developed skills in creating intuitive interfaces with
							smooth animations and responsive feedback.
						</li>
						<li>
							<strong>Collaborative Features:</strong> Understanding of building features that enable
							effective team collaboration and communication.
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
