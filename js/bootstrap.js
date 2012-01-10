require.config({
  paths: {
    jquery: 'libs/jquery/jquery-1.7.1.min',
	jqueryMobile: 'libs/jquery.mobile/require-jquery.mobile',
	underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-optamd3'
  }
});

require(['app'], function(App){
	App.initialize();
});