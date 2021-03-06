import rotas from'../app/routes/rotas';
const express = require('express');
const cors = require('cors');

module.exports = function() {
	const app = express();
	app.use(express.json());
	 
	// configuraรงรตes:
	// ๐๐ผ๐๐ผ
	app.use(cors());
	app.set('port', 3333);
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	// middleware:
	// ๐๐ผ๐๐ผ
	app.use(express.urlencoded({extended: false}));
	app.use(express.static('./public'));

	rotas(app);

	return app;
};
