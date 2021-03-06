// httpd/config.js
Config = {
	port: 9090,
	numChildren: 250,
	requestsPerChild: 100000,
	documentRoot: fs.exists('httpd/docroot') ? 'httpd/docroot' : '/usr/share/silkjs/httpd/docroot',
	directoryIndex: [
		'index.jst',
		'index.md',
		'index.html'
	],
//	mysql: {
//		host: 'localhost',
//		user: 'mschwartz',
//		passwd: '',
//		db: 'sim'
//	},
	lockFile: '/tmp/silkf.lock'
};
