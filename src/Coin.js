let coins = {
    _obs: [],
    widths: [50, 50],
    heights: [50, 50],
    timeToInsert: 0,

    insert: function () {
        this._obs.push({
            x: WIDTH,
            y: -10,
            number: Math.floor(2 * Math.random()),
          
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
           if (obs.x <= -obs.x + 200) {
                if (150 <= chara.y && chara.y < 310) {
                    chara.score1++;
                }
                
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
            coin[0].draw(context, obs.x, (ground.y + this.heights[obs.number]) / 2);

        }
    }
}