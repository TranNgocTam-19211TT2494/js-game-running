let sounds = {
    opening_theme: new Audio("src/sounds/opening.mp3"),
    music: new Audio("src/sounds/jump3.wav"),
    score: new Audio("src/sounds/score.wav"),
    jump: new Audio("src/sounds/jump.wav"),
    collision: new Audio("src/sounds/collision.mp3"),
    fall: new Audio("src/sounds/fall.wav"),
    scream: new Audio("src/sounds/character.mp3"),
  
    start: new Audio("src/sounds/start.mp3"),

    disableSounds: {
        enableText: 'On Sound',
        disableText: 'Off Sound',

    },

    mainTheme: function (isPlaying) {
        if (isPlaying && soundEnabled) {
            let nextMusic = 0;
            sounds.music.addEventListener("ended", function () {
                if (nextMusic == 0) {
                    sounds.music.src = "src/sounds/music.mp3";
                    nextMusic = 1;
                }
                else if (nextMusic == 1) {
                    sounds.music.src = "src/sounds/chiptune.mp3";
                    nextMusic = 0;
                }
                sounds.music.play();
            });
            sounds.music.play();
        } else {
            sounds.music.pause();
        }
    },
    openingTheme: function (isOpening) {
        if (isOpening == true && soundEnabled) {
            sounds.opening_theme.play();
        }
        else {
            sounds.opening_theme.pause();
            sounds.opening_theme.currentTime = 0.0;
        }
    },

    toggleSounds: function () {
        soundEnabled = !soundEnabled;
        this.toggleOpenningSound();
        this.toggleThemeSound();

    },

    toggleOpenningSound: function () {
        let isOpening = currentState === states.start;
        this.openingTheme(isOpening);
    },

    toggleThemeSound: function () {
        let isPlaying = currentState === states.playing;
        this.mainTheme(isPlaying);
    },

    jumpSound: function () {
        this.jump.play();
    },

    lostSound: function () {
        sounds.collision.play();
        sounds.fall.play();
    },

    scoreSound: function () {
        this.score.play();
    }
}
