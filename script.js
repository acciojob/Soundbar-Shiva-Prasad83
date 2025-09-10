//your JS code here. If required.
 let sounds=["applause","boo","gasp","tada","victory","wrong","stop"];
   let audios=document.querySelector(".audios");
   let container=document.getElementById("buttons");
   function creatingAudios(){
    for(let sound of sounds){
        if(sound!="stop"){
            let audio=new Audio(`./Audios/${sound}.mp3`);
            audio.id=sound;
    // let audio=document.createElement("audio");
    // audio.src=`./Audios/${sound}.mp3`;
    // audio.id=sound;
    audios.appendChild(audio);
        }
    }
   }
creatingAudios();

   function createButtons(){
    for(let sound of sounds){
        let button=document.createElement("button");
        if(sound!="stop"){     
        button.className="btn";
        button.innerText=sound;
        button.addEventListener("click",()=>{
           let audio=document.getElementById(sound);
           stopSounds();
           audio.play();
        })
        }else{
           
            button.className="stop";
            button.innerText=sound;
            button.addEventListener("click",stopSounds);
        }
        container.appendChild(button);
    }
   }
   createButtons();
   function stopSounds(){
    for(let sound of sounds){
        if(sound!="stop"){
    let audio=document.getElementById(sound);
    audio.pause();
    audio.currentTime=0;
        }