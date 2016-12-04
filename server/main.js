// UsersList
// author: Vittorio Vais 
// version: 1.0
// client/main.js
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish("userData", function () {
  if (this.userId) {
	return Meteor.users.find({}, {field: { username: 1}});
  } else {
    this.ready();
  }
});
