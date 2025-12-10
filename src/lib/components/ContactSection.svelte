<script lang="ts">
	import type { ContactInfo } from '$lib/types';

	export let contactInfo: ContactInfo;
</script>

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
						<a href="mailto:{contactInfo.email}">{contactInfo.email}</a>
					</div>
					<div class="contact-item">
						<span class="contact-label">LinkedIn:</span>
						<a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
							{contactInfo.linkedin.replace('https://', '')}
						</a>
					</div>
					<div class="contact-item">
						<span class="contact-label">GitHub:</span>
						<a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
							{contactInfo.github.replace('https://', '')}
						</a>
					</div>
				</div>
				{#if contactInfo.resumeUrl}
					<div class="resume-download">
						<a href={contactInfo.resumeUrl} class="btn btn-primary" download>Download Resume</a>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.contact {
		background: var(--gradient-hero);
		color: var(--color-text-white);
		padding: 5rem 0;
		position: relative;
		overflow: hidden;
	}

	.contact::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background:
			radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
			radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
		pointer-events: none;
	}

	.section-title {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 3rem;
		color: var(--color-text-white);
	}

	.contact-content {
		max-width: 600px;
		margin: 0 auto;
		text-align: center;
		position: relative;
		z-index: 1;
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
		color: var(--color-accent-light);
		text-decoration: none;
		transition: all var(--transition-fast);
		font-weight: 500;
	}

	.contact-item a:hover {
		color: var(--color-text-white);
		text-decoration: underline;
	}

	.resume-download {
		margin-top: 2rem;
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
		background: var(--color-accent);
		color: var(--color-text-white);
		border-color: var(--color-accent);
		transform: translateY(-2px);
		box-shadow: var(--shadow-lg);
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.section-title {
			font-size: 2rem;
		}

		.contact-item {
			flex-direction: column;
			gap: 0.5rem;
		}

		.contact-label {
			min-width: auto;
		}

		.container {
			padding: 0 15px;
		}
	}
</style>
