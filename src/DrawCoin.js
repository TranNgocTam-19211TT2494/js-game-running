function drawCoins() {
    context.fillStyle = "#242424";
    context.font = "20px Arial";

    if (currentState != states.playing) {
        context.fillText("score : " + chara.score1, 10, 20);
    }

    if (currentState == states.lost) {
      

       
        // Mức điểm
        if (chara.score1 < 10) {
            context.fillText("Score1 : " + chara.score1, -13, 15);
        }
        else if (chara.score1 >= 10 && chara.score1 < 100) {
            context.fillText("Score1 : " + chara.score1, -26, 19);
        }
        else {
            context.fillText("Score1 : " + chara.score1, -39, 19);
        }
        context.restore();
    }
  
}
