<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>E-Commerce Platform - Your Name Portfolio</title>
	<meta name="description" content="Full-stack e-commerce solution built with React and Node.js" />
</svelte:head>

<div class="project-detail">
	<div class="hero-section">
		<div class="container">
			<div class="breadcrumb">
				<a href="/">Home</a>
				<span>/</span>
				<a href="/#projects">Projects</a>
				<span>/</span>
				<span>E-Commerce Platform</span>
			</div>
			<h1 class="project-title">E-Commerce Platform</h1>
			<p class="project-subtitle">
				A comprehensive full-stack e-commerce solution with modern payment processing
			</p>
			<div class="project-links">
				<a
					href="https://demo.example.com"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-primary"
				>
					Live Demo
				</a>
				<a
					href="https://github.com/username/ecommerce"
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
				<img src="/projects/ecommerce.jpg" alt="E-Commerce Platform Screenshot" />
			</div>

			<div class="project-content">
				<section class="project-overview">
					<h2>Project Overview</h2>
					<p>
						This e-commerce platform is a full-featured online shopping solution built with modern
						web technologies. It includes user authentication, product management, shopping cart
						functionality, secure payment processing with Stripe, and an admin dashboard for
						managing orders and inventory.
					</p>
					<p>
						The application features a responsive design that works seamlessly across desktop and
						mobile devices, providing an optimal shopping experience for all users.
					</p>
				</section>

				<section class="tech-stack">
					<h2>Technologies Used</h2>
					<div class="tech-grid">
						<div class="tech-category">
							<h3>Frontend</h3>
							<ul>
								<li>React 18</li>
								<li>TypeScript</li>
								<li>Redux Toolkit</li>
								<li>React Router</li>
								<li>Styled Components</li>
								<li>Axios</li>
							</ul>
						</div>
						<div class="tech-category">
							<h3>Backend</h3>
							<ul>
								<li>Node.js</li>
								<li>Express.js</li>
								<li>MongoDB</li>
								<li>Mongoose ODM</li>
								<li>JWT Authentication</li>
								<li>Bcrypt</li>
							</ul>
						</div>
						<div class="tech-category">
							<h3>Payment & Deployment</h3>
							<ul>
								<li>Stripe API</li>
								<li>Cloudinary (Images)</li>
								<li>Heroku</li>
								<li>MongoDB Atlas</li>
								<li>GitHub Actions</li>
							</ul>
						</div>
					</div>
				</section>

				<section class="features">
					<h2>Key Features</h2>
					<div class="features-grid">
						<div class="feature-item">
							<div class="feature-icon">🛒</div>
							<h3>Shopping Cart</h3>
							<p>Persistent shopping cart with quantity management and real-time price updates</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">💳</div>
							<h3>Secure Payments</h3>
							<p>Integrated Stripe payment processing with support for multiple payment methods</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">👤</div>
							<h3>User Authentication</h3>
							<p>Secure user registration, login, and profile management with JWT tokens</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">📊</div>
							<h3>Admin Dashboard</h3>
							<p>Comprehensive admin panel for managing products, orders, and user accounts</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">🔍</div>
							<h3>Product Search</h3>
							<p>Advanced search and filtering capabilities with category-based navigation</p>
						</div>
						<div class="feature-item">
							<div class="feature-icon">📱</div>
							<h3>Responsive Design</h3>
							<p>Mobile-first responsive design ensuring great UX across all devices</p>
						</div>
					</div>
				</section>

				<section class="challenges">
					<h2>Challenges & Solutions</h2>
					<div class="challenge-item">
						<h3>Real-time Inventory Management</h3>
						<p>
							<strong>Challenge:</strong> Ensuring accurate inventory counts when multiple users are
							shopping simultaneously.
						</p>
						<p>
							<strong>Solution:</strong> Implemented optimistic locking in MongoDB and real-time
							inventory updates using WebSocket connections.
						</p>
					</div>
					<div class="challenge-item">
						<h3>Payment Security</h3>
						<p>
							<strong>Challenge:</strong> Securely handling sensitive payment information.
						</p>
						<p>
							<strong>Solution:</strong> Integrated Stripe's secure payment processing, ensuring PCI
							compliance by never storing card details on our servers.
						</p>
					</div>
					<div class="challenge-item">
						<h3>Performance Optimization</h3>
						<p>
							<strong>Challenge:</strong> Loading product catalogs quickly with high-resolution
							images.
						</p>
						<p>
							<strong>Solution:</strong> Implemented lazy loading, image optimization with
							Cloudinary, and pagination for large product sets.
						</p>
					</div>
				</section>

				<section class="lessons">
					<h2>What I Learned</h2>
					<ul>
						<li>
							<strong>Full-stack Integration:</strong> Gained experience in seamlessly connecting
							frontend and backend systems with proper error handling and state management.
						</li>
						<li>
							<strong>Payment Processing:</strong> Learned to implement secure payment flows and
							handle various payment scenarios including failures and refunds.
						</li>
						<li>
							<strong>Database Design:</strong> Designed efficient MongoDB schemas for complex
							e-commerce relationships between users, products, and orders.
						</li>
						<li>
							<strong>Security Best Practices:</strong> Implemented authentication, authorization,
							and data validation to protect against common web vulnerabilities.
						</li>
						<li>
							<strong>Performance Optimization:</strong> Learned techniques for optimizing both
							frontend load times and backend query performance.
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
