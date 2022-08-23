class Obstacle {

    constructor (image) {
        this.image = image 
        this.x = 650
        this.y = 300 + random(0, 250)
        this.width = 50
        this.height = 50
    }

    draw() {
        this.x --
        image(this.image, this.x, this.y, this.width, this.height)
    }

    collision (playerPosition){
        let obstacleHitboxX = this.x + this.width / 2
		let obstacleHitboxY = this.y + this.height / 2
        // devided by two because you need the center to calculate a distance/the radius of the hitbox

        let playerHitboxX = playerPosition.x + playerPosition.width / 2
		let playerHitboxY = playerPosition.y + playerPosition.height / 2

        if (dist(obstacleHitboxX, obstacleHitboxY, playerHitboxX, playerHitboxY) > 25) {
			return false
		} else {
			// increment the score
			game.player.health -= 10
			console.log(game.player.health)
			return true
		}
	}

    }


