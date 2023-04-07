export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.bf8555eb.js","imports":["_app/immutable/entry/start.bf8555eb.js","_app/immutable/chunks/index.5011f632.js","_app/immutable/chunks/singletons.81273ca8.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.efd8661f.js","imports":["_app/immutable/entry/app.efd8661f.js","_app/immutable/chunks/index.5011f632.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
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
				id: "/palindrome-checker",
				pattern: /^\/palindrome-checker\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
