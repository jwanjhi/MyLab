let audio = document.getElementById("audio");
let volumeSlider = document.getElementById("volume");
let timeDisplay = document.getElementById("time");

// PLAY
function playAudio() {
    audio.play();
}

// PAUSE
function pauseAudio() {
    audio.pause();
}

// VOLUME
function volumeUp() {
    if (audio.volume < 1) {
        audio.volume += 0.1;
    }
}

function volumeDown() {
    if (audio.volume > 0) {
        audio.volume -= 0.1;
    }
}

// MUTE/UNMUTE
function toggleMute() {
    audio.muted = !audio.muted;
}

// UPDATE TIME
audio.addEventListener("timeupdate", function() {
    let minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    timeDisplay.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
});

document.addEventListener("keydown", function(e) {
    if (e.code === "Space") {
        audio.paused ? audio.play() : audio.pause();
    }
});

function skipForward() {
    audio.currentTime += 10;
}

function skipBackward() {
    audio.currentTime -= 10;
}
