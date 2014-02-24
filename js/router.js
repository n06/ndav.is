define(['jquery', 'underscore', 'backbone', 'views/home'], function($, _, Backbone, HomeView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'homeView'
    }
  });

  var initialize = function(){
    var appRouter = new AppRouter;
    appRouter.on('homeView', function() {
      var homeView = new HomeView();
      homeView.render();
    });
  };
  return {
    initialize: initialize
  };
});
