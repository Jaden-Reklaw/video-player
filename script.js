// Select DOM elements
const video = document.querySelector('video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.time-elasped');
const duration = document.querySelector('.time-duration');
const fullscreenBtn = document.querySelector('.fullscreen');

// Play & Pause ----------------------------------- //
const showPlayIcon = () => {
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
}

const togglePlay = () => {
    if(video.paused) {
        video.play();
        playBtn.classList.replace('fa-play', 'fa-pause');
        playBtn.setAttribute('title', 'Pause');
    } else {
        video.pause();
        showPlayIcon();
    }
}

// On Video End, show play button icon
video.addEventListener('ended', showPlayIcon);


// Progress Bar ---------------------------------- //

// Update progress bar as video plays
const displayTime = (time) => {
    const min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    sec = sec > 9 ? sec : `0${sec}`;
    return `${min}:${sec}`;
}

// Update progress bar as video plays
const updateProgress = () => {
    progressBar.style.width = `${(video.currentTime/video.duration) * 100}%`;
    // Displays the current time of the video playing
    currentTime.textContent = `${displayTime(video.currentTime)}`;
    // Displays the duration time of the video
    duration.textContent = `${displayTime(video.duration)}`;
}

// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //

// Event Listeners
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);
