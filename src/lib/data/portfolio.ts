import type { Project, SkillGroup, ContactInfo, PersonalInfo } from '$lib/types';

// Personal information
export const personalInfo: PersonalInfo = {
	name: 'Calvin Tallent',
	title: 'Full-Stack Developer & Problem Solver',
	bio: "Hey there! I'm Calvin, a full-stack developer who loves turning complex problems into elegant solutions. I'm passionate about building web applications that are not just functional, but delightful to use. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or tinkering with side projects that push my skills to the next level.",
	location: 'United States'
};

// Projects data
export const projects: Project[] = [
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

// Skills data
export const skills: SkillGroup[] = [
	{
		category: 'Frontend',
		items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Svelte', 'Vue.js']
	},
	{
		category: 'Backend',
		items: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB']
	},
	{
		category: 'Tools',
		items: ['Git', 'Docker', 'AWS', 'Figma', 'Webpack', 'Vite']
	},
	{
		category: 'Other',
		items: ['REST APIs', 'GraphQL', 'Testing', 'CI/CD', 'Agile']
	}
];

// Contact information
export const contactInfo: ContactInfo = {
	email: 'calvin@example.com',
	linkedin: 'https://linkedin.com/in/calvin-tallent',
	github: 'https://github.com/calvintallent',
	resumeUrl: '/resume.pdf'
};

// Navigation items
export const navigationItems = [
	{ href: '/', label: 'Home' },
	{ href: '/#projects', label: 'Projects' },
	{ href: '/#skills', label: 'Skills' },
	{ href: '/#contact', label: 'Contact' }
];
