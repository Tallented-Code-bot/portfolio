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
		background: #1f2937;
		color: white;
		padding: 5rem 0;
	}

	.section-title {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 3rem;
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
