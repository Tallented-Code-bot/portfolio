import type { Project } from '$lib/types';

// Extended project data for detail pages
export interface ProjectDetail extends Project {
	overview: string[];
	techStack: Array<{
		category: string;
		items: string[];
	}>;
	features: Array<{
		icon: string;
		title: string;
		description: string;
	}>;
	challenges: Array<{
		title: string;
		challenge: string;
		solution: string;
	}>;
	lessons: string[];
}

export const projectDetails: Record<string, ProjectDetail> = {
	ecommerce: {
		id: 1,
		title: 'E-Commerce Platform',
		description: 'A full-stack e-commerce solution built with React and Node.js',
		technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
		image: '/projects/ecommerce.jpg',
		github: 'https://github.com/username/ecommerce',
		demo: 'https://demo.example.com',
		slug: 'ecommerce',
		overview: [
			'This e-commerce platform is a full-featured online shopping solution built with modern web technologies. It includes user authentication, product management, shopping cart functionality, secure payment processing with Stripe, and an admin dashboard for managing orders and inventory.',
			'The application features a responsive design that works seamlessly across desktop and mobile devices, providing an optimal shopping experience for all users.'
		],
		techStack: [
			{
				category: 'Frontend',
				items: ['React 18', 'TypeScript', 'Redux Toolkit', 'React Router', 'Styled Components', 'Axios']
			},
			{
				category: 'Backend',
				items: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM', 'JWT Authentication', 'Bcrypt']
			},
			{
				category: 'Payment & Deployment',
				items: ['Stripe API', 'Cloudinary (Images)', 'Heroku', 'MongoDB Atlas', 'GitHub Actions']
			}
		],
		features: [
			{
				icon: '🛒',
				title: 'Shopping Cart',
				description: 'Persistent shopping cart with quantity management and real-time price updates'
			},
			{
				icon: '💳',
				title: 'Secure Payments',
				description: 'Integrated Stripe payment processing with support for multiple payment methods'
			},
			{
				icon: '👤',
				title: 'User Authentication',
				description: 'Secure user registration, login, and profile management with JWT tokens'
			},
			{
				icon: '📊',
				title: 'Admin Dashboard',
				description: 'Comprehensive admin panel for managing products, orders, and user accounts'
			},
			{
				icon: '🔍',
				title: 'Product Search',
				description: 'Advanced search and filtering capabilities with category-based navigation'
			},
			{
				icon: '📱',
				title: 'Responsive Design',
				description: 'Mobile-first responsive design ensuring great UX across all devices'
			}
		],
		challenges: [
			{
				title: 'Real-time Inventory Management',
				challenge: 'Ensuring accurate inventory counts when multiple users are shopping simultaneously.',
				solution: 'Implemented optimistic locking in MongoDB and real-time inventory updates using WebSocket connections.'
			},
			{
				title: 'Payment Security',
				challenge: 'Securely handling sensitive payment information.',
				solution: "Integrated Stripe's secure payment processing, ensuring PCI compliance by never storing card details on our servers."
			},
			{
				title: 'Performance Optimization',
				challenge: 'Loading product catalogs quickly with high-resolution images.',
				solution: 'Implemented lazy loading, image optimization with Cloudinary, and pagination for large product sets.'
			}
		],
		lessons: [
			'<strong>Full-stack Integration:</strong> Gained experience in seamlessly connecting frontend and backend systems with proper error handling and state management.',
			'<strong>Payment Processing:</strong> Learned to implement secure payment flows and handle various payment scenarios including failures and refunds.',
			'<strong>Database Design:</strong> Designed efficient MongoDB schemas for complex e-commerce relationships between users, products, and orders.',
			'<strong>Security Best Practices:</strong> Implemented authentication, authorization, and data validation to protect against common web vulnerabilities.',
			'<strong>Performance Optimization:</strong> Learned techniques for optimizing both frontend load times and backend query performance.'
		]
	},
	taskapp: {
		id: 2,
		title: 'Task Management App',
		description: 'A collaborative task management application with real-time updates',
		technologies: ['Svelte', 'Firebase', 'TypeScript'],
		image: '/projects/taskapp.jpg',
		github: 'https://github.com/username/taskapp',
		demo: 'https://taskapp.example.com',
		slug: 'taskapp',
		overview: [
			'This task management application is designed to help teams collaborate effectively on projects. Built with Svelte and Firebase, it provides real-time synchronization across all connected devices, ensuring that team members are always up-to-date with the latest project status.',
			'The application features an intuitive drag-and-drop interface, customizable project boards, and comprehensive task tracking with due dates, priorities, and team member assignments.'
		],
		techStack: [
			{
				category: 'Frontend',
				items: ['Svelte', 'SvelteKit', 'TypeScript', 'CSS3 (Custom Properties)', 'Svelte Stores', 'Svelte Transitions']
			},
			{
				category: 'Backend & Database',
				items: ['Firebase Firestore', 'Firebase Auth', 'Firebase Hosting', 'Cloud Functions', 'Firebase Storage']
			},
			{
				category: 'Features & Libraries',
				items: ['Real-time Updates', 'Drag & Drop API', 'PWA Support', 'Responsive Design', 'Email Notifications']
			}
		],
		features: [
			{
				icon: '📋',
				title: 'Kanban Boards',
				description: 'Organize tasks in customizable columns with drag-and-drop functionality'
			},
			{
				icon: '⚡',
				title: 'Real-time Sync',
				description: 'Instant updates across all devices when team members make changes'
			},
			{
				icon: '👥',
				title: 'Team Collaboration',
				description: 'Assign tasks to team members, add comments, and track progress together'
			},
			{
				icon: '📅',
				title: 'Due Dates & Priorities',
				description: 'Set deadlines and priority levels to keep projects on track'
			},
			{
				icon: '🔍',
				title: 'Search & Filter',
				description: 'Quickly find tasks with powerful search and filtering options'
			},
			{
				icon: '📊',
				title: 'Progress Tracking',
				description: 'Visual progress indicators and analytics for project completion'
			}
		],
		challenges: [
			{
				title: 'Real-time Synchronization',
				challenge: 'Ensuring consistent data across multiple users editing simultaneously without conflicts.',
				solution: "Implemented Firebase Firestore's real-time listeners with optimistic updates and conflict resolution strategies."
			},
			{
				title: 'Drag and Drop Performance',
				challenge: 'Maintaining smooth drag-and-drop interactions while updating the database in real-time.',
				solution: 'Used local state management with debounced database updates and visual feedback for immediate user response.'
			},
			{
				title: 'Mobile Responsiveness',
				challenge: 'Creating a touch-friendly interface that works well on mobile devices.',
				solution: 'Implemented touch gestures for mobile and redesigned the UI to be mobile-first with larger touch targets.'
			}
		],
		lessons: [
			'<strong>Real-time Applications:</strong> Mastered Firebase Firestore for building responsive, real-time collaborative applications with offline support.',
			'<strong>Svelte Framework:</strong> Gained deep expertise in Svelte\'s reactive system, stores, and component lifecycle for building efficient web applications.',
			'<strong>State Management:</strong> Learned to handle complex application state across multiple components with proper data flow and updates.',
			'<strong>User Experience:</strong> Developed skills in creating intuitive interfaces with smooth animations and responsive feedback.',
			'<strong>Collaborative Features:</strong> Understanding of building features that enable effective team collaboration and communication.'
		]
	},
	weather: {
		id: 3,
		title: 'Weather Dashboard',
		description: 'A responsive weather dashboard with location-based forecasts',
		technologies: ['Vue.js', 'OpenWeather API', 'Chart.js'],
		image: '/projects/weather.jpg',
		github: 'https://github.com/username/weather',
		demo: 'https://weather.example.com',
		slug: 'weather',
		overview: [
			'This weather dashboard provides comprehensive weather information with a clean, modern interface. Users can search for any location worldwide and get detailed current weather conditions, 5-day forecasts, and historical weather patterns displayed through interactive charts.',
			'The application features automatic location detection, customizable units, and data visualization that helps users understand weather trends at a glance. Built with performance in mind, it provides fast, accurate weather data from multiple reliable sources.'
		],
		techStack: [
			{
				category: 'Frontend',
				items: ['Vue.js 3', 'Vue Composition API', 'TypeScript', 'Pinia (State Management)', 'Vue Router', 'Vite']
			},
			{
				category: 'APIs & Data',
				items: ['OpenWeatherMap API', 'Geolocation API', 'Chart.js', 'Axios', 'Local Storage API']
			},
			{
				category: 'Styling & UX',
				items: ['CSS3 (Grid & Flexbox)', 'CSS Animations', 'Responsive Design', 'Dark/Light Theme', 'Progressive Web App']
			}
		],
		features: [
			{
				icon: '🌍',
				title: 'Location Search',
				description: 'Search weather for any city worldwide with auto-complete suggestions'
			},
			{
				icon: '📍',
				title: 'Auto-Detection',
				description: 'Automatically detect user\'s location for instant weather information'
			},
			{
				icon: '📊',
				title: 'Interactive Charts',
				description: 'Visual temperature trends, precipitation, and humidity charts'
			},
			{
				icon: '📅',
				title: '5-Day Forecast',
				description: 'Detailed weather predictions with hourly breakdown'
			},
			{
				icon: '🌓',
				title: 'Theme Toggle',
				description: 'Beautiful dark and light themes with smooth transitions'
			},
			{
				icon: '📱',
				title: 'PWA Support',
				description: 'Install as a mobile app with offline weather data caching'
			}
		],
		challenges: [
			{
				title: 'API Rate Limiting',
				challenge: 'Managing API calls efficiently while providing real-time data updates.',
				solution: 'Implemented smart caching with expiration times and batched API requests to minimize calls while keeping data fresh.'
			},
			{
				title: 'Data Visualization Performance',
				challenge: 'Rendering smooth charts with large datasets without impacting performance.',
				solution: 'Used Chart.js with data decimation and lazy loading to handle large weather datasets efficiently.'
			},
			{
				title: 'Geolocation Reliability',
				challenge: 'Handling cases where geolocation fails or is blocked by users.',
				solution: 'Implemented fallback location detection using IP-based location services and graceful error handling.'
			}
		],
		lessons: [
			'<strong>API Integration:</strong> Mastered working with external weather APIs, handling rate limits, and implementing efficient data caching strategies.',
			'<strong>Data Visualization:</strong> Learned to create meaningful charts and graphs that help users understand complex weather data patterns.',
			'<strong>Vue.js Ecosystem:</strong> Gained expertise in Vue 3\'s Composition API, Pinia for state management, and building reactive applications.',
			'<strong>Progressive Web Apps:</strong> Implemented PWA features including offline functionality, app installation, and background data sync.',
			'<strong>User Experience:</strong> Created intuitive interfaces with smooth animations, theme switching, and responsive design principles.',
			'<strong>Performance Optimization:</strong> Learned techniques for optimizing data-heavy applications with efficient rendering and smart caching.'
		]
	},
	portfolio: {
		id: 4,
		title: 'Portfolio Website',
		description: 'This responsive portfolio website built with SvelteKit',
		technologies: ['SvelteKit', 'TypeScript', 'CSS3'],
		image: '/projects/portfolio.jpg',
		github: 'https://github.com/username/portfolio',
		demo: 'https://portfolio.example.com',
		slug: 'portfolio',
		overview: [
			'This portfolio website serves as a comprehensive showcase of my skills, projects, and experience as a full-stack developer. Built with modern web technologies, it features a clean, responsive design that works seamlessly across all devices.',
			'The site includes detailed project pages, an interactive skills section, and a contact form with integrated resume download. Every aspect of the design focuses on providing an excellent user experience while demonstrating technical proficiency.'
		],
		techStack: [
			{
				category: 'Frontend Framework',
				items: ['SvelteKit', 'Svelte 5', 'TypeScript', 'Vite', 'CSS3 (Modern Features)']
			},
			{
				category: 'Styling & Design',
				items: ['CSS Grid & Flexbox', 'CSS Custom Properties', 'Responsive Design', 'CSS Animations', 'Mobile-First Approach']
			},
			{
				category: 'Development & Deployment',
				items: ['ESLint & Prettier', 'TypeScript', 'Git Version Control', 'Netlify/Vercel', 'Performance Optimization']
			}
		],
		features: [
			{
				icon: '🎨',
				title: 'Modern Design',
				description: 'Clean, professional design with smooth animations and transitions'
			},
			{
				icon: '📱',
				title: 'Fully Responsive',
				description: 'Optimized for all screen sizes from mobile phones to desktop displays'
			},
			{
				icon: '⚡',
				title: 'Fast Performance',
				description: 'Optimized loading times with lazy loading and efficient code splitting'
			},
			{
				icon: '🔍',
				title: 'SEO Optimized',
				description: 'Proper meta tags, semantic HTML, and search engine optimization'
			},
			{
				icon: '🎯',
				title: 'Interactive Elements',
				description: 'Hover effects, smooth scrolling, and engaging user interactions'
			},
			{
				icon: '📄',
				title: 'Project Showcase',
				description: 'Detailed project pages with comprehensive information and links'
			}
		],
		challenges: [
			{
				title: 'Performance Optimization',
				challenge: 'Ensuring fast load times while maintaining rich visual elements and animations.',
				solution: 'Implemented lazy loading for images, code splitting for routes, and optimized CSS with minimal runtime overhead.'
			},
			{
				title: 'Cross-Browser Compatibility',
				challenge: 'Making sure the site works consistently across different browsers and devices.',
				solution: 'Used modern CSS features with appropriate fallbacks and thorough testing across multiple browsers and devices.'
			},
			{
				title: 'Accessibility',
				challenge: 'Creating an accessible experience for users with disabilities.',
				solution: 'Implemented proper ARIA labels, semantic HTML structure, keyboard navigation, and screen reader compatibility.'
			}
		],
		lessons: [
			'<strong>SvelteKit Mastery:</strong> Gained deep understanding of SvelteKit\'s routing, server-side rendering, and build optimization features.',
			'<strong>Modern CSS:</strong> Leveraged advanced CSS features like Grid, Custom Properties, and modern layout techniques for responsive design.',
			'<strong>Performance Engineering:</strong> Learned to optimize web performance through efficient code organization, image optimization, and smart loading strategies.',
			'<strong>User Experience Design:</strong> Developed skills in creating intuitive navigation, engaging animations, and professional visual hierarchy.',
			'<strong>Accessibility Standards:</strong> Understanding of WCAG guidelines and implementing inclusive design practices for better user accessibility.',
			'<strong>SEO Best Practices:</strong> Learned to structure content and metadata for optimal search engine visibility and social media sharing.'
		]
	}
};
