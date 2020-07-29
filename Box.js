class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.width =width;
      this.height = height;
      //this.image = loadImage("sprites/wood1.png");
      this.Visibility = 255;
    }
    display(){
      if(this.body.speed < 5){
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
      super.display();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5
        tint(255,this.Visibility);
        pop();
      }
      
      
      
    }
    scorei(){
      if(this.Visibility<= 0 && this.Visibility>=-100){
        score++
      }

    }
  };