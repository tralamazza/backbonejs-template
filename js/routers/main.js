define([
  'jquery',
  'underscore',
  'backbone',
  'views/common/page'
], function($, _, Backbone, PageView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      'test': 'test',
      '*actions': 'defaultAction'
    },

    test: function() {
      var pv = new PageView({
        model: {
          page: {
            id: 'test',
            header: 'header',
            content: 'content',
            //footer: 'footer'
          }
        }
      });
      $('body').append(pv.render().el);
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