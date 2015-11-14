if (Meteor.isClient) {
  // This code only runs on the client
  Template.matches.helpers({
    users: [
      { 
        name: "Brad Pitt",
        id: 123,
        image:"img/Brad.jpg"
      },
      { 
        name: "Jennifer Lawrence",
        id: 123,
        image: "img/Jennifer.jpg"
      },
      { 
        name: "Taylor Swift",
        id: 123,
        image: "img/Taylor.jpeg"
      },
      { 
        name: "Samuel L.",
        id: 123,
        image: "img/Samuel.jpg"
      }
    ]
  });
}
