const btnContainer=document.getElementById("buttons");
let buttons=["applause","boo","gasp","tada","victory","wrong","stop"];
let audios={};
buttons.forEach((button)=>{
	createButton(button);
});
function createButton(btn){
	let button=document.createElement("button");
	if(btn!="stop"){
	button.className="btn";
	button.innerText=btn;
		addEvent(button);
	}else{
		button.className="stop";
		button.innerText=btn;
		button.addEventListener("click",(e)=>{
			stopAudios()
		})
	}
	
	btnContainer.appendChild(button);
}
function addEvent(btn){
	btn.addEventListener("click",(e)=>{
		let audio=new Audio("https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3");
		audios[btn.innerText]=audio;
		stopAudios();
		audio.play();
	})
}
function stopAudios(){
	// console.log(audios);
 for(let key in audios){
	 audios[key].pause();
 }
}