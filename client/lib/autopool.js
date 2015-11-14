

Template.index.events({
  'click .sign-up-button': function(event) {
    console.log("test");
    Router.go("/login");
  }
});