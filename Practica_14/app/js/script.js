const song = [
    { title: 'Come Together', artist: 'The Beatles', src: 'music/Come_Together.mp3', cover: 'img/album1.jpg'},
    { title: 'Dont Let Me Down', artist: 'The Beatles', src: 'music/Dont_Let_Me_Down.mp3', cover: 'img/album2.jpg'},
    { title: 'Hey Jude', artist: 'The Beatles', src: 'music/Hey_Jude.mp3', cover: 'img/album3.jpg'},
    { title: 'Let It Be', artist: 'The Beatles', src: 'music/Let_It_Be.mp3', cover: 'img/album4.jpg'},
    { title: 'Oh Darling', artist: 'The Beatles', src: 'music/Oh_Darling.mp3', cover: 'img/album5.jpg'}
];

let currentSongIndex = 0;
let isPlaying = false;
let audio;

function playCurrentSong() {
    if(audio){
        audio.stop();
    }

    audio = new Howl({
        src: [song[currentSongIndex].src],
        autoplay: isPlaying,
        volume: volumeSlider.value,
        onend: function(){
            playNextSong();
        }
    })

    updateSongInfo();
}

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const volumeSlider = document.getElementById('volume');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const albumCover = document.querySelector('.card-img-top');

playButton.addEventListener('click', function(){
    isPlaying = true;
    playCurrentSong();
});

pauseButton.addEventListener('click', function(){
    isPlaying = false;
    audio.pause();
});

nextButton.addEventListener('click', function(){    
    playNextSong();
});

prevButton.addEventListener('click', function(){ 
    if(audio.seek() > 5){
        audio.seek(0);
    }else{
        currentSongIndex = (currentSongIndex -1 + song.length) % song.length;
        playCurrentSong();
    }
});

volumeSlider.addEventListener('input', function(){
    audio.volume(volumeSlider.value);
});

function updateSongInfo(){
    songTitle.innerText = song[currentSongIndex].title;
    songArtist.innerText = song[currentSongIndex].artist;
    albumCover.src = song[currentSongIndex].cover;
}

function playNextSong(){
    currentSongIndex = (currentSongIndex + 1) % song.length;
    playCurrentSong();
}

playCurrentSong();