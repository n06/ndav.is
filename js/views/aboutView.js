define(["jquery", "underscore", "backbone", "hbs!templates/aboutView.template"],
function($, _, Backbone, aboutTemplate) {
  return Backbone.View.extend({
    el : "#content-container",

    render : function() {
      this.$el.html(aboutTemplate());
    }
  });
});

