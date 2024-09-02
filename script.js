let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek-slider');
let volume_slider = document.querySelector('.volume-slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;


const music_list = [
    {
        img: 'Sajni.png',
        name: 'O Sajni Re',
        artist: 'Arijit Singh',
        music: 'O-Sajni-Re(Pagal-World.Com.In).mp3'
    },
    {
        img: 'ek ajnabee haseena se .png',
        name: 'Ek Ajnabee Haseena Se',
        artist: 'Kishore Kumar',
        music: 'EK AJNABI HASEENA SE.mp3'
    },
    {
        img: 'heeriye .png',
        name: 'Heeriye',
        artist: 'Arijit Singh',
        music: 'Heeriye - Arijit Singh.mp3'
    },
    {
        img: 'Ek villain.png',
        name: 'Galiyaan'  ,
        artist:'Ankit Tiwari',
        music:'Galliyan.mp3'
    },
    {
        img: 'Aashiqui.png',
        name: 'Chahun Mai Ya Na  '  ,
        artist:'Palak Muchchal and Arijit Singh',
        music:'Chahun Main Ya Naa.mp3'
    },
    {
        img: 'pehli nazar mai .png',
        name: 'Pehli Nazar Mai '  ,
        artist:'Atif Aslam ',
        music:'Pehli Nazar Mein from Race.mp3'
    },
    {
        img: 'khairiyat.png',
        name: 'Khairiyat'  ,
        artist:'Arijit Singh',
        music:'Khairiyat.mp3'
    },
    {
        img: 'tera hone laga hun.png',
        name: 'Tera Hone Laga Hun '  ,
        artist:'Aatif Aslam',
        music:'Tera Hone Laga Hoon.mp3'
    },
    {
        img: 'Jab tak .png',
        name: 'Jab Tak'  ,
        artist:'Armaan Malik',
        music:'Jab Tak.mp3'
    },
    {
        img: 'Bakhuda tumhi ho .png',
        name: 'Bakhuda Tumhi Ho '  ,
        artist:'Atif Aslam',
        music:'Bakhuda Tumhi Ho.mp3'
    },
    {
        img: 'Raabta.png',
        name: 'Raabta '  ,
        artist:'Arijit Singh',
        music:'Raabta.mp3'
    },
    {
        img: 'Aashiqui.png',
        name: 'Tum Hi Ho'  ,
        artist:'Arijit Singh',
        music:'Tum Hi Ho.mp3'
    },
    {
        img: 'Ae dil kisi ki yaad mai.png',
        name: 'Ae Dil Kisi Ki Yaad Mai '  ,
        artist:'Ali Zafar & Sara Haider',
        music:'Ae Dil Kisi Ki Yaad Mein - Ali Zafar (Coke Studio 8).mp3'
    },
    {
        img: 'Aashiqui.png',
        name: 'Aasan Nhi Yahan '  ,
        artist:'Arijit Singh',
        music:'Aasan Nahin Yahan.mp3'
    },
    {
        img: 'Ek villain.png',
        name: 'Banjaara '  ,
        artist:'Mohammad Irfan',
        music:'Banjaara from Ek Villain.mp3'
    },
    {
        img: 'Co2.png',
        name: 'Co2 '  ,
        artist:'Prateek Kuhad',
        music:'Co2(Pagal-World.Com.In).mp3'
    },
    {
        img: 'faasle.png',
        name: 'Faasle',
        artist: 'Kaavish & Quratulain Balouch',
        music: 'Faasle - Quratulain Balouch.mp3'
    },
    {
        img: 'Aashiqui.png',
        name: 'Bhula Dena '  ,
        artist:'Mustafa Zahid',
        music:'Bhula Dena.mp3'
    },
    {
        img: 'Kahin toh .png',
        name: 'Kahin Toh '  ,
        artist:'Rashid Ali &  Vasundhara Das',
        music:'Kahin To.mp3'
    },
    {
        img: 'Wo lamhe .png',
        name: 'Woh Lamhe Woh Baatein'  ,
        artist:'Aatif Aslam',
        music:'Woh Lamhe Woh Baatein.mp3'
    },
    {
        img: 'Tumho .png',
        name: 'Tum Ho '  ,
        artist:'Mohit Chauhan',
        music:'Tum-Ho-Suzanne-D-Mello-Mohit-Chauhan.mp3'
    },
    {
        img: 'Aashiqui.png',
        name: 'Milne Hai Mujhse Aayi '  ,
        artist:'Arijit Singh',
        music:'Milne Hai Mujhse Aayi.mp3'
    },
    {
        img: 'ZARA ZARA.png',
        name: 'Zara Zara (Unwind)'  ,
        artist:'Arjun Kunungo',
        music:'Zara Zara(PagalWorld.com.so).mp3'
    },
    {
        img: 'Aadat.png',
        name: 'Aadat'  ,
        artist:'Aatif Aslam',
        music:'Aadat-From-Kalyug-Atif-Aslam.mp3'
    },
    {
        img: 'Ek villain.png',
        name: 'Humdard '  ,
        artist:'Arijit Singh',
        music:'Humdard.mp3'
    },
    {
        img: 'Aashiqui.png',
        name: 'Hum Mar Jayenge '  ,
        artist:'Tulsi Kumar , Arijit Singh',
        music:'Hum Mar Jayenge.mp3'
    },
    {
        img: 'Choo lo .png',
        name: 'Choo lo  '  ,
        artist:'The Local Train ',
        music:'Choo Lo.mp3'
    },
    {
        img: 'kun faya kun.png',
        name: 'Kun Faya Kun '  ,
        artist:'Javed Ali, Mohit Chauhan, AR Rahman',
        music:'Kun-Faaya-Kun-Javed-Ali-Mohit-Chauhan-A-R-Rahman.mp3'
    },
    {
        img: 'tu har lamha .png',
        name: 'Tu Har Lamha '  ,
        artist:'Arijit Singh ',
        music:'Tu Har Lamha.mp3'
    },
    {
        img: 'Piya aaye na .png',
        name: 'Piya aaye na  '  ,
        artist:'Tulsi Kumar , Arijit Singh',
        music:'Piya Aaye Na.mp3'
    },
    {
        img: 'Ek villain.png',
        name: 'Zaroorat '  ,
        artist:'Mustafa Zahid',
        music:'Zaroorat.mp3'
    },
    {
        img: 'phir mohobbat.png',
        name: 'Phir Mohobbat '  ,
        artist:'Saim Bhat, Mohammad Irfan ,Arijit Singh , ',
        music:'Phir Mohabbat.mp3'
    },
    {
        img: 'Choo lo .png',
        name: 'Aoage Tum Kabhi '  ,
        artist:'The Local Train ',
        music:'Aaoge Tum Kabhi.mp3'
    },
    {
        img: 'Sun raha haina.png',
        name: 'Sun Raha Haina Tu   '  ,
        artist:'Ankit Tiwari',
        music:'Sunn Raha Hai (Male).mp3'
    },
    {
        img: 'Baatein ye kabhi na .png',
        name: 'Baatein Ye Kabhi Na '  ,
        artist:'Arijit Singh',
        music:'Baatein Ye Kabhi Na (Male).mp3'
    },
];
function loadTrack(track_index) {
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = `url('${music_list[track_index].img}')`;
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = `Playing music ${track_index + 1} of ${music_list.length}`;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color() {
    let hex = '0123456789abcdef';
    let a;

    function populate(a) {
        for (let i = 0; i < 6; i++) {
            let x = Math.round(Math.random() * 15);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    let angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ')';
    document.body.style.background = gradient;
}

function reset() {
    curr_time.textContent = '00:00';
    total_duration.textContent = '00:00';
    seek_slider.value = 0;
}

function randomTrack() {
    isRandom ? pauseRandom() : playRandom();
}

function playRandom() {
    isRandom = true;
    randomIcon.classList.add('randomActive');
}

function pauseRandom() {
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}

function repeatTrack() {
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}

function playpauseTrack() {
    isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate', 'playing');
    wave.classList.add('Loader');
    playpause_btn.innerHTML = '<i class="fas fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate', 'playing');
    wave.classList.remove('Loader');
    playpause_btn.innerHTML = '<i class="fas fa-play-circle fa-5x"></i>';
}

function nextTrack() {
    if (track_index < music_list.length - 1 && !isRandom) {
        track_index += 1;
    } else if (track_index < music_list.length - 1 && isRandom) {
        track_index = Math.floor(Math.random() * music_list.length);
    } else {
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}

function prevTrack() {
    if (track_index > 0) {
        track_index -= 1;
    } else {
        track_index = music_list.length - 1;
    }
    loadTrack(track_index);
    playTrack();
}

function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}

function setUpdate() {
    if (!isNaN(curr_track.duration)) {
        let seekPosition = (curr_track.currentTime / curr_track.duration) * 100;
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime % 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration % 60);

        if (currentSeconds < 10) { currentSeconds = '0' + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = '0' + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = '0' + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = '0' + durationMinutes; }

        curr_time.textContent = currentMinutes + ':' + currentSeconds;
        total_duration.textContent = durationMinutes + ':' + durationSeconds;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    loadTrack(0);  
    curr_track.addEventListener('canplaythrough', function() {
        playTrack();   
    });
});