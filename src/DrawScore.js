function drawScore() {
    context.fillStyle = "#242424";
    context.font = "20px Arial";

    if (currentState == states.playing) {
        context.fillText("score : " + chara.score, 10, 20);
    }

    if (currentState == states.lost) {
        context.fillStyle = "#e74c3c";
        context.fillRect(Math.floor(WIDTH / 2 - 22), Math.floor(HEIGHT / 2 - 45), 100, 50);
        context.save();
        context.translate(Math.floor(WIDTH / 2), Math.floor(HEIGHT / 2 - 30));
        context.fillStyle = "#fff";

        // // Lưu điểm
        // if (chara.score > rank) {
        //     context.fillText("New record!", -145, -65);
        // }
        // else if (rank < 10) {
       
        //     context.fillText("Best score " + rank, -10, -100);
        // }
        // else if (rank >= 10 && rank < 100) {
        //     context.fillText("Best score " + rank, -150, -65);
        // } else {
        //     context.fillText("Best score " + rank, -165, -65);
        // }

        // Mức điểm
        if (chara.score < 10) {
            context.fillText("Score : " + chara.score, -13, 15);
        }
        else if (chara.score >= 10 && chara.score < 100) {
            context.fillText("Score : " + chara.score, -26, 19);
        }
        else {
            context.fillText("Score : " + chara.score, -39, 19);
        }
        context.restore();
    }
}
