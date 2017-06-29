var http = require('http');
var url = require('url');

var log = "login";
var pass = "login";

http.createServer(function(req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true);
	var pathname = q.pathname;
	var currentTime = new Date();
	var heures = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();

	if(heures < 10)
		heures = "0" + heures;
	if(minutes < 10)
		minutes = "0" + minutes;
	if(seconds < 10)
		seconds = "0" + seconds;

	var time = heures + ":" + minutes + ":" + seconds;

	switch (pathname) {
		case "/getHeure":
			res.write('{"heure": "'+ time +'"}');
			break;
		case "/estcequejailedroit":
			var login = q.query.login;
			var password = q.query.password;

			if(login == log && password == pass)
			{
				res.write('{"success": "ok"}');
			}
			else
			{
				res.write('{"success": "ko"}');
			}
			break;
		default:
			res.write('<a href="/getHeure">Afficher l\'heure</a><br><a href="/estcequejailedroit">Afficher si j\'ai le droit (ajouter "?login=login&password=login" a l\'url pour se connecter)</a>');
			break;
	}

	res.end();

	
}).listen(8080);