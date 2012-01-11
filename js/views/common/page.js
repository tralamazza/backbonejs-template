define([
  'jqueryMobile',
  'underscore',
  'backbone',
  'text!templates/common/page.html'
], function($, _, Backbone, pageTemplate){
  var PageView = Backbone.View.extend({
    render: function() {
      $(this.el).html(_.template(pageTemplate, this.model));
	  return this;
    }
  });
  return PageView;
});