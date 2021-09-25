
// Thời gian tính theo điểm để tăng độ khó và click : có th
function difficulty() {
    if (speed == 8 && chara.score == 20) {
        speed = 12;
       
    }

    if (speed == 12 && chara.score == 40) {
        speed = 16;
     
    }

    if (speed == 16 && chara.score == 80) {
        speed = 19;
      
    }

    if (speed == 19 && chara.score == 100) {
        speed = 24;
         
    }
}
