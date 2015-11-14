Router.route('/', function() {
	this.layout("applicationLayout")
	this.render("index");
});

Router.route('/login', function() {
	this.layout("applicationLayout")
	this.render("login");
});

Router.route('/maps', function() {
	this.layout("applicationLayout")
	this.render("maps");
});

Router.route('/matches', function() {
	this.layout("applicationLayout")
	this.render("matches");
});