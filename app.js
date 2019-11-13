const app = () => {

    
    const song = document.querySelector('.song');
    const play = document.getElementById('play');

    //sounds
    const sounds = document.querySelectorAll('.sound-picker button');


    //time display
    const timeDisplay = document.getElementById('time-display');
    const timeSelect = document.querySelectorAll('.time-select button');

    // duration

    let fakeDuration = 600;

  // time select
  timeSelect.forEach(option =>{
    option.addEventListener('click', function(){
        fakeDuration = this.getAttribute("data-time");
        timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
            fakeDuration % 60
        )}`;
    });
});

    //Select sound
    sounds.forEach(sound =>{
        sound.addEventListener('click', function(){
            song.src = this.getAttribute('data-sound');
            checkPlaying(song);
        });
    });
  

    // play sound

    play.addEventListener('click', ()=>{
       checkPlaying(song);
    });

  
  


    // stop & play & change icon

    const checkPlaying = song =>{
        if(song.paused){
            song.play();
            play.src = `images/pause.svg`;
        }else{
            song.pause();
            play.src=`images/play.svg`;
        }
    };

    song.ontimeupdate = () =>{
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);

        timeDisplay.textContent = `${minutes}:${seconds}`;

        if(currentTime >= fakeDuration){
            song.pause();
            song.currentTime = 0;
            play.src = `images/play.svg`;
        }

    }


};

app();