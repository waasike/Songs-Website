// PLAYLIST SECTION
function playSong(source) {
    var audioPlayer = document.getElementById('audioPlayer');
    var audioSource = document.getElementById('audioSource');
  
    audioSource.src = source;
    audioPlayer.load();
    audioPlayer.play();
  }