// src/routes/+layout.js
export const prerender = true;

// src/routes/+layout.js
export const load = ({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
};