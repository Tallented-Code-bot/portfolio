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
