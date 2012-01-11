define([
  'jqueryMobile',
  'underscore',
  'backbone',
  'routers/main',
], function($, _, Backbone, Router){
  var initialize = function(){
    // Disables JQM routing (*) avoiding backbone conflict
    // Transitions must manually call $.mobile.changePage (**)
    // * http://jquerymobile.com/test/docs/api/globalconfig.html
    // ** http://jquerymobile.com/demos/1.0/docs/pages/page-navmodel.html
    $.mobile.hashListeningEnabled = false;

    Router.initialize();
  }

  return {
    initialize: initialize
  };
});