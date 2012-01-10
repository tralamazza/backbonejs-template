define([
  'jqueryMobile',
  'underscore',
  'backbone',
  'routers/main',
], function($, _, Backbone, Router){
  var initialize = function(){
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});