/* Get out Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');

/* Build the functions */
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();

    /* if (video.paused) {
        video.play();
    } else {
        video.pause();
    } */
}

function updateBtn() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    //console.log(this.dataset);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    //console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function toggleFullScreen() {
    if (video.requestFullScreen) {
        video.requestFullScreen();
    } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    }
}


/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('dblclick', toggleFullScreen);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(btn => btn.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('mousedown', function () {
    this.addEventListener('mousemove', handleRangeUpdate);
    this.addEventListener('mouseup', function() {
        this.removeEventListener('mousemove', handleRangeUpdate);
    });
}));

progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', function () {
    this.addEventListener('mousemove', scrub);
    this.addEventListener('mouseup', function() {
        this.removeEventListener('mousemove', scrub);
    });
});

fullscreen.addEventListener('click', toggleFullScreen);