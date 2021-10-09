function drawCoins() {
    context.fillStyle = "#242424";
    context.font = "20px Arial";

    if (currentState != states.playing) {
        context.fillText("score : " + chara.score1, 10, 20);
    }
    
}
