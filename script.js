// Select DOM elements
const video = document.querySelector('video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.time-elapsed');
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

// Click on progress bar to change position in video
const setProgress = (e) => {
    //Get percentage using the size of the progrss bar offsets
    //offsetWidth is the entire length offsetx is where you clicked
    const newTime = (e.offsetX / progressRange.offsetWidth);
    //Change where the progress bar is
    progressBar.style.width = `${newTime}%`;
    //Set time of the video of the percentage
    video.currentTime = newTime * video.duration;
}

// Volume Controls --------------------------- //

//Change volume level
const changeVolume = (e) => {
    let volume = e.offsetX /volumeRange.offsetWidth;
    // Rounding volume up or down
    if(volume < 0.1) {
        volume = 0;
    } else if(volume > 0.9) {
        volume > 1;
    }
    volumeBar.style.width = `${volume * 100}%`;
    video.volume = volume;
    // Change icon depending on volume
    volumeIcon.className = '';
    if(volume > 0.7) {
        volumeIcon.classList.add('fas', 'fa-volume-up');
    } else if(volume < 0.7 && volume > 0) {
        volumeIcon.classList.add('fas', 'fa-volume-down');
    } else if(volume === 0) {
        volumeIcon.classList.add('fas', 'fa-volume-off');
    }
}


// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //

// Play Events
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
// Progress Bar Events
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);
progressRange.addEventListener('click', setProgress);
// Volume Events
volumeRange.addEventListener('click', changeVolume);