export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/about": [3],
	"/blog": [~4],
	"/blog/category": [~6],
	"/blog/category/page/[page]": [~10],
	"/blog/category/[category]": [~7],
	"/blog/category/[category]/page": [~8],
	"/blog/category/[category]/page/[page]": [~9],
	"/blog/page": [~11],
	"/blog/page/[page]": [~12],
	"/blog/[post]": [5],
	"/contact": [13]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};