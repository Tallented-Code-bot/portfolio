export interface Project {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	image: string;
	github?: string;
	demo?: string;
	slug: string;
	year: number;
}

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
	year: number;
}

export interface SkillGroup {
	category: string;
	items: string[];
}

export interface ContactInfo {
	email: string;
	linkedin: string;
	github: string;
	resumeUrl?: string;
}

export interface PersonalInfo {
	name: string;
	title: string;
	bio: string;
	location?: string;
	profileImage?: string;
}

export interface SocialLinks {
	linkedin?: string;
	github?: string;
	twitter?: string;
	email?: string;
	website?: string;
}

export interface Experience {
	id: number;
	title: string;
	organization: string;
	location?: string;
	startDate: string;
	endDate: string;
	current?: boolean;
	description: string;
	achievements: string[];
	technologies?: string[];
}

export interface Education {
	id: number;
	institution: string;
	degree: string;
	field?: string;
	location?: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	coursework?: string[];
	achievements?: string[];
}
