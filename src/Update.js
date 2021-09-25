function update() {
    if (currentState == states.playing) {
        obstacles.update();
        difficulty();
    }
    background.update();
    ground.update();
    chara.update();
}
