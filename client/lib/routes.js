Router.route('/', function() {
	this.render("index");
});

Router.route('/login', function() {
	this.render("login");
});

Router.route('/maps', function() {
	this.render("maps");
});

Router.route('/matches', function() {
	this.render("matches");
});