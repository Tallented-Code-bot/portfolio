export interface Project {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	image: string;
	github?: string;
	demo?: string;
	slug: string;
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
