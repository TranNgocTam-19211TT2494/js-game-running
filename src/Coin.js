let coins = {
    _obs: [],
    widths: [50, 50],
    heights: [50, 50],
    timeToInsert: 0,

    insert: function () {
        this._obs.push({
            x: WIDTH,
            y: HEIGHT,
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
            
           
           if (obs.x <= -obs.x + 200) {

                if (soundEnabled) {
                    sounds.scoreSound();
                }
                if (currentState == states.playing) {
                    // Tính quà
                    chara.score1++;

                    this._obs.splice(i, 1);
                    size--;
                    i--;
                }

            }
        }
    },

    clean: function () {
        this._obs = [0];
    },

    draw: function () {
        for (let i = 0, size = this._obs.length; i < size; i++) {
            let obs = this._obs[i];
            coin[obs.number].draw(context, obs.x, (ground.y + this.heights[obs.number]) / 2);

        }
    }
}
