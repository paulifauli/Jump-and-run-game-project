class Player {
    constructor(){
        this.itemCount = 0
        this.triangleShown = false
        this.health = 100
        this.gravity = 1    
        this.velocity = 0
        this.width = 50
        this.height = 65
        this.x = 50
        this.y = 600 - (this.height + 50)  //485
       /* Adaptive player positioning --> doesnt work see fix recording 2 vom jump and run starwars min. 4:30 +
       ,so war das in der lesson mit einer calculation vielleicht ist das more adaptive also wenns später iwi probleme gibt liegts hier dran 
        this.x = 50
        this.y = main.canvasHeight - this.height
        this.width = 50
        this.height = 65
        */
    }
    draw(){

    image(game.playerImage, this.x, this.y, this.width, this.height);

    this.velocity += this.gravity;
    this.x -= this.gravity;
    this.y += this.velocity;
    // this pushes the player down but also out of the canvas 
    if (this.y >= 600 - (this.height + 50)){
        this.y = 600 - (this.height + 50) };
     // this fixes that
    if (this.x <= 50){
        this.x =  50};
    

    if (this.triangleShown === true){
        return triangle(this.x + 50, this.y + 50, this.x+150, this.y+60, this.x+150, this.y-25)} 
 // define the different coordinates as variables to clean everything up
    }


    jump(){
        this.velocity =  -20
    }

    Dash(){
        // maybe here add a if statement that links the dash to a counter 
        // that counter increases when you collect a power up and decreases when you use the dash 
        this.x += 110
    }

   
    triangleCollision(obstacle){
    let obstacleHitboxX = obstacle.x + obstacle.width/2
	let obstacleHitboxY = obstacle.y + obstacle.height /2  

    if ((obstacleHitboxX < this.x + 150 && obstacleHitboxX > this.x + 50 ) && (obstacleHitboxY < this.y + 60 && obstacleHitboxY > this.y - 25) && (this.triangleShown === true)){
        console.log("hit")
        game.player.health += 10
        console.log(game.player.health)
    return true
    }else {
        return false
    }
    }
   



    /*
    clearTriangle(trianglePosition){
        let obstacleHitboxX = game.obstacle.x + game.obstacle.width / 2
		let obstacleHitboxY = game.obstacle.y + game.obstacles.height / 2


        this.x + 50, this.y + 50, this.x+150, this.y+60, this.x+150, this.y-25
        let triangleHitboxX = (this.x + 50) playerPosition.width / 2
		let triangleHitboxY = playerPosition.y + playerPosition.height / 2

        if (dist(obstacleHitboxX, obstacleHitboxY, playerHitboxX, playerHitboxY) > 25) {
			return false
		} else {
			// increment the score
			game.player.health -= 10
			console.log(game.player.health)
			return true
		}
    }
    */
    
}