// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({
 //that : this,
  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay class="col-md-12"/>',


  initialize: function() {
    // var that = this;
    console.log()
    this.$el.on('ended', (function(){ this.model.ended() }).bind(this));

    //var that = this;
    // this.el.on('ended',this.model.ended())
    // this.listenTo(this.el , 'change:ended' , this.model.dequeue() );
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
