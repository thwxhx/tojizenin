
const urlParams = new URLSearchParams(window.location.search);
const videoLink = urlParams.get('vivo');

if (videoLink) {
    document.getElementById('videoFrame').src = videoLink;
} else {
    console.error('Video link parameter "vivo" is missing in the URL.');
}
