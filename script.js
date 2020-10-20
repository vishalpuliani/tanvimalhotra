const audioElement = document.getElementById('audio');
const btn = document.getElementById('button');
const video = document.getElementById('video');

video.play();

// Disable-Enabble Button
function toggleButton(){
    btn.disabled = !btn.disabled;
}

//Event Listeners
btn.addEventListener('click',() =>{
    audioElement.play();
    toggleButton();
});

audioElement.addEventListener('ended',toggleButton);
