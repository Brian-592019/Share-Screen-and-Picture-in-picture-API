const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream and display
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (err) {
        console.log('Error Found:', err);
    };
};
// Button
button.addEventListener('click', async () => {
   
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

// On load
selectMediaStream();