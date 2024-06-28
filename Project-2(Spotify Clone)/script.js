console.log("Let's Write JavaScript")
function removeLastCharacter(str) {
    return str.slice(0, -1);
}
function secondsToMinutesSeconds(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    return minutes + ":" + Math.floor(remainingSeconds);
}
function getCard(text) {

    let div = document.createElement("div")
    div.setAttribute("class", "card")
    div.innerHTML = '<div class="thumbnail"><img src="https://i.scdn.co/image/ab67706f000000023877cd545591ee648ef59b92" alt=""><span class="playbutton"><svg data-encore-id="icon" role="img" aria-hidden="true"viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 bneLcE"> <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"> </path></svg></span></div><div>' + text + '</div><div>Beyonce is on the top of the hottest 50!</div>'
    document.querySelector(".allplaylists").append(div)
}

// let v=new Audio(CurrentSong[0])
let CurrentSong = new Audio()
async function getSongs() {

    let a = await fetch("http://127.0.0.1:5502/songs/")
    let response = await a.text()
    // console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    // console.log(as)
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
        }

    }
    return songs
}
const playMusic = (track) => {


    CurrentSong.src = "/songs/" + track.querySelector(".name").innerHTML.trim()
    CurrentSong.play()


    CurrentSong.addEventListener("ended", () => {
        playMusic(track.nextElementSibling)
    })


}
// const playMusic=(track)=>{

//     CurrentSong.src="/songs/"+track

//     CurrentSong.play()
// }
async function main() {



    let songs = await getSongs()
    console.log(songs)
    let SongUL = document.querySelector(".box2")
    for (const song of songs) {
        SongUL.innerHTML = SongUL.innerHTML + `
        <div class="songboxes"> 
        <img class="music" src="music_note.svg" alt="">
        <span class="name">${song.split("/songs/")[1]}</span>
        <span class="now">Play Now</span>
        <span class="library_play"><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25" fill="rgb(159,152,152)" viewBox="0 0 48 48" id="play"><path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"></path></svg></span>
       
        
        </div>`;

    }

    // var audio =new Audio(songs[]);
    // audio.play()            
    // audio.addEventListener("loadeddata",()=>{   

    //     console.log(audio.duration,audio.currentSrc,audio.currentTime) 

    // })       
    // attach an event listner to each song
    Array.from(document.querySelector(".box2").getElementsByClassName("songboxes")).forEach(e => {

        e.getElementsByTagName("span")[2].addEventListener("click", element => {




            console.log(e.querySelector(".name").innerHTML.trim())
            console.log(e.querySelector(".name"))
            playMusic(e)
            document.querySelector(".songbuttons").getElementsByTagName("img")[1].src = "pause.svg"




        })
    });

    // Array.from(document.querySelector(".box2").getElementsByClassName("songboxes")).forEach(e=>{
    //     e.getElementsByTagName("span")[2].addEventListener("click",element=>{




    //             console.log(e.querySelector(".name").innerHTML.trim())
    //             playMusic(e.querySelector(".name").innerHTML.trim())
    //             document.querySelector(".songbuttons").getElementsByTagName("img")[1].src="pause.svg"




    //     })
    // })




    document.querySelector(".songbuttons").getElementsByTagName("img")[1].addEventListener("click", () => {
        if (CurrentSong.paused) {
            CurrentSong.play()
            document.querySelector(".songbuttons").getElementsByTagName("img")[1].src = "pause.svg"
        }
        else {
            CurrentSong.pause()
            document.querySelector(".songbuttons").getElementsByTagName("img")[1].src = "play.svg"
        }

    })
    CurrentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(CurrentSong.currentTime)}/${secondsToMinutesSeconds(CurrentSong.duration)}`
        console.log(CurrentSong.currentTime)
        document.querySelector(".songinfo").innerHTML = CurrentSong.src.split("/songs/")[1]
        document.querySelector(".circle").style.left = (CurrentSong.currentTime / CurrentSong.duration) * 100 + "%"



    })
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        document.querySelector(".circle").style.left = (e.offsetX / e.target.getBoundingClientRect().width) * 100 + "%"
        console.log(e)
        let d = removeLastCharacter(document.querySelector(".circle").style.left)
        CurrentSong.currentTime = parseInt(d * CurrentSong.duration) / 100



    })
      document.querySelector(".buttons").firstElementChild.addEventListener("click",()=>{
       if ( document.querySelector(".box").style.left=='0px'){
          
        document.querySelector(".box").style.left= '-350px'

       }
       else{
        document.querySelector(".box").style.left= '0px'
       }
    })
}
main()
