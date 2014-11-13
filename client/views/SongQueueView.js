// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({




  tagName: "table class='table table-hover'",


  initialize: function() {
    this.collection.on('add remove',function(){

    this.render();
    console.log("logging")
    },this);

    this.collection.on('ended',function(){

    this.render();
    console.log("logging")
    },this);
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Library Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }





});
