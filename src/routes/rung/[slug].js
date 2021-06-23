import json from '$lib/ladder.json'

function filterJson(value) {
	return json.filter((f) => f.rung == value);
}

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	const { slug } = params;
	result = filterJson(slug)
	if (result) {
		return {
			body: {
				result
			}
		};
	}
}