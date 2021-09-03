module.exports = {
	'collections-config': {
		posts: {
			path: 'content/posts',
			url: '/[slug]',
			output: true
		},
		categories: {
			path: 'categories/posts',
			url: '/categories/[slug]',
			output: true
		}
	},
	paths: {
		'static': 'assets',
		uploads: 'assets/uploads',
		collections: 'content'
	},
	_comments: {
		title: 'Sum up the page!'
	},
	_instance_values: {
		uuid: 'UUID',
		created_at: 'NOW'
	},
	timezone: 'Pacific/Auckland',
	generator: {
		name: 'nuxt',
		version: '0.0.0',
		metadata: {
			markdown: 'markdown-it'
		}
	}
};
