class Background {
draw () {
    //draw() tells the browser to display whatever is in it
    /*
    image(game.backgroundImages[0].src , 0 , 0, width, height)
    image(game.backgroundImages[1].src , 0 , 0, width, height)
    image(game.backgroundImages[2].src , 0 , 0, width, height)
    image(game.backgroundImages[3].src , 0 , 0, width, height)
    image(game.backgroundImages[4].src , 0 , 0, width, height)
    image(game.backgroundImages[5].src , 0 , 0, width, height)
    image(game.backgroundImages[6].src , 0 , 0, width, height)
    image(game.backgroundImages[7].src , 0 , 0, width, height)
    image(game.backgroundImages[8].src , 0 , 0, width, height)
    image(game.backgroundImages[9].src , 0 , 0, width, height)
    image(game.backgroundImages[10].src , 0 , 0, width, height)
    image(game.backgroundImages[11].src , 0 , 0, width, height)
    */
    
    game.backgroundImages.forEach(function (img){
        img.x -= img.speed
        image(img.src , img.x , 0, width, height)
        /* image() maps/renders an image onto the canvas and therefor requires 
        a source an x and y coordinate relating to the canvas and width and hight of the image*/
        image(img.src , img.x + width , 0, width, height)
        // because the image is fit precicely onto the canvas all we do here is set the same image
        // with the x coordinate of the original + the originals width so it is right next to it
        if (img.x <= -width){
            img.x = 0 
        }
        // and when the original moves out of frame the second picture follows like a loop

    })
}

}