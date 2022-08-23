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
    if (keyCode === 13){
       // setTimeout(function(){game.player.Clear()}, 200)}
       setInterval(function(){game.player.Clear()}, 10)}
       function(){clearInterval(game.player.Clear())}
        //intervalID = setInterval(sayHello, 1000);
}