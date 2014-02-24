define(["jquery", "underscore", "backbone", "hbs!templates/homeView.template"],
function($, _, Backbone, homeTemplate) {
  return Backbone.View.extend({
    el : "#content-container",

    render : function() {
      this.$el.html(homeTemplate());
    }

  });
});
