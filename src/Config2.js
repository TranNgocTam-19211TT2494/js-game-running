let canvas, context, WIDTH = window.innerWidth, HEIGHT = window.innerHeight,
    maxJump = 1, initial_speed = 12, speed = initial_speed, currentState, rank, img, soundEnabled = true,

    states = {
        start: 0,
        playing: 1,
        lost: 2
    }

if (WIDTH >= 4) {
    WIDTH = 600;
    HEIGHT = 550;
}
