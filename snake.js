function Snake() {
  this.x = 20;
  this.y = 0;
  this.xspeed = 0;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        //console.log('starting over');
        this.total = 0;
        this.tail = [];
        this.xspeed = 0;
        this.yspeed = 0;
        gameState = 0;
        count2 = count;
        count = 0;
        if(count2 > rekord)
          rekord = count2;
          //text("*Novi rekord*\n", width/2 - 120, height/2 - 30);

      }
    }
  }

  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function(r, g, b, o) {
    fill(r, g, b, o);
    noStroke();
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);

  }

  this.currentDir = function(){
    if(this.xspeed == 0 && this.yspeed == -1)
      return "up";
    else if(this.xspeed == 0 && this.yspeed == 1)
      return "down";
    else if(this.xspeed == 1 && this.yspeed == 0)
      return "right";
    else if(this.xspeed == -1 && this.yspeed == 0)
      return "left";
    else{}
  }
}
