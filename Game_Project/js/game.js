
class Game {

    constructor () {
        this.background = new Background()
        this.backgroundImages
        this.player = new Player()
        this.playerImage
        //this.items = new Item()
        //this.itemsImage 
        this.obstacles =  []  //new Obstacle()
        this.obstacleImage
    }

    preload() {
        this.backgroundImages = [
                {
                  src: loadImage('assets/background/Layer_0011_0.png'),
                  x: 0,
                  speed: 0.2
                },
                {
                  src: loadImage('assets/background/Layer_0010_1.png'),
                  x: 0,
                  speed: 0.5
                },
                {
                  src: loadImage('assets/background/Layer_0009_2.png'),
                  x: 0,
                  speed: 0.5
                },
                {
                  src: loadImage('assets/background/Layer_0008_3.png'),
                  x: 0,
                  speed: 0.5
                },
                {
                  src: loadImage('assets/background/Layer_0007_Lights.png'),
                  x: 0,
                  speed: 1.2
                },
                {
                  src: loadImage('assets/background/Layer_0006_4.png'),
                  x: 0,
                  speed: 1
                },
                {
                  src: loadImage('assets/background/Layer_0005_5.png'),
                  x: 0,
                  speed: 1.8
                },
                {
                  src: loadImage('assets/background/Layer_0004_Lights.png'),
                  x: 0,
                  speed: 2
                },
                {
                  src: loadImage('assets/background/Layer_0003_6.png'),
                  x: 0,
                  speed: 2.5
                },
                {
                  src: loadImage('assets/background/Layer_0002_7.png'),
                  x: 0,
                  speed: 2.5
                },
                {
                  src: loadImage('assets/background/Layer_0001_8.png'),
                  x: 0,
                  speed: 3
                },
                {
                  src: loadImage('assets/background/Layer_0000_9.png'),
                  x: 0,
                  speed: 1
                }
              ]
        this.playerImage = loadImage("assets/player/Owlet_Monster.png")

        //this.itemsImage = loadImage("")

        this.obstacleImage = loadImage("assets/obstacles/Boar.png")
    }

    draw() {
        clear()
        this.background.draw()
        this.player.draw()

    
        if  (frameCount % random(120, 180).toFixed(0) === 0 ){
          this.obstacles.push(new Obstacle(this.obstacleImage))}
        

        // --> this removes filters the obstacles out of the obstacle array that is being drawn when they touch the player
        this.obstacles = this.obstacles.filter(obstacle => {
          if (obstacle.playerCollision(this.player) || obstacle.x < 0 - obstacle.width) {
            // last bit is to remove from the array when it leaves the screen so the array doesnt grow endlessly
            return false
          } else {
            // still have to implement a healthbar over html and stuff just do it with draw rectangle function one small one and a bigger one behind it and the width of the bigger on eincrements according to the health value
            return true
          }
        })


        // --> this removes filters the obstacles out of the obstacle array that is being drawn when they touch the triangel
        this.obstacles = this.obstacles.filter( obstacle => {
            if (this.player.triangleCollision(obstacle)) { 
              // player.triangleCollision()=== true when the obstacle touches the triangle 
            return false
          } else {
            return true
          }
        })

        this.obstacles.forEach(function(obstacle){obstacle.draw()})
    }
}