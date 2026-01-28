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
