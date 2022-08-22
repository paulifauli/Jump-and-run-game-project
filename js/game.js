class Game {

        constructor () {
            this.background = new Background()
            this.backgroundImages
            this.player = new Player ()
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
        }

        draw() {
            clear()
            this.background.draw()
            this.player.draw()
        }
}