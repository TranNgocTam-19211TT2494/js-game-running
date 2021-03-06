let chara = {
    x: 50,
    y: 0,
    height: character[0].height,
    width: character[0].width,
    gravity: 1.6,
    speed: 0,
    jumpForce: 29.6,
    numberJumps: 0,
    score: 0,
    score1: 0,
    anim: 0,
    count: 0,
    countTime: 30,
    timeChange: 0,



    // Chuyển động : trạng thái
    changeImage: function () {
        if (this.count <= 20) {
            if (this.count > 0) {
                this.anim = 0;
            }
            else if (this.count > 1) {
                this.anim = 3;
            }
            else {
                this.anim = 2;
            }
            this.count++;
            // console.log(this.count);
            if (this.count == 7 || this.count == 14 || this.count == 20) {
                chara.countTime--;
                if (chara.countTime == 0) {
                    currentState = states.lost;
                }
            }
        }

        else {
            this.anim = 0;
            this.count = 1;
        }
        this.timeChange = 10;
    },

    collided: function () {
        this.count = 18;
        this.anim = 3;
    },

    update: function () {
        this.speed += this.gravity;
        this.y += this.speed;
        if (this.y > ground.y - this.height && currentState != states.lost) {
            this.y = ground.y - this.height;
            this.numberJumps = 0;
            this.speed = 0;
            this.anim = 1;
        }

        if (this.timeChange == 0) {
            this.changeImage();
        }
        else {
            this.timeChange--;
        }
    },

    jump: function () {
        if (this.numberJumps < maxJump) {
            this.speed = -this.jumpForce;
            this.numberJumps++;
        }
    },

    reset: function () {
        chara.countTime = 30;
        this.speed = 0;
        this.y = 0;
        this.anim = 0;
        this.timeChange = 0;

        if (this.score > rank) {
            localStorage.setItem("rank", this.score);
            rank = this.score;
        }
        this.score = 0;
    },

    draw: function () {
        context.save();
        context.translate(Math.floor(this.x + this.width / 2), Math.floor(this.y + this.height / 4));
        character[this.anim].draw(context, -Math.floor(this.width / 2), -Math.floor(this.height / 4));
        context.restore();
    }
}
