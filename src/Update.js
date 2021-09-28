function update() {
    if (currentState == states.playing) {
        obstacles.update();
        coins.update();
        difficulty();
    }
  
    background.update();
    ground.update();
    chara.update();
}
