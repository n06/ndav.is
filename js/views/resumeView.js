define(["jquery", "underscore", "backbone", "hbs!templates/resumeView.template"],
function($, _, Backbone, resumeTemplate) {
  return Backbone.View.extend({
    el : "#content-container",

    render : function() {
      this.$el.html(resumeTemplate());
    }
  });
});
