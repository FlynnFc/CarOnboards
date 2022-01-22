const toggle = document.querySelector('#toggle');
const mute = document.querySelector('#mute');
const locations = document.querySelector('#locations');
const audio = document.querySelector('#audio');
const play = document.querySelector('#play');
const previous = document.querySelector('#prev');
const next = document.querySelector('#next');
const li = document.querySelector('.listElements')
let currentTrackIndex = 0;
let currentTrack;
let currentVideoIndex = 0;
let currentVideo;
let currentAudioIndex = 0;
let currentAudio;


const data = [
    {
        track: 'Nordschleife',
        videos: ['mGF7AgzlPMk', 'nqmvMIZCkZ4', 'ERDHI75UzXk', 'qnJOC_dDXzM'],
        music: ['https://antennebadkreuznach-ais-edge-400b-dus-dtag-cdn.cast.addradio.de/antennebadkreuznach/live/mp3/high/stream.mp3', 'http://stream.radiorsl.de:8000/radiorsl', 'https://wdr-1live-live.icecastssl.wdr.de/wdr/1live/live/mp3/128/stream.mp3']
    },
    {
        track: 'Spa Francorchamps',
        videos: ['F_3SNisnuRE', '5VYYNIfLiNo'],
        music: ['https://streamingp.shoutcast.com/NostalgieJazz-aac?listening-from-radio-garden=1642858057', 'https://radios.rtbf.be/classic21-128.mp3', 'https://radios.rtbf.be/laprem1ere-128.mp3']
    },
    {
        track: 'Abu Dhabi',
        videos: ['TZXtq85roqU', 'ONVPBwguT7I', 'XfXMiwN878s'],
        music: ['https://antennebadkreuznach-ais-edge-400b-dus-dtag-cdn.cast.addradio.de/antennebadkreuznach/live/mp3/high/stream.mp3', 'http://stream.radiorsl.de:8000/radiorsl', 'https://wdr-1live-live.icecastssl.wdr.de/wdr/1live/live/mp3/128/stream.mp3']
    },
    {
        track: 'Le Mans',
        videos: ['61LmFVfOBt0', 'yKYj-nZGewk', 'yT2YVhQs69I', 'wdMOUcBVX84'],
        music: ['https://sweetfm-perche72.ice.infomaniak.ch/sweetfm-perche72-192.mp3', 'http://80.82.229.202:8000/radiog.mp3', 'https://diffusion.lafrap.fr/webradio-cholet.mp3']
    },
    {
        track: 'Daytona',
        videos: ['hOFNsg1-9eQ', 'GhFmf2wyjYI', 'VPPUzZLGg2Y'],
        music: ['https://ais-edge51-live365-dal02.cdnstream.com/a92698', 'https://26113.live.streamtheworld.com/WLOVFM.mp3', 'https://ais-edge09-live365-dal02.cdnstream.com/a31378']
    },
    {
        track: 'Brands Hatch',
        videos: ['SWDo_q6PFQs', 'gEvKuEsOOI', 'bD5SlIem8dY'],
        music: ['https://worldwidefm.out.airtime.pro/worldwidefm_c', 'https://media-ice.musicradio.com/ClassicFMMP3', 'http://hyades.shoutca.st:8555/stream']
    },
    {
        track: 'Nürburgring',
        videos: ['0al_OVwenA8', 't8XMzYjmKLc'],
        music: ['http://stream.webthings.hu:8000/fm95-x-128.mp3', 'http://stream.radiorsl.de:8000/radiorsl', 'https://wdr-1live-live.icecastssl.wdr.de/wdr/1live/live/mp3/128/stream.mp3']
    },
    {
        track: 'Hungaroring',
        videos: ['5Rw_5dMDbQ0', 'w3kaBQTrC2w', 'FJQ4QyJNuA8'],
        music: ['https://nl.digitalrm.pt:8024/stream', 'https://s04.diazol.hu:9502/live.mp3/;', 'http://137.74.85.85:7320/hq']
    },
    {
        track: 'Portimao ',
        videos: ['dvk7UD3ug4w', 'wXCGsBwIFTg', 'I8FjcORW-Kw'],
        music: ['https://antennebadkreuznach-ais-edge-400b-dus-dtag-cdn.cast.addradio.de/antennebadkreuznach/live/mp3/high/stream.mp3', 'http://centova.radios.pt:8559/stream', 'http://centova.radio.com.pt:8431/stream']
    },
    {
        track: 'Bathurst',
        videos: ['9iGW7YbGvuw', 'vsK1P1QMtk0', 'uXL64z3qT4w'],
        music: ['http://149.56.157.81/proxy/brockstream', 'https://syd02.sdn.dhcmedia.com.au/radio/8010/magic876', 'https://stream2.cnmns.net/orange1035']
    },
    {
        track: 'Macau',
        videos: ['mMlk7X8xryQ', 'Bgxe0vPCU9o', 'L3u2mu9UoRs'],
        music: ['https://lhttp.qingting.fm/live/21209/64k.mp3', 'https://lhttp.qingting.fm/live/21209/64k.mp3', 'https://lhttp.qingting.fm/live/1273/64k.mp3']
    },
    {
        track: 'Silverstone',
        videos: ['yEpQTbN41X8', '5YKY0QjHaLY', 'h7dXIURDkyk'],
        music: ['https://radio.canstream.co.uk:8039/live.mp3', 'https://stream.live.vc.bbcmedia.co.uk/bbc_radio_two', 'http://188.165.192.5:8067/;']
    },


];

function onload() {
    //City
    currentTrackIndex = randomNumber(data.length);
    currentTrack = data[currentTrackIndex];
    // Video
    currentVideoIndex = randomNumber(currentTrack.videos.length);
    currentVideo = currentTrack.videos[currentVideoIndex];
    // Audio
    currentAudioIndex = randomNumber(currentTrack.music.length);
    currentAudio = currentTrack.music[currentAudioIndex];


    console.log(currentTrack);
    audio.src = currentAudio;
    audio.volume = 0.1;
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');

    data.forEach((el, idx) => {
        let locationElement = document.createElement('li');
        locationElement.innerText = el.track;
        locationElement.id = idx;
        locationElement.classList.add('listElements')
        locationElement.addEventListener('click', (e) => {
            currentTrackIndex = Number(e.target.id);
            currentTrack = data[currentTrackIndex]
            // Video
            currentVideoIndex = randomNumber(currentTrack.videos.length);
            currentVideo = currentTrack.videos[currentVideoIndex];
            player.loadVideoById({ videoid: currentVideo })
            // Audio
            currentAudioIndex = randomNumber(currentTrack.music.length);
            currentAudio = currentTrack.music[currentAudioIndex];
            console.log(currentTrack);
            audio.src = currentAudio;
            audio.volume = 0.1;
            play.classList.remove('fa-play');
            play.classList.add('fa-pause');
            player.loadVideoByUrl({ videoid: currentVideo })
            highlight()

        })
        locations.append(locationElement)

    });
    highlight()
};
onload()


function highlight() {
    console.log(locations.childNodes);
    locations.childNodes.forEach((el, idx) => {
        console.log(el)
        el.classList.remove('active');
        if (idx == currentTrackIndex) {
            el.classList.add('active');
        }
    });
}

function randomNumber(max) {
    return Math.floor(Math.random() * max);
};

play.addEventListener('click', () => {
    if (audio.paused) {
        audio.play()
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    } else {
        audio.pause()
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
    }
})

next.addEventListener('click', () => {
    if (currentAudioIndex < (currentTrack.music.length - 1)) {
        currentAudioIndex++;
    } else {
        currentAudioIndex = 0;
    };

    currentAudio = currentTrack.music[currentAudioIndex]
    audio.src = currentAudio;
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
})

prev.addEventListener('click', () => {
    if (currentAudioIndex > 0) {
        currentAudioIndex--
    } else currentAudioIndex = currentTrack.music.length - 1
    currentAudio = currentTrack.music[currentAudioIndex]
    audio.src = currentAudio;
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');

})

mute.addEventListener('click', () => {
    if (player.isMuted()) {
        player.unMute();
        mute.innerText = 'ON'
    } else {
        player.mute();
        mute.innerText = 'OFF'
    }
})

// locations.addEventListener('click', (e) => {
//     console.log(e.target.id)
//     currentTrackIndex = Number(e.target.id);
//     currentTrack = data[currentTrackIndex]

//     currentVideoIndex = randomNumber(currentTrack.videos.length);
//     currentVideo = currentTrack.videos[currentVideoIndex];


//     currentAudioIndex = randomNumber(currentTrack.music.length);
//     currentAudio = currentTrack.music[currentAudioIndex];
//     console.log(currentTrack);
//     audio.src = currentAudio;
//     audio.volume = 0.1;
//     play.classList.remove('fa-play');
//     play.classList.add('fa-pause');
//     onYouTubeIframeAPIReady()
//     highlight()


// })


toggle.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('hide');
})

function changeVolume(e) {
    audio.volume = parseFloat(e.value / 100)
}
// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: window.innerHeight * 1.2,
        width: window.innerWidth,
        videoId: currentVideo,
        playerVars: {
            'playsinline': 1,
            'controls': 0,
            'mute': 1,
            'showinfo': 0,
            'enalbejsapi': 1,
            'disablekb': 1,
            'modestbranding': 1,
            'origin': window.location.origin,
            'widget_referrer': window.location.href

        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

const loading = document.querySelector('#loading')

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        if (currentVideoIndex < currentTrack.videos.length) {
            currentVideoIndex++
        } else {
            currentVideoIndex = 0
        }

        currentVideo = currentTrack.videos[currentVideoIndex]
        player.loadVideoById({ videoid: currentVideo })
        highlight()
    }
    if (event.data == YT.PlayerState.BUFFERING) {
        loading.style.display = 'flex';
    }
    if (event.data == YT.PlayerState.PLAYING && !done) {
        loading.style.display = 'flex';
        setTimeout(() => {
            loading.style.display = 'none'
        }, 1000)
    }
}
