var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	video.load();
})

document.querySelector("#play").addEventListener("click", function(){
	console.log("play video");
	video.play();
	// cannot do .value = .value, have to change html using innerhtml
	var volume = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = volume + "%";
})

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
})

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= (1/0.9);
	console.log("Speed is " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if (video.currentTime + 10 > video.duration) {
		console.log("Resetted to the start");
		video.currentTime = 0;
	}
	else {
		console.log("Skipped ahead 10 seconds");
		video.currentTime += 10;
	}
	console.log(video.currentTime);
})

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";console.log("Unmute");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Mute");
	}
})
document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value/100;
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
	console.log("volume change");
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Style Change");
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Back to Original");
})