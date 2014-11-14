// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
   initialize: function(){
    // this.on('add',playFirst());
    // this.on('enqueue', function(song){
    //   this.add(song);
    // });
    this.on('add',function(){
      if(this.length === 1){
        this.playFirst();
      }
    });

    this.on('ended', function(){
        this.ended();
    });

     this.on('dequeue', function(song){
        this.remove(song);
    });
  },

  playFirst: function(){
    this.at(0).play();
  },

  ended: function(){
    this.shift();
    if(this.length>=1){
      this.playFirst()
    }
  }
});
