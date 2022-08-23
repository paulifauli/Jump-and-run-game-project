class Player {
    constructor(){
        this.triangleCleared 
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
    
    //this.Clear()

    }

    jump(){
        this.velocity =  -20
    }

    Dash(){

        // maybe here add a if statement that links the dash to a counter 
        // that counter increases when you collect a power up and decreases when you use the dash 
        
        this.x += 110
    }

    Clear(){
        /** 
         * when invoked draws a triangle on the canavs  //a certain area on the canvas is selected/defined 
         * this space is determined by the player position 
         * then just add to the filter function the area
         * then remove the triangle and set triangle to high opacity at first before you add the animation
        */
        console.log("cleared")

        

       this.triangleCleared = triangle(30, 75, 58, 20, 86, 75)

    }
}