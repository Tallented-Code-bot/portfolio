import type {
	Project,
	SkillGroup,
	ContactInfo,
	PersonalInfo,
	Experience,
	Education
} from '$lib/types';

// Personal information
export const personalInfo: PersonalInfo = {
	name: 'Calvin Tallent',
	title: 'Computer Science Student',
	bio: 'computer science student at washington state university',
	location: 'Washington State'
};

// Projects data
export const projects: Project[] = [
	{
		id: 1,
		title: 'Autonomous Robot Control System',
		description:
			'Advanced robot control system with precision position tracking (±1 inch accuracy) using sensor fusion, vector path following, and asynchronous command execution for parallel operations.',
		technologies: ['Java', 'Kotlin', 'Robotics', 'Sensor Fusion', 'Path Planning'],
		image: '/projects/robot.jpg',
		github: 'https://github.com/calvintallent',
		demo: '',
		slug: 'robot-control',
		year: 2024
	},
	{
		id: 2,
		title: 'Scratch to Rust Compiler',
		description:
			'A compiler that fetches Scratch projects via API and transpiles them to Rust, supporting concurrent script execution and implementing a Rust version of the Scratch standard library.',
		technologies: ['Rust', 'Compiler Design', 'API Integration', 'Concurrency'],
		image: '/projects/compiler.jpg',
		github: 'https://github.com/calvintallent',
		demo: '',
		slug: 'scratch-compiler',
		year: 2024
	},
	{
		id: 3,
		title: 'Planetarium Space Game',
		description:
			"Immersive space game built for Columbia Basin College's planetarium system, optimized to handle the extreme resolution requirements of planetarium displays.",
		technologies: ['Unity', 'C#', 'Game Development', 'Performance Optimization'],
		image: '/projects/planetarium.jpg',
		github: 'https://github.com/calvintallent',
		demo: '',
		slug: 'planetarium-game',
		year: 2023
	},
	{
		id: 4,
		title: 'Procedural Image Generator',
		description:
			'High-performance procedural image generator using Perlin and other noise functions, optimized to handle large image generation efficiently.',
		technologies: ['Python', 'Rust', 'Procedural Generation', 'Noise Functions'],
		image: '/projects/procgen.jpg',
		github: 'https://github.com/calvintallent',
		demo: '',
		slug: 'procedural-generator',
		year: 2023
	},
	{
		id: 5,
		title: 'Image to Fourier Series Converter',
		description:
			'Converts SVG images into Fourier Series-based functions that recreate the image when graphed, bridging visual art with mathematical representation.',
		technologies: ['Python', 'Mathematics', 'SVG Processing', 'Fourier Analysis'],
		image: '/projects/fourier.jpg',
		github: 'https://github.com/calvintallent',
		demo: '',
		slug: 'fourier-converter',
		year: 2023
	}
];

// Skills data
export const skills: SkillGroup[] = [
	{
		category: 'Programming Languages',
		items: ['Python', 'Rust', 'Java', 'C++', 'Kotlin', 'JavaScript', 'Bash', 'C#']
	},
	{
		category: 'Web Development',
		items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Svelte', 'React']
	},
	{
		category: 'Data & Visualization',
		items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn']
	},
	{
		category: 'Tools & Systems',
		items: ['Linux', 'Git', 'Vim', 'Emacs', 'Unity', 'CAD']
	},
	{
		category: 'Specialized',
		items: [
			'Robotics',
			'Sensor Fusion',
			'Compiler Design',
			'Performance Optimization',
			'System Administration'
		]
	}
];

// Contact information
export const contactInfo: ContactInfo = {
	email: 'calvin.tallent@wsu.edu',
	linkedin: 'https://linkedin.com/in/calvin-tallent',
	github: 'https://github.com/calvintallent',
	resumeUrl: '/resume.pdf'
};

// Experience data
export const experience: Experience[] = [
	{
		id: 1,
		title: 'Data Acquisition & Vehicle Dynamics Engineer',
		organization: 'WAZZU Racing',
		startDate: 'August 2025',
		endDate: 'Present',
		current: true,
		description:
			'Contributing to the development of vehicle performance analysis systems for the Formula SAE racing team.',
		achievements: [
			'Implemented noise reduction strategies for lap simulator sensor data',
			'Working on vehicle dynamics analysis and data acquisition systems'
		],
		technologies: ['Data Analysis', 'Sensor Systems', 'Performance Optimization']
	},
	{
		id: 2,
		title: 'Designer, Lead Programmer & Drive Director',
		organization: 'RHS FTC Robotics Team',
		startDate: 'September 2022',
		endDate: 'March 2025',
		description:
			'Led programming efforts and contributed to mechanical design for competitive robotics team.',
		achievements: [
			'Designed and manufactured ~25% of robot parts, reducing lead designer workload',
			'Programmed autonomous operation and driver assistance features, increasing points scored by ~50%',
			'Directed drivers on strategy and coordinated with alliance partners'
		],
		technologies: ['Java', 'Kotlin', 'CAD', 'Robotics', 'Control Systems']
	},
	{
		id: 3,
		title: 'Student Technician',
		organization: 'Richland School District IT',
		startDate: 'July 2023',
		endDate: 'August 2024',
		description:
			'Provided technical support and hardware/software maintenance for educational technology systems.',
		achievements: [
			'Diagnosed and repaired hardware and software on student Chromebooks',
			'Significantly improved ticket response times, freeing senior technicians for higher-priority tasks',
			'Trained new student technicians in required skills and procedures'
		],
		technologies: ['Hardware Repair', 'Technical Support', 'Training']
	}
];

// Education data
export const education: Education[] = [
	{
		id: 1,
		institution: 'Washington State University',
		degree: 'B.S. in Computer Science',
		location: 'Pullman, WA',
		startDate: 'August 2025',
		endDate: 'May 2028',
		coursework: [
			'C++ Data Structures',
			'Advanced Data Structures',
			'Automata and Formal Languages'
		],
		achievements: ['Washington State Opportunity Scholar']
	},
	{
		id: 2,
		institution: 'Richland High School & Columbia Basin College',
		degree: 'High School Diploma with Dual Credit',
		location: 'Richland, WA',
		startDate: 'September 2021',
		endDate: 'June 2025',
		achievements: [
			'National Merit Commended Student',
			'National Honor Society Member (May 2023 - June 2025)',
			'National Latin Exam - Beginning & Intermediate, Maxima Cum Laude (2022-2023)'
		]
	}
];

// Navigation items
export const navigationItems = [{ href: '/', label: 'Home' }];
