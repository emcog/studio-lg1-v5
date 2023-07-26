export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg","images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg","images/linus-nylund-Q5QspluNZmM-unsplash.jpg","images/studiolg1.jpg","link.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-8058e2ab.js","imports":["_app/immutable/start-8058e2ab.js","_app/immutable/chunks/index-965d4597.js","_app/immutable/chunks/singletons-c2ba8907.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/control-f5b05b5f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/posts.json",
				pattern: /^\/api\/posts\.json\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/posts.json/_server.js')
			},
			{
				id: "/api/posts/count",
				pattern: /^\/api\/posts\/count\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/posts/count/_server.js')
			},
			{
				id: "/api/posts/page/[page]",
				pattern: /^\/api\/posts\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./entries/endpoints/api/posts/page/_page_/_server.js')
			},
			{
				id: "/api/rss.xml",
				pattern: /^\/api\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/rss.xml/_server.js')
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/category",
				pattern: /^\/blog\/category\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/blog/category/page/[page]",
				pattern: /^\/blog\/category\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/blog/category/[category]",
				pattern: /^\/blog\/category\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/blog/category/[category]/page",
				pattern: /^\/blog\/category\/([^/]+?)\/page\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/blog/category/[category]/page/[page]",
				pattern: /^\/blog\/category\/([^/]+?)\/page\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false},{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/blog/page",
				pattern: /^\/blog\/page\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/blog/page/[page]",
				pattern: /^\/blog\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/blog/[post]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"post","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
