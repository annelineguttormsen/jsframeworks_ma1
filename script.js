//enkelt slideshow

//lagre slideshow elementene og pips som skal
//vise hvor i slideshowet man er
const $slideShowImgs = $(".slideshow__image");
const $pips = $(".pip");

let slideIndex = 1;

//sett opp interval for å endre slideshow bilde
let slideShowInterval = setInterval(function() {
	changeSlide()
},5000);

function changeSlide() {
	if (slideIndex==3) {
		slideIndex = 0;
		$($slideShowImgs[1]).removeClass("slideshow__image--current");
		$($slideShowImgs[2]).removeClass("slideshow__image--current");
		$($pips[2]).removeClass("pip--current");
	}
	$($pips[slideIndex-1]).removeClass("pip--current");
	$($pips[slideIndex]).addClass("pip--current");
	$($slideShowImgs[slideIndex]).addClass("slideshow__image--current");
	slideIndex++;
}