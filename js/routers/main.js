define([
  'jqueryMobile',
  'underscore',
  'backbone',
], function($, _, Backbone){
  var AppRouter = Backbone.Router.extend({
    routes: {
      'test': 'test',
	  '*actions': 'defaultAction'
    },

    test: function() {
	  console.log('#test called');
	  var ulist = $('#mainpage').find('ul');
	  ulist.append('<li>foo</li>').listview('refresh');
	  console.log('ulist: ', ulist);
	},

    defaultAction: function(actions){
      console.log('No route:', actions);
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});