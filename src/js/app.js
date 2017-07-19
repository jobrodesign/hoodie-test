// var riot = require('riot');
import riot from 'riot';
import route from 'riot-route';
import '../tags/app.tag';

console.log('riot version', riot.version);
console.log('riot route', route);



var Hoodie = require('@hoodie/client');
var hoodie = new Hoodie({
	url: 'http://127.0.0.1:8080',
	PouchDB: require('pouchdb-browser').default
});

console.log('hoodie', hoodie);

riot.mount('app', hoodie);

