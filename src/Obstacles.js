let obstacles = {
    _obs: [],
    widths: [105, 70, 86, 95, 131, 70],
    heights: [111, 45, 96, 120, 74, 62],
    timeToInsert: 0,

    insert: function () {
        this._obs.push({
            x: WIDTH,
            number: Math.floor(6 * Math.random()),
            width: this.widths[this.number],
            height: this.heights[this.number]
        });
        this.timeToInsert = 50 + Math.floor(91 * Math.random());
    },

    update: function () {
        if (this.timeToInsert == 0)
            this.insert();
        else
            this.timeToInsert--;

        for (let i = 0, size = this._obs.length; i < size; i++) {
            let obs = this._obs[i];
            obs.x -= speed;
            // Collision
            if (chara.x < obs.x + this.widths[obs.number] && chara.x + chara.width >=
                obs.x && chara.y + chara.height >= ground.y - this.heights[obs.number]) {
                currentState = states.lost;
                if (soundEnabled) {
                    sounds.lostSound();
                }
                chara.collided();
            }
            else if (obs.x <= -obs.x + -250) {
                // Score increment
                if (soundEnabled) {
                    sounds.scoreSound();
                }
                chara.score++;
                // Remove obstacle from canvas
                this._obs.splice(i, 1);
                size--;
                i--;
            }
        }
    },

    clean: function () {
        this._obs = [];
    },

    draw: function () {
        for (let i = 0, size = this._obs.length; i < size; i++) {
            let obs = this._obs[i];
            collider[obs.number].draw(context, obs.x, ground.y - this.heights[obs.number]);
        }
    }
}
