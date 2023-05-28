console.log("Welcome To Spotify");
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let icons = document.getElementById('icons');
let songItems = Array.from(document.getElementsByClassName('songs'));
let playButton = document.getElementById('playMySong');

let songs =[
    {songName: "Doobey", singer: "OAFF"},
    {songName: "Bhool Bhulaiyaa 2 Title Track", singer: "Tanishk Baghchi"},
    {songName: "Phone mila ke", singer: "Phone Mila Ke"},
    {songName: "Dotara", singer: "Jubin Nautiyal"},
    {songName: "Kudiyee Ni Teri", singer: "The PropheC"},
    {songName: "Param Sundari", singer: "Shreya Ghoshal"}
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.duration<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        myPlay[songIndex-1].classList.remove('fa-circle-play')
        myPlay[songIndex-1].classList.add('fa-circle-pause')
    }
    else{
        audioElement.pause()
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        makeAllPlays();
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
    if(progressBar.value==100){
        if(songIndex!=6){
            songIndex+=1;
            audioElement.currentTime=0;
            audioElement.src = `${songIndex}.mp3`;
            audioElement.play();
            makeAllPlays();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            myPlay[songIndex-1].classList.remove('fa-circle-play')
            myPlay[songIndex-1].classList.add('fa-circle-pause')
            document.getElementById("songName").innerHTML = songs[songIndex-1].songName;
            document.getElementById("singer").innerText = songs[songIndex-1].singer;
        }else{
            songIndex=1;
            audioElement.currentTime=0;
            audioElement.src = `${songIndex}.mp3`;
            audioElement.play();
            makeAllPlays();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            myPlay[songIndex-1].classList.remove('fa-circle-play')
            myPlay[songIndex-1].classList.add('fa-circle-pause')
            document.getElementById("songName").innerHTML = songs[songIndex-1].songName;
            document.getElementById("singer").innerText = songs[songIndex-1].singer;
        }
       
    }
})
progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressBar.value * audioElement.duration)/100;
})

let makeAllPlays= ()=>{
    myPlay.forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        })
}

let songIndex=1;
let myPlay = Array.from(document.getElementsByClassName('myPlay'));
myPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex = parseInt(e.target.id);
        
        if(audioElement.paused|| audioElement.duration<=0){
            console.log("1st======>",`${songIndex}.mp3`);
            console.log("1st======>",audioElement.src);
            makeAllPlays();
            audioElement.currentTime=0;
            audioElement.src = `${songIndex}.mp3`;
            audioElement.play();
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            let singerName = songs[songIndex-1].singer;
            document.getElementById("songName").innerHTML = songs[songIndex-1].songName;
            document.getElementById("singer").innerText = songs[songIndex-1].singer;
        }else if(audioElement.src!=`${songIndex}.mp3` && audioElement.play){
            console.log("2nd======>",`${songIndex}.mp3`);
            console.log("2nd======>",audioElement.src);
            makeAllPlays();
            audioElement.currentTime=0;
            audioElement.src = `${songIndex}.mp3`;
            audioElement.play();
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            let singerName = songs[songIndex-1].singer;
            document.getElementById("songName").innerHTML = songs[songIndex-1].songName;
            document.getElementById("singer").innerText = songs[songIndex-1].singer;
        }
        else{
            console.log("3rd======>",`${songIndex}.mp3`);
            console.log("3rd======>",audioElement.src);
            audioElement.pause()
            masterPlay.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            makeAllPlays();
        }
    })
})   
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>1){
        songIndex-=1;
    }
    else{
        songIndex=1;
    }
    makeAllPlays();
    document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
    document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
    audioElement.currentTime=0;
    audioElement.src = `${songIndex}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    document.getElementById("songName").innerHTML = songs[songIndex-1].songName;
    document.getElementById("singer").innerText = songs[songIndex-1].singer;
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>5){
        songIndex = 6;
    }
    else{
        songIndex+=1;
    }
    makeAllPlays();
    document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
    document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
    audioElement.currentTime=0;
    audioElement.src = `${songIndex}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    document.getElementById("songName").innerHTML = songs[songIndex-1].songName;
    document.getElementById("singer").innerText = songs[songIndex-1].singer;
})


