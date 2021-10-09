function update() {
    if (currentState == states.playing) {
        obstacles.update();
       
        difficulty();
    }
    
    background.update();
    ground.update();
    coins.update();
    chara.update();
    
}
