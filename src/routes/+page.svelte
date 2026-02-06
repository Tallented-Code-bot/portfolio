<script lang="ts">
	import ProjectItem from '$lib/components/ProjectItem.svelte';
</script>

<svelte:head>
	<title>Calvin Tallent</title>
	<meta name="description" content="Computer Science Student at Washington State University" />
</svelte:head>

<main>
	<section id="about">
		<h2>About Me</h2>
		<p>
			Hi! I'm Calvin, a Computer Science student at Washington State University, where I'm pursuing
			my undergraduate degree with an expected graduation in spring 2028.
		</p>

		<p>
			I enjoy many areas of computer science, incuding robotics, full-stack development, embedded
			programming, and game development. Currently I'm an active member of Wazzu Racing, a Formula
			SAE team that builds a race car each year in competition with universities from around the
			world. I'm also a member of the ACM, and I participate in Game Development Club at WSU.
		</p>

		<!-- <p>In the past I was</p> -->

		<!-- <p>
			I'm passionate about robotics, software development, and solving complex problems through
			code. Currently, I'm an active member of Wazzu Racing, WSU's Formula SAE Electric team, where
			I work on vehicle telemetry systems and develop tools to analyze performance data and optimize
			our electric race car.
		</p>

		<p>
			Before college, I spent several years as the lead programmer for Richland High School's FIRST
			Tech Challenge (FTC) robotics teams, where I developed autonomous control systems, implemented
			localization algorithms, and created driver-assist features that helped our teams achieve
			success in regional competitions.
		</p>

		<p>
			I enjoy working on projects that blend software with real-world applications, whether that's
			creating tools for my racing team, building utilities for my Linux setup, or developing web
			applications. When I'm not coding, you can find me tinkering with my Hyprland window manager
			configuration or exploring new technologies.
		</p> -->
	</section>

	<section id="projects" class="projects">
		<h2>Projects</h2>

		<div class="container">
			<div class="year-section">
				<h2 class="year-title">2025</h2>
				<ul class="projects-list">
					<ProjectItem
						title="GPS Track Generator"
						github="https://github.com/wazzu-racing/LapSim/tree/99d121f5b64487c19fdfc46bf09affe65f9946a2/gps-to-track-data"
						demo=""
					>
						This is a program I wrote for Wazzu Racing that takes the raw GPS coordinates from the
						car telemetry logs, extracts usuable segments of data, and fits arcs to the points to
						construct a track. The generated track can then be used to validate our lap simulator.
						It turns out that both our GPS data and acceleration data from the IMU is unreliable, so
						it was a challenge to select only the useful data.
					</ProjectItem>

					<ProjectItem
						title="Wazzu Racing Website"
						github="https://github.com/wazzu-racing/website"
						demo="https://wazzuracing.vcea.wsu.edu/"
					>
						This semester I created a website for Wazzu Racing. It's a basic website with some
						information about the club, etc. I used Svelte for the framework, and it's hosted on
						GitHub pages. Check it out at <a href="https://wazzuracing.vcea.wsu.edu"
							>wazzuracing.vcea.wsu.edu</a
						>.
					</ProjectItem>
					<ProjectItem title="" github="" demo=""></ProjectItem>
				</ul>
			</div>
			<div class="year-section">
				<h2 class="year-title">2024</h2>
				<ul class="projects-list">
					<ProjectItem title="RHS Robotics" github="" demo="">
						<p>
							In 2024 I continued as the primary programmer for Richland High School's FTC teams.
							Using my experience from previous years, I created a comprehensive autonomous control
							system which included localization, a vector path follower, and various PID controls.
							This allowed us to easily make the robot complete various autonomous tasks. In
							addition, I implemented a number of driver assist features, freeing up the drivers to
							focus more on strategy than on perfect driving.
						</p>
						<!-- <p>I also contributed a significant amount of</p> -->
					</ProjectItem>

					<ProjectItem
						title="Hyprland-flee-bravely"
						github="https://github.com/Tallented-Code-bot/hyprland-flee-bravely"
						demo=""
					>
						<p>
							I created a little tool for the <a href="https://hypr.land/">Hyprland</a> window
							manager called <em>hyprland-flee-bravely</em>. Whenever you're watching a video in
							picture-in-picture mode, the popout window sometimes covers something important. Then
							you have to move the window somewhere else to access what you're trying to access.
						</p>

						<p>
							Hyprland-flee-bravely fixes this. Whenever your mouse gets close to the popout window,
							the popout window flees from the mouse to a different part of the screen, allowing you
							to access whatever was behind the window. To actually interact with the window itself,
							just hold down a key.
						</p>
					</ProjectItem>
				</ul>
			</div>
			<div class="year-section">
				<h2 class="year-title">2023</h2>
				<ul class="projects-list">
					<ProjectItem title="RHS Robotics" github="" demo="">
						<p>
							In 2023 I became the primary programmer for Richland High School's varsity and JV FTC
							teams. To write code for both robots, I developed a modular system so that the same
							code could run on both robots, despite their differing hardware. For the varsity
							robot, I implemented a localization system to allow the robot to detemine its position
							at all times; then combined it with some computer vison to allow the robot to
							autonomously complete some tasks, increasing our score by 20%.
						</p>
						<p>
							Partially due to the autonomous code, we teamed up with Kamiakin High School, and
							ended up winning the tournament together!
						</p>
					</ProjectItem>
				</ul>
			</div>
			<div class="year-section">
				<h2 class="year-title">2022</h2>
				<ul class="projects-list">
					<ProjectItem title="RHS Robotics" github="" demo="">
						In 2022 I was the main programmer for Richland High School's JV <a
							href="https://www.firstinspires.org/programs/ftc/">FTC</a
						> team. As it was my first year, I was only able to implement a basic remote control system,
						with a small autonomous program to gain some additional points. We still did reasonably well
						in the competition, 9th place out of 17 teams.
					</ProjectItem>
				</ul>
			</div>
		</div>
	</section>
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 20px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.6;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.projects {
		padding: 2rem 0;
	}

	.year-section {
		margin-bottom: 3rem;
	}

	.year-title {
		font-size: 2rem;
		margin-bottom: 1rem;
		color: var(--color-text-primary);
		border-bottom: 1px solid var(--color-border-light);
		padding-bottom: 0.5rem;
	}

	.projects-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		main {
			padding: 1rem 15px;
		}

		.container {
			padding: 0 15px;
		}

		.year-title {
			font-size: 1.5rem;
		}
	}
</style>
