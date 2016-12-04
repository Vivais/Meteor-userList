// UsersList
// author: Vittorio Vais 
// version: 1.0

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// ACCOUNT
import { Accounts } from 'meteor/accounts-base';
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.subscribe("userData");

// USERLIST
Template.userList.helpers({
	'allUser' : function(){ 
		return Meteor.users.find({}, {sort: {username: 1}}); 
	},
	'selectedClass': function(){
		// selected if currentUser
		if( this._id == Session.get('currentUser') ) return "selected";
	}
});

Template.userList.events({
	'click .user': function(evt,t){
		var u = evt.target;
		$(u).removeClass("hover"); // remove the hover class
		Session.set('currentUser', this._id);
	},
	'mouseover li' : function(evt,t){
		var u = evt.target;
		// if not currentUser add hover class
		if( this._id != Session.get('currentUser') ) $(u).toggleClass("hover");
	},
	'mouseout li' : function(evt,t){
		var u = evt.target;
		// remove the hover
		$(u).removeClass("hover");
	}
});
