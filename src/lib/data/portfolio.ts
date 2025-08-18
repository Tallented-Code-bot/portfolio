import type { Project, SkillGroup, ContactInfo, PersonalInfo } from '$lib/types';

// Personal information
export const personalInfo: PersonalInfo = {
	name: 'Your Name',
	title: 'Full-Stack Developer',
	bio: "I'm a passionate full-stack developer with expertise in modern web technologies. I love creating efficient, scalable, and user-friendly applications that solve real-world problems. With a strong foundation in both frontend and backend development, I bring ideas to life through clean code and thoughtful design.",
	location: 'Your City, Your Country'
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
	email: 'your.email@example.com',
	linkedin: 'https://linkedin.com/in/yourprofile',
	github: 'https://github.com/yourusername',
	resumeUrl: '/resume.pdf'
};

// Navigation items
export const navigationItems = [
	{ href: '/', label: 'Home' },
	{ href: '/#projects', label: 'Projects' },
	{ href: '/#skills', label: 'Skills' },
	{ href: '/#contact', label: 'Contact' }
];
