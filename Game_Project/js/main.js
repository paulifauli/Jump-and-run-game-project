const game = new Game();

function preload () {
game.preload ()
};

function setup () {
    const canvasHeight= 600
    const canvasWidth = 600
createCanvas(canvasHeight,canvasWidth)
};

function draw () {
game.draw()
};

function keyPressed () {
    if (keyCode === 32){
        game.player.jump()}
    if (keyCode === 16){
        setTimeout(function(){game.player.Dash()}, 200)}
    if (keyCode === 13 || player.itemCount > 0){
       setTimeout(function(){game.player.triangleShown = true}, 100)
       setTimeout(function(){game.player.triangleShown = false}, 700)
    } // else statement für errorsound wenn du ohne items ein skill usen willst 
    // kannst die time() p5 methode nutzen um die animation an die gleiche zeit zu heften 
    // vielleicht noch eine running action und dann die schweine ein wenig schneller ums schwerer zu machen 
    }