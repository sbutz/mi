var express = require("express");
var pg = require("pg");
var bodyParser = require("body-parser");

var CON_STRING = process.env.DB_CON_STRING;
if (CON_STRING == undefined) {
	console.log("Error: Environment variable DB_CON_STRING not set!");
	process.exit(1);
}

pg.defaults.ssl = true;
var dbClient = new pg.Client(CON_STRING);
dbClient.connect();

var urlencodedParser = bodyParser.urlencoded({
	extended: false
});

const PORT = 3000;

var app = express();

app.use(urlencodedParser);
app.set("views", "views");
app.set("view engine", "pug");

app.get("/shoppingitems", function (req, res) {
	dbClient.query('SELECT * FROM shoppingitem ORDER BY name', function(err, result) {
		if (err) {
			console.log(err);
			return res.status(500).send('Internal Server Errror');
		}

		res.render("shoppingitems", { items: result.rows });
	});
});

app.post("/shoppingitems", function (req, res) {
	if (req.body.delete) {
		dbClient.query('DELETE FROM shoppingitem WHERE id = $1', [ req.body.id ],
			function(err, result) {
				if (err) {
					console.log(err);
					return res.status(500).send('Internal Server Errror');
				}

				res.redirect("/shoppingitems");
			}
		);
	} else if (req.body.name && req.body.name.length > 0) {
		dbClient.query('INSERT INTO shoppingitem (name) VALUES ($1)',
			[ req.body.name ], function (err, result) {
				if (err) {
					console.log(err);
					return res.status(500).send('Internal Server Errror');
				}

				res.redirect("/shoppingitems");
			}
		);
	}
});

app.listen(PORT, function () {
	console.log(`Shopping App listening on Port ${PORT}`);
});
