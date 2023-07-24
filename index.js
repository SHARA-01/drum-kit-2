/*function plays(e) {
	const audio = document.querySelector('audio[data-key="${e.keyCode}"]');

	const key = document.querySelector('.key[data-key="${e.keyCode}"]');

	if(!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');

	console.log(this);

}
function rmtrans(e) {
	 
	 console.log(e);
}

const keys = document.querySelector('.key');
keys.forEach(key => key.addEventListener('transitioned',rmtrans));*/

window.addEventListener("keydown", function (e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return;
	audio.currentTime = 0;
	audio.play();	
	key.classList.add('playing');
	setTimeout(function() {
		key.classList.remove("playing")
	},100);		
});


