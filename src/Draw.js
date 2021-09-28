function draw() {
   

    collider[0].draw(context, 0, 0);
    collider[1].draw(context, 0, 0);
    collider[2].draw(context, 0, 0);
    collider[3].draw(context, 0, 0);
    collider[4].draw(context, 0, 0);
    collider[5].draw(context, 0, 0);

    character[0].draw(context, 0, 0);
    character[1].draw(context, 0, 0);
    character[2].draw(context, 0, 0);
    character[3].draw(context, 0, 0);
   
    
    coin[0].draw(context, 0, 0);
    coin[1].draw(context, 0, 0);
    // coin[2].draw(context, 0, 0);
    // coin[3].draw(context, 0, 0);
    // coin[4].draw(context, 0, 0);
    // coin[5].draw(context, 0, 0);
   

    context.clearRect(0, 0, WIDTH, HEIGHT);
    ground.clean();
    background.clean();

    background.draw();
    
    if (currentState == states.start) {
       
        speed = initial_speed;
        menu_sprite.draw(backgroundContext, 0, 0);
    }

    if (currentState == states.playing) {
        obstacles.draw();
        coins.draw();
    }
    
     
    drawScore();
    drawSoundControl();
    ground.draw();
  
    if (currentState != states.start) {
        chara.draw();
    }
   
}
