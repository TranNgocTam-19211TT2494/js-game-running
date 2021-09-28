let coins = {
    _obs: [],
    widths: [50, 50],
    heights: [50, 50],
    timeToInsert: 0,

    insert: function () {
        this._obs.push({
            x: WIDTH,
            number: Math.floor(2 * Math.random()),
            width: this.widths[this.number],
            height: this.heights[this.number]
        });
        this.timeToInsert = 300 + Math.floor(50 * Math.random());
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
                obs.x && chara.y + chara.height >= ground.y + this.heights[obs.number]) {
               currentState = states.lost;
                if (soundEnabled) {
                    sounds.lostSound();
                }
                chara.collided();
            }
            else if (obs.x <= -obs.x + 200) {
               
                if (soundEnabled) {
                    sounds.scoreSound();
                }
                // Tính quà
                chara.score1++;
               
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
            coin[obs.number].draw(context, obs.x , (ground.y - this.heights[obs.number]) / 2);
          
        }
    }
}
