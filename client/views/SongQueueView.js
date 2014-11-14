// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({




  tagName: "table class='table table-hover'",


  initialize: function() {
    this.collection.on('add remove',function(){

    this.render();
    },this);

    this.collection.on('ended',function(){

    this.render();
    },this);
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<h1>Queue<h1><th>Artist</th><th>Song</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }





});
