function drawSoundControl() {
    let soundEnabledText = !soundEnabled ? sounds.disableSounds.enableText : sounds.disableSounds.disableText;
    context.fillStyle = "#242424";
    context.font = "20px Arial";

    context.fillText(soundEnabledText, 500, 22);
    context.restore();
}
