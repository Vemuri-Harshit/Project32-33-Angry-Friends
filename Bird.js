class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird1.png");
    this.image.scale = 0.9;
    this.trail = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>8){

      var pos = [this.body.position.x,this.body.position.y];
    this.trajectory.push(pos);
  }

    for(var i = 0;i<this.trajectory.length;i++){
      image(this.trail,this.trajectory[i][0],this.trajectory[i][1]);
    }
  }
}
